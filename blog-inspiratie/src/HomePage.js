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
        <p>Email: karolina@gmail.com</p>

        {/* Opțiunea de abonare */}
        <div className="subscription">
          <h3>Abonati-va</h3>
          <input type="email" placeholder="Introduceți email-ul" />
          <button>Subscribe</button>
        </div>

        {/* Secțiunea de review */}
        <div className="reviews">
          <h3>Review-urile tale</h3>
          <p>⭐ ⭐ ⭐ ⭐ ✩ - Super!</p>
          <p>⭐ ⭐ ⭐ ✩ ✩ - E ok...</p>
        </div>

        {/* Informații personale */}
        <div className="personal-info">
          <h3>Datele tale</h3>
          <ul>
            <li>Prenume: Karolina</li>
            <li>Nume: Doe</li>
            <li>Data nașterii: 01.01.2000</li>
            <li>Gen: Feminin</li>
            <li>Email: karolina@gmail.com</li>
            <li>Parolă: ******</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
