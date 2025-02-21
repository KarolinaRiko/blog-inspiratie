import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css"; // Asigură-te că ai stilurile în acest fișier

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <NavLink to="/review" activeClassName="active">Review</NavLink>
        <NavLink to="/settings" activeClassName="active">Settings</NavLink>
        <NavLink to="/logout" activeClassName="active">Log Out</NavLink>
      </nav>

      {/* Conținut principal */}
      <div className="content">
        <h2>Hi, Karolina</h2>
        <p>Email: riaboconi.k@gmail.com</p>

        {/* Opțiunea de abonare */}
        <div className="subscription">
          <h3>Abonati-va</h3>
          <input type="email" placeholder="Introduceți email-ul" />
          <button>Subscribe</button>
        </div>

        {/* Secțiunea de review */}
        <div className="reviews">
          <h3>Review-urile tale</h3>
          <p>⭐ ⭐ ⭐ ⭐  - Super!</p>
          <p>⭐ ⭐ ⭐  - E ok...</p>
        </div>

        {/* Informații personale */}
        <div className="personal-info">
          <h3>Datele tale</h3>
          <ul>
            <li>Prenume: Karolina</li>
            <li>Nume: Riabokon</li>
            <li>Data nașterii: 29.04.2005</li>
            <li>Gen: Feminin</li>
            <li>Email: riaboconi.k@gmail.com</li>
            <li>Parolă: **********</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
