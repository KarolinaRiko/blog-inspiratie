import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Iconițe pentru ochi
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase'; // Asigură-te că importi corect obiectul `auth`
import { useNavigate } from 'react-router-dom'; // Pentru a naviga după înregistrare
import { setDoc, doc } from 'firebase/firestore'; // Pentru a salva datele suplimentare în Firestore

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Creează utilizatorul doar cu email și parolă
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // După ce utilizatorul a fost creat, salvează și restul informațiilor în Firestore
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        birthday: "", // Adaugă câmpuri suplimentare dacă ai nevoie
        gender: "",
      });

      navigate('/login'); // După înregistrare, redirecționează la login
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Acest email este deja utilizat, incercati alta.');
          break;
        case 'auth/invalid-email':
          setError('Adresa de email nu este validă.');
          break;
        case 'auth/weak-password':
          setError('Parola este prea slabă. Alege una mai complexă.');
          break;
        default:
          setError('A apărut o eroare. Te rugăm să încerci din nou.');
      }
    }
  };

  return (
    <div className="container">
      <div className="register-box">
        <h2 className={error ? "error-heading" : ""}>Create Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Prenume"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nume"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group password-group">
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button type="submit">Înregistrează-te</button>
        </form>
        <div className="extra-links">
          <div className="line"></div>
          <div className="account-options">
            <p> <a href="/login">Log In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
