import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.js";

function AdminComments() {
  const [comments, setComments] = useState([]);
  const [newReply, setNewReply] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState(null);

  const confirmDeleteComment = (id) => {
    setCommentIdToDelete(id);
    setShowConfirmMessage(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'comments', id));
      setComments(prevComments => prevComments.filter(comment => comment.id !== id));
    } catch (error) {
      console.error("Eroare la ștergere:", error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      const snapshot = await getDocs(collection(db, "comments"));
      setComments(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchComments();
  }, []);

  const handleReply = async (id) => {
    if (!newReply) return;
    const commentRef = doc(db, "comments", id);
    await updateDoc(commentRef, {
      reply: newReply,
    });
    setNewReply("");
    setEditingComment(null);
  };

  const handleEdit = (comment) => {
    setEditingComment(comment);
    setNewReply(comment.reply || "");
  };

  return (
    <div>
      <div className="do">Comentarii</div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment-item">
          <strong>{comment.name}</strong> ({comment.email}) la {comment.postType} "{comment.postId}"
          <br />
          <p>{comment.message}</p>

          {comment.reply && (
            <p className="reply">Răspuns: {comment.reply}</p>
          )}

          <button onClick={() => handleEdit(comment)} className="edit-button">
            Modifică răspuns
          </button>
          <button  className="delete-button" onClick={() => confirmDeleteComment(comment.id)}>Șterge</button>

          {editingComment?.id === comment.id && (
            <div className="reply-container">
              <textarea
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                placeholder="Scrie răspunsul aici"
              ></textarea>
              <button onClick={() => handleReply(comment.id)} className="submit-reply-button">
                Trimite răspuns
              </button>
            </div>
          )}
        </div>
      ))}
      {showConfirmMessage && (
        <div className="confirmation-message">
          <p>Vrei să ștergi acest comentar?</p>
          <div className="confirmation-buttons">
            <button
              onClick={() => {
                handleDelete(commentIdToDelete);
                setShowConfirmMessage(false);
              }}
            >
              Da
            </button>
            <button onClick={() => setShowConfirmMessage(false)}>Nu</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminComments;
