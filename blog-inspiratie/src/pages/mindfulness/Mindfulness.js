import React from "react";
import { NavLink } from "react-router-dom";

const Mindfulness = () => {
  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>Toate categoriile</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">
          <div className="all-card">
            <NavLink to="/mindfulness/yoga" className="all-title">
              <img
                src="https://www.medlife.ro/sites/default/files/2024-09/yoga-o-modalitate-prin-care-poti-elimina-stresul_0.jpg"
                alt="Yoga"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
            <h2>
            <NavLink to="/mindfulness/yoga" className="all-title">Yoga</NavLink>
            </h2>
            <div className="all-subtitle">
             <p>Concentrează-te pe prezent și învață cum să-ți liniștești mintea prin tehnici de meditație pentru o stare de calm și claritate.</p>
             </div>
          </div>
            <NavLink to="/mindfulness/yoga">
              <button className="read-more-button">CITESTE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/mindfulness/meditatie" className="all-title">
              <img
                src="https://www.catena.ro/assets/uploads/files/images/meditatie.jpg"
                alt="Meditatie"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
            <h2>
            <NavLink to="/mindfulness/meditatie" className="all-title">Meditatie</NavLink>
            </h2>
            <div className="all-subtitle">
             <p>Explorează puterea uleiurilor esențiale și cum aromele naturale pot transforma atmosfera și starea ta de bine.</p>
             </div>
             </div>
            <NavLink to="/mindfulness/meditatie">
              <button className="read-more-button">CITESTE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/mindfulness/aromoterapie" className="all-title">
              <img
                src="https://alecoair.ro/assets/blog_images/cele_mai_bune_uleiuri_esentiale_aromaterapie_682212448_(1).jpg"
                alt="Aromoterapie"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
            <h2>
            <NavLink to="/mindfulness/aromoterapie" className="all-title">Aromoterapie</NavLink>
            </h2>
            <div className="all-subtitle">
             <p>Flotările sunt un exercițiu clasic care lucrează pieptul, umerii și tricepsul. Poți varia dificultatea prin modificarea poziției mâinilor sau prin adăugarea de greutăți.</p>
             </div>
             </div>
            <NavLink to="/mindfulness/aromoterapie">
              <button className="read-more-button">CITESTE...</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mindfulness;




