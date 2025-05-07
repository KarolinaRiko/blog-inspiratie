import React, { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { useParams } from "react-router-dom";
import { collection, getDoc, addDoc, query, where, onSnapshot, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CommentForm from "../../Comments/CommentForm.js";
import { getAuth } from "firebase/auth";

const Meditatie = () => {
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
    const fetchMeditatie = async () => {
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

    fetchMeditatie();
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
          <section className="meditatie-intro">
            <div className="meditatie-title">{data.titlu1}</div>
            <p>{data.introducere.text1}</p>
            <p>{data.introducere.text2}</p>
            <img src={data.image1} alt="meditatie"></img>
          </section>
          <section className="meditatie-intro">
            <div className="meditatie-title">{data.titlu2}</div>
            <p>{data.meditatie.text1}</p>
            <p>{data.meditatie.text2}</p>
            <div className="meditatie-motive">{data.titlu3}</div>
            <ul className="meditatie-list">
              {(data.motive || []).map((item, index) => (
                <li key={index}>
                  <b>{item.tip}: </b>{item.descriere}
                </li>
              ))}
            </ul>
          </section>

          <section className="meditatie-intro">
            <div className="meditatie-title">{data.titlu4}</div>
            <p>{data.desc}</p>

            {data.forme.map((forma, index) => (
              <div key={index}>
                <div className="meditatie">{forma.tip}</div>
                <p>{forma.descriere}</p>

                {forma.instructiuni.map((instr, idx) => (
                  <div key={idx}>
                    <p>{instr.descriere}</p>
                    <div className="meditatie-container">
                      <div className="meditaties">{instr.denumire}</div>
                      <ol className="meditatie-lists">
                        {instr.pasi.map((pas, i) => (
                          <li key={i}>{pas}</li>
                        ))}
                      </ol>
                    </div>
                    {instr.image && (
                      <img src={instr.image} alt="instructiune meditatie" className="meditatie-img" />
                    )}
                  </div>
                ))}
              </div>
            ))}
            <div className='meditatie-title'>{data.titlu5}</div>
            <p>{data.descr}</p>
            {data.modalitati.map((mod, index) => (
              <div key={index}>
                <div className="meditatie">{mod.tip}</div>
                <p>{mod.descriere}</p>

                {mod.instructiuni.map((instr, idx) => (
                  <div key={idx}>
                    <div className="meditatie-container">
                      <div className='meditaties'>{instr.denumire}</div>
                      <ol className='meditatie-lists'>
                        {instr.pasi.map((pas, i) => (
                          <li key={i}>{pas}</li>
                        ))}
                      </ol>
                    </div>
                    {instr.image && (
                      <img src={instr.image} alt="instructiune meditatie" className="meditatie-img" />
                    )}
                  </div>
                ))}
              </div>
            ))}
            <img src={data.imagine6} alt="ghid"></img>
            <div className='meditatie-motive'>{data.intrebare}</div>
            <p>{data.cat}</p>
            <div className='meditatie-title'>{data.titlu6}</div>
            <p>{data.conclu}</p>
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
    </div >
  );
}

export default Meditatie;