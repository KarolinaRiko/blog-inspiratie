import React, { useEffect, useState } from "react";
import { collection, getDoc, addDoc, query, where, onSnapshot, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CommentForm from "../../Comments/CommentForm.js";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase.js";
import { useParams } from "react-router-dom";

const Yoga = () => {
  const [yogaData, setYogaData] = useState(null);
  const [selectedPose, setSelectedPose] = useState(null);
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
    const fetchData = async () => {
      try {
        const yogaDoc = await getDoc(doc(db, "Mindfulness", slug));
        if (yogaDoc.exists()) {
          setYogaData(yogaDoc.data());
        } else {
          console.log("Nu există documentul!");
        }
      } catch (error) {
        console.error("Eroare la citire:", error);
      } 
    };

    fetchData();
  }, [slug]);

  const togglePose = (poseName) => {
    setSelectedPose(selectedPose === poseName ? null : poseName);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".pose")) {
      setSelectedPose(null);
    }
  };

  if (!yogaData) return <p>Nu am găsit informații despre yoga.</p>;

  return (
    <div className="container-all" onClick={handleClickOutside}>
      <div className="all-wrapper">
        <div className="all-category">
          <h1>{yogaData.denumire}</h1>
          <hr className="dashed-line" />
        </div>
        <div className="recipe-container">
          <section className="yoga-intro">
            <div className="yoga-title">{yogaData.title1}</div>
            <p>{yogaData.introducere.text1}</p>
            <p>{yogaData.introducere.text2}</p>
            <p>{yogaData.introducere.text3}</p>
            <p>{yogaData.introducere.text4}</p>
            <img src={yogaData.imagine1} alt="Practicanți de yoga" className="yoga-image" />
          </section>

          <section className="yoga-types">
            <div className='pose-title'>{yogaData.title2}</div>
            <p>{yogaData.tipuri[0].den}</p>
            <ul>
              {yogaData.tipuri.slice(1).map((tip, index) => (
                <li key={index}>
                  <b>{tip.nume}</b> - {tip.descriere}
                </li>
              ))}
            </ul>
            <img src={yogaData.imagine2} alt="Tipuri de yoga" className="yoga-image" />
          </section>

          <section className="yoga-beneficii">
            <div className='pose-beneficii'>{yogaData.title3}</div>
            <p>{yogaData.beneficii[0].yoga}</p>
            <ul>
              {yogaData.beneficii[0].descriere.map((benef, index) => (
                <li key={index}>{benef}</li>
              ))}
            </ul>
          </section>

          <section className="poses-section">
            <div className='pose-title'>Posturi de Yoga</div>
            <div className="poses-container">
              {yogaData.poses.map((pose) => (
                <div key={pose.name} className={"pose-wrapper"}>
                  <div className="pose" onClick={() => togglePose(pose.name)}>
                    <p>{pose.name}</p>
                  </div>
                  {selectedPose === pose.name && (
                    <div className="pose-description">
                      <div className='intro-section'>
                        <div className='yoga-images'>
                          <img src={pose.img} className="pose-image" alt="" />
                        </div>
                        <div className='intro-text'>
                          {pose.description.map((desc, idx) => (
                            <p key={idx}>{desc}</p>
                          ))}
                        </div>
                      </div>
                      <div className="pose-steps">
                        <h3>Cum se face:</h3>
                        <ul>
                          {pose.steps.map((step, idx) => (
                            <li key={idx}>{step}</li>
                          ))}
                        </ul>
                      </div>
                      <div className='sfaturi-sections'>
                        <img src={pose.gif} className="pose-gif" alt="" />
                        <ol>
                          <h3>Sfaturi</h3>
                          {pose.sfaturi.map((sfat, idx) => (
                            <p key={idx}>{sfat}</p>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          <section className="yoga-intro">
            <div className="yoga-title">Concluzie</div>
            <p>{yogaData.concluzie}</p>
          </section>
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

export default Yoga;