import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { doc, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { CheckCircle, XCircle, Edit2, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import "../App.css";

function ManageBooks() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState(["Exercitii Lower", "Exercitii Upper", "Apdomen", "Sectere"]);
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [fitness, setFitness] = useState([]);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const navigate = useNavigate();

  const handleDeleteClick = (fitnessSlug) => {
    setConfirmDelete(fitnessSlug);
    setShowConfirmMessage(true);
  };

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

    const newFitness = {
      slug,
      title,
      image,
      category: slugify(category),
      categories: [category],
      description,
    };

    try {
      await setDoc(doc(db, "fitness", slug), newFitness);
      setMessage({ text: "Carte adăugată cu succes!", type: "success" });
      setTitle("");
      setImage("");
      setCategory("");
      setDescription("");
      setSlug("");
      fetchFitness(); 
    } catch (error) {
      console.error("Eroare la adăugarea cărții:", error);
      setMessage({ text: "Eroare la adăugare!", type: "error" });
    }

    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  const fetchFitness = async () => {
    const fitnessCollection = collection(db, "fitness");
    const fitnessSnapshot = await getDocs(fitnessCollection);
    const fitnessList = fitnessSnapshot.docs.map(doc => doc.data());
    setFitness(fitnessList);
  };

  const handleDelete = async (slug) => {
    try {
      await deleteDoc(doc(db, "fitness", slug));
      setMessage({ text: "Carte ștearsă cu succes!", type: "success" });
      fetchFitness();
    } catch (error) {
      console.error("Eroare la ștergerea cărții:", error);
      setMessage({ text: "Eroare la ștergere!", type: "error" });
    }
    setConfirmDelete(null);
  };

  useEffect(() => {
    fetchFitness();
  }, []);

  return (
    <div>
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.type === "success" ? (
            <CheckCircle color="green" size={20} style={{ marginRight: 8 }} />
          ) : (
            <XCircle color="red" size={20} style={{ marginRight: 8 }} />
          )}
          {message.text}
        </div>
      )}

      <div className="mn">Adaugă un exercitiu</div>
      <form onSubmit={handleSubmit} className="admin-forms">
        <input type="text" placeholder="Titlu" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Imagine URL" value={image} onChange={(e) => setImage(e.target.value)} required />

        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Selectează o categorie</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Adaugă categorie nouă"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          onBlur={() => {
            if (newCategory && !categories.includes(newCategory)) {
              setCategories(prev => [...prev, newCategory]);
              setCategory(newCategory);
              setNewCategory("");
            }
          }}
        />

        <input type="text" placeholder="Slug personalizat" value={slug} onChange={(e) => setSlug(e.target.value)} required />
        <input type="text" placeholder="Descriere" value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className="button-containers">
          <button type="submit">Adaugă Detalii</button>
        </div>
      </form>


      <div className="book-list">
        <h3>Cărți adăugate</h3>
        <div className="book-grid">
          {fitness.map(fitness => (
            <div
              key={fitness.slug}
              className={`recipes-card ${confirmDelete === fitness.slug ? "confirm-delete" : ""}`}
            >
              <img src={fitness.image} alt={fitness.title} />
              <h4>{fitness.title}</h4>
              <p>{fitness.categories}</p>
              <div className="recipes-actions">
                <button
                  onClick={() => navigate('/admin/fitness/detail')}
                  className="edit-button"
                >
                  <Edit2 />
                </button>
                <button
                  onClick={() => handleDeleteClick(fitness.slug)}
                  className="delete-button"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>

        {showConfirmMessage && (
          <div className="confirmation-message">
            <p>Vrei să ștergi această exercitiul?</p>
            <div className="confirmation-buttons">
              <button onClick={() => { handleDelete(confirmDelete); setShowConfirmMessage(false); }}>
                Da
              </button>
              <button onClick={() => setShowConfirmMessage(false)}>
                Nu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageBooks;
