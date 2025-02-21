import { useParams, NavLink } from "react-router-dom";
import React from "react";
import booksData from "./bookData";

const categoryNames = {
  "dezvoltare-personala": "Dezvoltare Personală",
  "romantism": "Romantism",
  "psihologie": "Psihologie",
  "spiritualitate": "Spiritualitate",
};


function BookCategory() {
  const { category } = useParams();
  const books = booksData[category] || [];

  return (
    <div className="book-category">
     <h1>{categoryNames[category] || "Categorie necunoscută"}</h1>

      <div className="books-container">
        {books.map((book) => (
          <div key={book.slug} className="book-card">
            <NavLink to={`/books/${category}/${book.slug}`}>
              <img src={book.image} alt={book.title} className="book-image" />
            </NavLink>
            <div className="book-info">
              <h2>
                <NavLink to={`/books/${category}/${book.slug}`} className="book-title">
                  {book.title}
                </NavLink>
              </h2>
              <div className="book-subtitle">
              <p>{book.subtitle}</p>
              </div>
              {book.details && (
                <div className="book-details">
                  <p><strong>Categorii:</strong> {book.details.categories}</p>
                  <p><strong>Limba:</strong> {book.details.language}</p>
                  <p><strong>Data publicării:</strong> {book.details.publicationDate}</p>
                  <p><strong>Editura:</strong> {book.details.publisher}</p>
                  <p><strong>Autor:</strong> {book.details.author}</p>
                  <p><strong>Nr. pagini:</strong> {book.details.pages}</p>
                  <p><strong>Cumpără: </strong> 
                    <NavLink to={book.details.cumpara} className="buy-link" target="_blank" rel="noopener noreferrer">
                      carturești
                    </NavLink></p>
                </div>
              )}
               
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCategory;