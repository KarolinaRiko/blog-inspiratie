import React from "react";
import { NavLink } from "react-router-dom";

const Books = () => {
  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>Toate categoriile</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">
          <div className="all-card">
            <NavLink to="/books/dezvoltare-personala" className="all-title">
              <img
                src="https://blog.carturesti.ro/wp-content/uploads/2020/05/dezvoltare-personala.jpg"
                alt="Dezvoltare Personală"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/books/dezvoltare-personala" className="all-title">
                  Dezvoltare Personala
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Explorează cărți care te vor ajuta să îți îmbunătățești viața, să îți înfrunți limitele și să îți dezvolți abilități esențiale pentru o viață mai împlinită și mai echilibrată.</p>
              </div>
            </div>
            <NavLink to="/books/dezvoltare-personala">
              <button className="read-more-button">TOATE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/books/romantism" className="all-title">
              <img
                src="https://img3.stockfresh.com/files/s/srnr/m/82/1747556_stock-photo-red-rose-at-the-old-open-book.jpg"
                alt="Romantism"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/books/romantism" className="all-title">
                  Romantism
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Cufundă-te în lumi pline de iubire și pasiune, unde poveștile de dragoste îți vor atinge inima și te vor transporta într-o călătorie emoționantă.</p>
              </div>
            </div>
            <NavLink to="/books/romantism">
              <button className="read-more-button">TOATE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/books/psihologie" className="all-title">
              <img
                src="https://blogdecarti.ro/wp-content/uploads/2018/01/carti-psihologie-incepatori-820x509.jpg"
                alt="Psihologie"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/books/psihologie" className="all-title">
                  Psihologie
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Învață mai multe despre mintea umană și comportamentele noastre prin lecturi care îți vor oferi perspective noi asupra relațiilor, motivației și alegerilor de zi cu zi.</p>
              </div>
            </div>
            <NavLink to="/books/psihologie">
              <button className="read-more-button">TOATE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/books/spiritualitate" className="all-title">
              <img
                src="https://fpm.ro/wp-content/uploads/5-carti-de-spiritualitate-si-dezvoltare-personala-pe-care-trebuie-sa-le-citesti-in-2017.jpg"
                alt="Spiritualitate"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/books/spiritualitate" className="all-title">
                  Spiritualitate
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Descoperă tehnici și filosofii care te vor ajuta să trăiești în prezent, să îți găsești liniștea interioară și să îți cultivi un stil de viață mai conștient și mai echilibrat.</p>
              </div>
            </div>
            <NavLink to="/books/spiritualitate">
              <button className="read-more-button">TOATE...</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
