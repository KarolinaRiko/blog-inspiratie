import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs, addDoc, query, where, onSnapshot, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import CommentForm from "../../Comments/CommentForm.js";
import { getAuth } from "firebase/auth";


function BookReview() {
  const { category, bookSlug } = useParams();
  const [book, setBook] = useState(null);
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
    if (!bookSlug) return;
    const commentsRef = collection(db, "comments");
    const q = query(
      commentsRef,
      where("postId", "==", bookSlug),
      where("postType", "==", "Carti")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      list.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
      setComments(list);
    });

    return () => unsubscribe();
  }, [bookSlug, userId]);

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
      postId: bookSlug,
      postType: "Carti",
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
    const fetchBook = async () => {
      try {
        const booksSnapshot = await getDocs(collection(db, "bookReviews"));
        const booksList = booksSnapshot.docs.map(doc => doc.data());
        const foundBook = booksList.find(
          b => b.slug === bookSlug && b.category === category
        );
        if (foundBook) {
          setBook(foundBook);
        } else {
          console.log("Cartea nu a fost găsită!");
        }
      } catch (error) {
        console.error("Eroare la încărcarea cărții:", error);
      }
    };

    fetchBook();
  }, [bookSlug, category]);

  if (!book) return <h2>Cartea nu a fost găsită!</h2>;

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category"></div>
        <div className="books-container">
          <img src={book.image} alt={book.title} className="book-rw-image" />
          <div className="book-rw-details">
            <h2>{book.title}</h2>
            <p><strong>Autor:</strong> {book.author}</p>
            {book.details && (
              <>
                <p><strong>Categoria:</strong> {book.details.categories}</p>
                <p><strong>Limba:</strong> {book.details.language}</p>
                <p><strong>Data publicării:</strong> {book.details.published}</p>
                <p><strong>Editura:</strong> {book.details.publisher}</p>
                <p><strong>Nr. pagini:</strong> {book.details.pages}</p>
              </>
            )}
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < book.rating ? "#ffcc00" : "#d3d3d3"} />
              ))}
            </div>
            <div className="book-review-container">
              <h3>Introducere:</h3>
              <ul>
                {book.review.introduction.map((intro, index) => (
                  <li key={index}>{intro}</li>
                ))}
              </ul>
              <h3>Părerea mea:</h3>
              <ul>
                {book.review.parerea.map((parere, index) => (
                  <li key={index}>{parere}</li>
                ))}
              </ul>
              <h3>Ce mi-a plăcut:</h3>
              <ul>
                {book.review.pros.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
              <h3>Ce nu mi-a plăcut:</h3>
              <ul>
                {book.review.cons.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
              <h3>Concluzie:</h3>
              <ul>
                {book.review.conclusion.map((concluzie, index) => (
                  <li key={index}>{concluzie}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="comments-section">
            <h3>Comentarii:</h3>
            <CommentForm postId={bookSlug} postType="Carti" handleAddComment={handleAddComment} />

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
}

export default BookReview;