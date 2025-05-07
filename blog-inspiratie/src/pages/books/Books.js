import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const Books = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const booksCollection = collection(db, "category-books");
        const booksSnapshot = await getDocs(booksCollection);
        const booksList = booksSnapshot.docs
          .map(doc => doc.data())
          .filter(books => books.category === "books");

        setBooks(booksList);
      } catch (error) {
        console.error("Eroare la citirea datelor din Firestore:", error);
      }
    };

    fetchCategories();
  }, [category]);

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>Toate categoriile</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">
          {books.map((books) => (
            <div key={books.slug} className="all-card">
              <NavLink to={`/books/${books.slug}`} className="all-title">
                <img
                  src={books.image}
                  alt={books.title}
                  className="all-image"
                />
              </NavLink>
              <div className="all-info">
                <h2>
                  <NavLink to={`/books/${books.slug}`} className="all-title">
                    {books.title}
                  </NavLink>
                </h2>
                <div className="all-subtitle">
                  <p>{books.description}</p>
                </div>
              </div>
              <NavLink to={`/books/${books.slug}`}>
                <button className="read-more-button">CITEȘTE...</button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
