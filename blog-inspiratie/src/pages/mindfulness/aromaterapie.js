import React, { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { useParams } from "react-router-dom";
import { collection, getDoc, addDoc, query, where, onSnapshot, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CommentForm from "../../Comments/CommentForm.js";
import { getAuth } from "firebase/auth";


const Aromaterapie = () => {
  const [data, setData] = useState(null);
  const { slug } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", email: "", text: "" });
  const [userId, setUserId] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replyingToId, setReplyingToId] = useState(null);
  const ADMIN_UID = "7Lgzc3qEyHWDENPO0BunY81jMMm2";

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!slug) return;
    const commentsRef = collection(db, "comments");
    const q = query(
      commentsRef,
      where("postId", "==", slug),
      where("postType", "==", "Mindfulness")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      list.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
      setComments(list);
    });

    return () => unsubscribe();
  }, [slug, userId]);

  const handleLike = async (id, likes, likedBy) => {
    if (!likedBy) likedBy = [];

    if (likedBy.includes(userId)) {
      await updateDoc(doc(db, "comments", id), {
        likes: likes - 1,
        likedBy: likedBy.filter(uid => uid !== userId)
      });
    } else {
      await updateDoc(doc(db, "comments", id), {
        likes: likes + 1,
        likedBy: [...likedBy, userId]
      });
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.text) return;

    const newCommentData = {
      ...newComment,
      postId: slug,
      postType: "Mindfulness",
      createdAt: serverTimestamp(),
      likes: 0,
      likedBy: [],
      userId: userId,
      replied: false
    };

    await addDoc(collection(db, "comments"), newCommentData);
    setComments((prevComments) => [newCommentData, ...prevComments]);

    setNewComment({ name: "", email: "", text: "" });
  };

  const handleReplySubmit = async (e, commentId) => {
    e.preventDefault();
    if (!replyText) return;

    await updateDoc(doc(db, "comments", commentId), {
      reply: replyText,
      replied: true,
    });

    setReplyText("");
    setReplyingToId(null);
  };

  useEffect(() => {
    const fetchAromaterapie = async () => {
      try {
        const docRef = doc(db, "Mindfulness", slug);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("Documentul nu există.");
        }
      } catch (error) {
        console.error("Eroare la încărcare:", error);
      } 
    };

    fetchAromaterapie();
  }, [slug]);

  if (!data) return <p>Nu s-au găsit date.</p>;


  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>{data.title}</h1>
          <hr className="dashed-line" />
        </div>
        <div className="recipe-container">
          <div className="intro-section">
            <div className="intro-text">
              <div className="introducere">{data.introducere.text1}</div>
              <b>{data.introducere.text2}</b>
            </div>
          </div>

          <div className="aroma-title">{data.titlu1}</div>
          <div className="intro-section">
            <div className="intro-image">
              <img src={data.imagineIntro} alt="Aromaterapie" />
            </div>
            <div className="intro-text">
              {(data.ceEste || []).map((text, index) => (
                <div key={index} className="aroma">{text}</div>
              ))}
            </div>
          </div>

          <div className="benefits-section">
            <div className="aromas-title">{data.titlu2}</div>
            <ul>
              {(data.beneficii || []).map((item, index) => (
                <li key={index}>
                  <b>{item.titlu}: </b>{item.descriere}
                </li>
              ))}
            </ul>
          </div>

          <div className="essential-oils-section">
            <div className="aromas-title">{data.titlu3}</div>
            <div className="oil-container">
              {(data.uleiuri || []).map((ulei, index) => (
                <div className="oil-item" key={index}>
                  <div className="oil-title">{ulei.nume}</div>
                  <p>{ulei.descriere}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="modalitati-section">
            <div className="aromas-title">{data.titlu4}</div>
            <ul>
              {(data.modalitati || []).map((mod, index) => (
                <li key={index}>
                  <b>{mod.tip}:</b> {mod.descriere}
                </li>
              ))}
            </ul>
          </div>

          <div className="sfaturi-section">
            <div className="aromas-title">{data.titlu5}</div>
            <ul>
              {data.sfaturi.map((sfat, index) => (
                <div key={index} className='sfaturi'>
                  <div className='sfaturi'>{sfat.titlu}</div>
                  {sfat.recomandari.map((recomandare, index) => (
                    <li key={index}>{recomandare}</li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
          <div className="comments-section">
            <h3>Comentarii:</h3>
            <CommentForm postId={slug} postType="Mindfulness" handleAddComment={handleAddComment} />

            {comments.length === 0 ? (
              <p>Nu există comentarii încă.</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <div className="avatar">{comment.name[0]?.toUpperCase()}</div>
                  <div className="comment-content">
                    <strong>{comment.name}</strong>
                    <p>{comment.message}</p>
                    {comment.reply && <p className="reply">Răspuns: {comment.reply}</p>}

                    {!comment.replied && userId === ADMIN_UID && (
                      replyingToId === comment.id ? (
                        <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="reply-form">
                          <input
                            type="text"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Scrie un răspuns..."
                          />
                          <div className="form-actions">
                            <button type="submit">Trimite răspuns</button>
                            <button type="button" onClick={() => setReplyingToId(null)} className="cancel-btn">Anulează</button>
                          </div>
                        </form>
                      ) : (
                        <button onClick={() => setReplyingToId(comment.id)} className="reply-btn">Răspunde</button>
                      )
                    )}
                  </div>

                  <div className="like-btn">
                    <button
                      onClick={() => handleLike(comment.id, comment.likes, comment.likedBy)}
                      className={comment.likedBy?.includes(userId) ? "liked" : "not-liked"}
                    >
                      {comment.likedBy?.includes(userId) ? <FaHeart /> : <FaRegHeart />}
                      {comment.likes}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aromaterapie;