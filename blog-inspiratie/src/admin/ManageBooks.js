import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { doc, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { CheckCircle, XCircle, Edit2, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import "../App.css";

function ManageBooks() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState(["Dezvoltare Personală", "Spiritualitate", "Psihologie", "Romantism"]);
  const [language, setLanguage] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [publisher, setPublisher] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [cumpara, setCumpara] = useState("");
  const [slug, setSlug] = useState("");
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const navigate = useNavigate();

  const handleDeleteClick = (bookSlug) => {
    setConfirmDelete(bookSlug);
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

    const newBook = {
      slug,
      title,
      subtitle,
      image,
      category: slugify(category),
      details: {
        language,
        categories: [category],
        publicationDate,
        publisher,
        author,
        pages,
        cumpara,
      },
    };

    try {
      await setDoc(doc(db, "books", slug), newBook);
      setMessage({ text: "Carte adăugată cu succes!", type: "success" });
      setTitle("");
      setSubtitle("");
      setImage("");
      setCategory("");
      setLanguage("");
      setPublicationDate("");
      setPublisher("");
      setAuthor("");
      setPages("");
      setCumpara("");
      setSlug("");
      fetchBooks();
    } catch (error) {
      console.error("Eroare la adăugarea cărții:", error);
      setMessage({ text: "Eroare la adăugare!", type: "error" });
    }

    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  const fetchBooks = async () => {
    const booksCollection = collection(db, "books");
    const booksSnapshot = await getDocs(booksCollection);
    const booksList = booksSnapshot.docs.map(doc => doc.data());
    setBooks(booksList);
  };

  const handleDelete = async (slug) => {
    try {
      await deleteDoc(doc(db, "books", slug));
      setMessage({ text: "Carte ștearsă cu succes!", type: "success" });
      fetchBooks(); 
    } catch (error) {
      console.error("Eroare la ștergerea cărții:", error);
      setMessage({ text: "Eroare la ștergere!", type: "error" });
    }
    setConfirmDelete(null);  
  };

  useEffect(() => {
    fetchBooks();
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

      <div className="man" >Adaugă o carte</div>
      <form onSubmit={handleSubmit} className="admin-forms">
        <input type="text" placeholder="Titlu" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Subtitlu" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required />
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
        <input type="text" placeholder="Limba" value={language} onChange={(e) => setLanguage(e.target.value)} />
        <input type="number" placeholder="Data publicării" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
        <input type="text" placeholder="Editura" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
        <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input type="number" placeholder="Nr. pagini" value={pages} onChange={(e) => setPages(e.target.value)} />
        <input type="url" placeholder="Link cumpărare" value={cumpara} onChange={(e) => setCumpara(e.target.value)} />

        <div className="button-containers">
          <button type="submit">Adaugă Recenzia</button>
        </div>
      </form>
      
      <div className="book-list">
        <h3>Cărți adăugate</h3>
        <div className="book-grid">
          {books.map(book => (
            <div
              key={book.slug}
              className={`book-card ${confirmDelete === book.slug ? "confirm-delete" : ""}`}
            >
              <img src={book.image} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.details.categories}</p>
              <div className="book-actions">
                <button
                  onClick={() => navigate('/admin/books/review')}
                  className="edit-button"
                >
                  <Edit2 />
                </button>
                <button
                  onClick={() => handleDeleteClick(book.slug)}
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
            <p>Vrei să ștergi această carte?</p>
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
