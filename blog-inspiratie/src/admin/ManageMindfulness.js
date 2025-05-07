import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { doc, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { CheckCircle, XCircle, Edit2, Trash2 } from "lucide-react";
import "../App.css";

function ManageMindfulness() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [categories] = useState(["Mindfulness"]);
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [exercises, setExercises] = useState([]);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  const slugify = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExercise = {
      slug,
      title,
      image,
      category: slugify(category),
      categories: [category],
      description,
    };

    try {
      await setDoc(doc(db, "mindfulness", slug), newExercise);
      setMessage({ text: "Exercițiu adăugat cu succes!", type: "success" });
      setTitle(""); setImage(""); setCategory(""); setDescription(""); setSlug("");
      fetchExercises();
    } catch (error) {
      console.error("Eroare la adăugare:", error);
      setMessage({ text: "Eroare la adăugare!", type: "error" });
    }

    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  const fetchExercises = async () => {
    const col = collection(db, "mindfulness");
    const snapshot = await getDocs(col);
    const list = snapshot.docs.map(doc => doc.data());
    setExercises(list);
  };

  const handleDelete = async (slug) => {
    try {
      await deleteDoc(doc(db, "mindfulness", slug));
      setMessage({ text: "Șters cu succes!", type: "success" });
      fetchExercises();
    } catch (error) {
      console.error("Eroare la ștergere:", error);
      setMessage({ text: "Eroare la ștergere!", type: "error" });
    }
    setConfirmDelete(null);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div>
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.type === "success" ? <CheckCircle color="green" /> : <XCircle color="red" />}
          {message.text}
        </div>
      )}

      <div className="denumire">Adaugă la sectiunea de mindfulness</div>
      <form onSubmit={handleSubmit} className="admin-forms">
        <input type="text" placeholder="Titlu" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Link imagine" value={image} onChange={(e) => setImage(e.target.value)} required />

        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Selectează o categorie</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>

        <input type="text" placeholder="Slug personalizat" value={slug} onChange={(e) => setSlug(e.target.value)} required />
        <input type="text" placeholder="Descriere" value={description} onChange={(e) => setDescription(e.target.value)} />

        <div className="button-containers">
          <button type="submit">Adaugă</button>
        </div>
      </form>

      <div className="book-list">
        <h3>Sectiunea de mindfulness</h3>
        <div className="book-grid">
          {exercises.map(ex => (
            <div key={ex.slug} className={`recipes-card ${confirmDelete === ex.slug ? "confirm-delete" : ""}`}>
               <img src={ex.image} alt={ex.title} />
              <h4>{ex.title}</h4>
              <p>{ex.categories}</p>
              <div className="recipes-actions">
                <button className="edit-button"><Edit2 /></button>
                <button className="delete-button" onClick={() => { setConfirmDelete(ex.slug); setShowConfirmMessage(true); }}>
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>

        {showConfirmMessage && (
          <div className="confirmation-message">
            <p>Vrei să ștergi acest exercițiu?</p>
            <div className="confirmation-buttons">
              <button onClick={() => { handleDelete(confirmDelete); setShowConfirmMessage(false); }}>Da</button>
              <button onClick={() => setShowConfirmMessage(false)}>Nu</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageMindfulness;
