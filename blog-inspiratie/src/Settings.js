import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updateEmail, updatePassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserData({
            ...docSnap.data(),
            email: user.email,  
            password: "",     
          });
        }
      };
      fetchUserData();
    }
  }, [user]);

  if (!user) {
    return <p>Se încarcă datele utilizatorului... Te rog să aștepți.</p>;
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        birthday: userData.birthday,
        gender: userData.gender,
      });

      if (userData.email !== user.email) {
        await updateEmail(user, userData.email);
      }

      if (userData.password) {
        await updatePassword(user, userData.password);
      }

      setSuccessMessage("Date actualizate cu succes!");
      setTimeout(() => {
        navigate("/home");
      }, 2000);

    } catch (error) {
      console.error("Eroare la actualizare:", error);

      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Acest email este deja utilizat, încearcă altul.');
          break;
        case 'auth/invalid-email':
          setError('Adresa de email nu este validă.');
          break;
        case 'auth/weak-password':
          setError('Parola este prea slabă. Alege una mai complexă.');
          break;
        case 'auth/requires-recent-login':
          setError('Pentru a schimba parola, te rugăm să te autentifici din nou.');
          break;
        default:
          setError('A apărut o eroare. Te rugăm să încerci din nou.');
      }
    }
  };

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="settings-container">
          <h2>Settings</h2>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <form className="settings-form" onSubmit={handleSave}>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              placeholder="Prenume"
              required
            />
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              placeholder="Nume"
              required
            />
            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Selectează genul</option>
              <option value="masculin">Masculin</option>
              <option value="feminin">Feminin</option>
              <option value="altul">Altul</option>
            </select>
            <input
              type="date"
              name="birthday"
              value={userData.birthday}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Noua Parolă (opțional)"
            />
            <button type="submit">Salvează</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
