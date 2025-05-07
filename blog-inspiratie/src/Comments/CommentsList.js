import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";

function CommentsList({ postId, postType }) {
  const [comments, setComments] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  
  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("postId", "==", postId),
      where("postType", "==", postType)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(list);

      const likes = list.filter(comment => comment.likedBy && comment.likedBy.includes(userId));
      setUserLikes(likes.map(comment => comment.id));
    });

    return () => unsubscribe();
  }, [postId, postType, userId]);

  const handleLike = async (id, currentLikes, likedBy) => {
    const commentRef = doc(db, "comments", id);
  
    if (likedBy.includes(userId)) {
      const updatedLikedBy = likedBy.filter(uid => uid !== userId);
      await updateDoc(commentRef, {
        likes: currentLikes - 1,
        likedBy: updatedLikedBy
      });
      setUserLikes(prevLikes => prevLikes.filter(likeId => likeId !== id));
    } else {
      // Dacă nu a dat like, adaugă like
      const updatedLikedBy = [...likedBy, userId];
      await updateDoc(commentRef, {
        likes: currentLikes + 1,
        likedBy: updatedLikedBy
      });
      setUserLikes(prevLikes => [...prevLikes, id]);
    }
  };  

  return (
    <div className="comments">
      {comments.map(c => (
        <div key={c.id} className="comment-item">
          <Avatar name={c.name} />
          <div>
            <strong>{c.name}</strong> <small>{c.email}</small>
            <p>{c.message}</p>
            <button onClick={() => handleLike(c.id, c.likes, c.likedBy)} disabled={userLikes.includes(c.id)}>
              ❤️ {c.likes || 0}
            </button>
            {!c.replied && (
              <ReplyForm commentId={c.id} onReply={handleReply} />
            )}
            {c.reply && <p className="reply">Răspuns: {c.reply}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
