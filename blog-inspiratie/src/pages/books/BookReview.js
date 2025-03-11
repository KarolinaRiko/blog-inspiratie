import { useParams } from "react-router-dom";
import React from "react";
import { FaStar } from "react-icons/fa";

const bookReviews = {
  "mindfulness-zi-de-zi": {
    title: "Mindfulness zi de zi",
    author: "Jon Kabat-Zinn",
    image: "https://cdn.dc5.ro/img-prod/3900534830-0.jpeg",
    details: {
      category: "Spiritualitate",
      language: "Română",
      published: "2024",
      publisher: "Herald",
      pages: 272
    },
    rating: 5,
    review: {
      introduction: [
        "Trăim într-o lume aglomerată orice și orice și uneori orice, în afară de momentul de care suntem înconjurați în prezent. Aceasta este Mindfulness de zi cu zi: temelia acestei cărți a fost făcută informativă despre modul în care o practică precum mindfulness poate reformula întreaga perspectivă a vieții cuiva.",
      ],
      parerea: [
        "Eu personal, la început, nu am dat prea mult credibilitate practicii conștiente, deoarece am crezut că este o idee vagă, abstractă, cu valoare mică sau deloc în realitate. Kabat-Zinn, însă, reușește să facă conceptele de mindfulness clare și concrete într-un mod ușor de înțeles. Cartea nu este doar teorie, ci oferă exerciții pe care cititorul le poate folosi imediat pentru a aplica lecțiile învățate.",
      ],
      pros: [
        "Cartea oferă exerciții practice ușor de aplicat.",
        "Ton cald și prietenos.",
        "Explicații științifice clare despre mindfulness."
      ],
      cons: [
        "Stilul autorului poate fi prea detaliat pentru unii cititori.",
        "Unele secțiuni pot părea tehnice pentru începători."
      ],
      conclusion: [
        "Aș sugera această carte oricui ar dori să înțeleagă mai bine ce este mindfulness și cum funcționează. Conștientizarea zilnică a lui Jon Kabat-Zinn este mai mult decât o carte de citit; este un manual pentru a trăi mai atent și mai echilibrat. Dacă vă interesează dezvoltarea personală și doriți să vă îmbunătățiți psihicul, atunci această carte este o necesitate în agenda dvs. de lectură."
      ],
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
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
        </div>
        <div className="books-container">
          <img src={book.image} alt={book.title} className="book-rw-image" />
          <div className="book-rw-details">
            <h2>{book.title}</h2>
            <p><strong>Autor:</strong> {book.author}</p>
            {book.details && (
              <>
                <p><strong>Categoria:</strong> {book.details.category}</p>
                <p><strong>Limba:</strong> {book.details.language}</p>
                <p><strong>Data publicării:</strong> {book.details.published}</p>
                <p><strong>Editura:</strong> {book.details.publisher}</p>
                <p><strong>Nr. pagini:</strong> {book.details.pages}</p>
              </>
            )}
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < book.rating ? "#ffcc00" : "#d3d3d3"} />
              ))}
            </div>

            <div className="book-review-container">
              <h3>Introducere:</h3>
              <ul>
                {book.review.introduction.map((introductions, index) => (
                  <li key={index}>{introductions}</li>
                ))}
              </ul>
              <h3>Parerea mea:</h3>
              <ul>
                {book.review.parerea.map((parere, index) => (
                  <li key={index}>{parere}</li>
                ))}
              </ul>
              <h3>Ce mi-a plăcut:</h3>
              <ul>
                {book.review.pros.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
              <h3>Ce nu mi-a plăcut:</h3>
              <ul>
                {book.review.cons.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
              <h3>Concluzie:</h3>
              <ul>
                {book.review.conclusion.map((conclusions, index) => (
                  <li key={index}>{conclusions}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default BookReview;