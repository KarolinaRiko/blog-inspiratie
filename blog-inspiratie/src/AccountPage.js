import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "./auth.js";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import Logout from './Logout.js';

const AccountPage = ({ onLogout }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {

        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log("Nu există un utilizator cu acest ID");
            setUserData(null);
          }
        } catch (error) {
          console.log("Eroare la preluarea datelor:", error.message);
          setUserData(null);
        }
      } else {
        navigate("/login");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="container">
      <div className="home-container">

        <div className="content">
          {loading ? (
            <p>Se încarcă datele utilizatorului...</p>
          ) : userData ? (
            <>
              <h2>Hi, {userData.firstName}</h2>
              <p>{userData.email}</p>

              <nav className="navbar">
                <NavLink to="/subscription" activeClassName="active">Subscription</NavLink>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
                  Settings
                </NavLink>
                <Logout />
              </nav>

              <div className="personal-info">
                <h3>Datele tale</h3>
                <ul>
                  <li>Prenume: {userData.firstName}</li>
                  <li>Nume: {userData.lastName}</li>
                  <li>Data nașterii: {userData.birthday}</li>
                  <li>Gen: {userData.gender}</li>
                  <li>Email: {userData.email}</li>
                </ul>
              </div>
            </>
          ) : (
            <p>Nu am găsit datele utilizatorului!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
