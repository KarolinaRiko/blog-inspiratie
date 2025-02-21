import { useParams } from "react-router-dom";
import React from "react";

const bookReviews = {
  "puterea-prezentului": {
    title: "Puterea prezentului",
    author: "Eckhart Tolle",
    review: "Un ghid puternic pentru trăirea în prezent și dezvoltare personală.",
    image: "https://cdn.dc5.ro/img-prod/3900534830-0.jpeg",
    link: "https://www.example.com/puterea-prezentului"
  },
  "secretele-succesului": {
    title: "Secretele succesului",
    author: "Dale Carnegie",
    review: "Unul dintre cele mai citite ghiduri despre succes și relații interumane.",
    image: "https://example.com/secretele-succesului.jpg",
    link: "https://www.example.com/secretele-succesului"
  },
  "mindfulness-zi-de-zi": {
    title: "Mindfulness zi de zi",
    author: "Jon Kabat-Zinn",
    review: "Un ghid practic pentru integrarea mindfulness în viața cotidiană.",
    image: "https://cdn.dc5.ro/img-prod/3900534830-0.jpeg",
    details: {
      category: "Spiritualitate",
      language: "Română",
      published: "2024",
      publisher: "Herald",
      pages: 272
    }
  }
};

function BookReview() {
  const { bookSlug } = useParams();
  const book = bookReviews[bookSlug];

  if (!book) {
    return <h1>Cartea nu a fost găsită</h1>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <a href={book.link} target="_blank" rel="noopener noreferrer">
        <img src={book.image} alt={book.title} style={{ width: "200px", height: "auto" }} />
      </a>
      <div>
        <h1>
          <a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a>
        </h1>
        <p><strong>Autor:</strong> {book.author}</p>
        {book.details && (
          <>
            <p><strong>Categorii:</strong> {book.details.category}</p>
            <p><strong>Limba:</strong> {book.details.language}</p>
            <p><strong>Data publicării:</strong> {book.details.published}</p>
            <p><strong>Editura:</strong> {book.details.publisher}</p>
            <p><strong>Nr. pagini:</strong> {book.details.pages}</p>
          </>
        )}
        <p>{book.review}</p>
      </div>
    </div>
  );
}

export default BookReview;
