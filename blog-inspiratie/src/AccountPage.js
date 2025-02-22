import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";  // Folosește useNavigate
import { auth, db } from "./auth"; // Importăm auth și db din fișierul auth.js
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import Logout from './Logout'; // Importăm componenta de logout
import "./App.css"; // Asigură-te că ai stilurile în acest fișier

const AccountPage = ({ onLogout }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Stare pentru încărcare
  const navigate = useNavigate(); // Folosim useNavigate pentru redirecționare

  // Ascultăm schimbările de autentificare și preluăm datele utilizatorului
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Preluăm datele din Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data()); // Setează datele utilizatorului în starea
          } else {
            console.log("Nu există un utilizator cu acest ID");
            setUserData(null); // Dacă nu există, setează datele ca null
          }
        } catch (error) {
          console.log("Eroare la preluarea datelor din Firestore:", error.message);
          setUserData(null); // În caz de eroare, setează ca null
        }
      } else {
        // Dacă utilizatorul nu este autentificat, redirecționăm către pagina de login
        navigate("/login");
      }

      setLoading(false); // Setează că încărcarea s-a terminat
    });

    return () => unsubscribe(); // Curăță abonamentul la schimbările de autentificare
  }, [navigate]);

  return (
    <div className="home-container">
      
      {/* Conținut principal */}
      <div className="content">
        {loading ? (
          <p>Se încarcă datele utilizatorului...</p> // Afișează doar dacă încă se încarcă
        ) : userData ? (
          <>
            <h2>Hi, {userData.firstName}</h2>
            <p>{userData.email}</p>

            <nav className="navbar">
            <NavLink to="/subscription" activeClassName="active">Subscription</NavLink>
              <NavLink to="/review" activeClassName="active">Review</NavLink>
              <NavLink to="/settings" activeClassName="active">Settings</NavLink>
              <Logout />

            </nav>

            {/* Informații personale */}
            <div className="personal-info">
              <h3>Datele tale</h3>
              <ul>
                <li>Prenume: {userData.firstName}</li>
                <li>Nume: {userData.lastName}</li>
                <li>Data nașterii: {userData.birthday}</li>
                <li>Gen: {userData.gender}</li>
                <li>Email: {userData.email}</li>
                {/* Nu afisăm parola din motive de securitate */}
              </ul>
            </div>
          </>
        ) : (
          <p>Nu am găsit datele utilizatorului!</p>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
