import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs, addDoc, query, where, onSnapshot, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CommentForm from "../../Comments/CommentForm.js";
import { getAuth } from "firebase/auth";

const RecipeDetail = () => {
  const { category, recipeSlug } = useParams(); 
  const [recipe, setRecipe] = useState(null);
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
      if (!recipeSlug) return;
      const commentsRef = collection(db, "comments");
      const q = query(
        commentsRef,
        where("postId", "==", recipeSlug),
        where("postType", "==", "Recete")
      );
  
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        list.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
        setComments(list);
      });
  
      return () => unsubscribe();
    }, [recipeSlug, userId]);
  
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
        postId: recipeSlug,
        postType: "Recete",
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
    const fetchRecipeDetail = async () => {
      try {
        const recipesSnapshot = await getDocs(collection(db, "recipesDetail")); // Folosește colecția corectă
        const recipesList = recipesSnapshot.docs.map(doc => doc.data());
        const foundRecipe = recipesList.find(
          recipe => recipe.slug === recipeSlug && recipe.category === category
        );
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          console.log("Rețeta nu a fost găsită!");
        }
      } catch (error) {
        console.error("Eroare la încărcarea rețetei:", error);
      }
    };

    fetchRecipeDetail();
  }, [recipeSlug, category]);

  if (!recipe) return <h2>Rețeta nu a fost găsită!</h2>;

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
        </div>
        <div className="recipe-container">
          <div className="recipe-title">{recipe.title}</div>
          <hr className="recipes-line" />
          <div className="recipe-header">
            <div className="recipe-ingredients">
              <h1>Ingrediente</h1>
              <ul>
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          </div>
          <hr className="recipes-line-2" />
          <div className="recipe-instructions">
            <h1>Mod de preparare:</h1>
            {recipe.steps?.map((step, index) => (
              <div key={index} className={`recipe-step ${index % 2 === 0 ? "left" : "right"}`}>
                <p>{step.text}</p>
                {step.image && <img src={step.image} alt={`Pasul ${index + 1}`} />}
              </div>
            ))}
          </div>
          <div className="comments-section">
                <h3>Comentarii:</h3>
                <CommentForm postId={recipeSlug} postType="Recete" handleAddComment={handleAddComment} />

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

export default RecipeDetail;
