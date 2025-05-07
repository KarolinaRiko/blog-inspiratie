import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs, addDoc, query, where, onSnapshot, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CommentForm from "../../Comments/CommentForm.js";
import { getAuth } from "firebase/auth";

const FitnessDetail = () => {
  const { category, fitnessSlug } = useParams();
  const [fitness, setFitness] = useState(null);
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
    if (!fitnessSlug) return;
    const commentsRef = collection(db, "comments");
    const q = query(
      commentsRef,
      where("postId", "==", fitnessSlug),
      where("postType", "==", "Fitness")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      list.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
      setComments(list);
    });

    return () => unsubscribe();
  }, [fitnessSlug, userId]);

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
      postId: fitnessSlug,
      postType: "Fitness",
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
    const fetchFitnessDetail = async () => {
      try {
        const fitnessSnapshot = await getDocs(collection(db, "fitnessDetail"));
        const fitnessList = fitnessSnapshot.docs.map(doc => doc.data());
        const foundFitness = fitnessList.find(
          exercise => exercise.slug === fitnessSlug && exercise.category === category
        );
        if (foundFitness) {
          setFitness(foundFitness);
        } else {
          console.log("Exercițiul nu a fost găsit!");
        }
      } catch (error) {
        console.error("Eroare la încărcarea exercițiului:", error);
      } 
    };

    fetchFitnessDetail();
  }, [fitnessSlug, category]);

  if (!fitness) return <h2>Exercițiul nu a fost găsit!</h2>;

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
        </div>
        <div className="recipe-container">
          <div className="exercise-detail">
            <div className="exercise-content">
              <h2>{fitness.title}</h2>
              <div className="separator-container">
                <div className="separator-line-left"></div>
                <img src="/images/dumbbell.png" alt="Ganteră" className="dumbbell-image" />
                <div className="separator-line-right"></div>
              </div>
              <div className="exercise-description">
                <p>{fitness.description}</p>
              </div>
              {fitness.gif && <img src={fitness.gif} alt={fitness.title} className="exercise-gif" />}
              <div className="exercise-steps">
                <h3>Pași pentru a face corect {fitness.title}</h3>
                <ul>
                  {fitness.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="exercise-recommendations">
                <h3>Recomandări Seturi și Repetări</h3>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Incepator</th>
                      <th>Intermediar</th>
                      <th>Avansat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Seturi</td>
                      <td>{fitness.recommendations.beginner.sets}</td>
                      <td>{fitness.recommendations.intermediate.sets}</td>
                      <td>{fitness.recommendations.advanced.sets}</td>
                    </tr>
                    <tr>
                      <td>Repetari</td>
                      <td>{fitness.recommendations.beginner.reps}</td>
                      <td>{fitness.recommendations.intermediate.reps}</td>
                      <td>{fitness.recommendations.advanced.reps}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card">
                <h3>Beneficii</h3>
                <ul>
                  {fitness.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3>Greșeli de evitat</h3>
                <ul>
                  {fitness.mistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </div>
              <div className="card muscle-card">
                <div>
                  <h3>Mușchi lucrați</h3>
                  <ul>
                    {fitness.muscles.map((muscle, index) => (
                      <li key={index}>{muscle}</li>
                    ))}
                  </ul>
                </div>
                {fitness.musclesImage && (
                  <img src={fitness.musclesImage} alt="Mușchi lucrați" className="muscles-image" />
                )}
              </div>
              <div className="motivation-section">
                <p><strong>{fitness.motivation}</strong></p>
              </div>
            </div>
            <div className="comments-section">
                <h3>Comentarii:</h3>
                <CommentForm postId={fitnessSlug} postType="Fitness" handleAddComment={handleAddComment} />

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
    </div>
  );
};

export default FitnessDetail;
