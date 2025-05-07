import { addDoc, collection, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function CommentForm({ postId, postType }) {
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData({ ...userDoc.data(), email: user.email });
        }
      } else {
        setUserData(null);
      }
    });
  
    return () => unsubscribe();
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message || !userData) return;

    await addDoc(collection(db, "comments"), {
      postId,
      postType,
      name: userData.firstName || "Anonim",
      email: userData.email,
      message,
      likes: 0,
      replied: false,
      reply: null,
      timestamp: serverTimestamp()
    });

    setMessage("");
  };

  if (!userData) {
    return <p>🔒 Trebuie să fii logat pentru a lăsa un comentariu.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input value={userData.firstName} disabled />
      <input value={userData.email} disabled />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Comentariul tău..."
        required
      />
      <button type="submit">Trimite</button>
    </form>
  );
}

export default CommentForm;
