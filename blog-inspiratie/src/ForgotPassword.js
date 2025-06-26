import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Emailul introdus nu este valid.");
      return;
    }

    const actionCodeSettings = {
      url: `https://blog-inspiratie.web.app/reset-password`,
      handleCodeInApp: true,
    };
    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        setMessage(
          "Dacă acest email este asociat cu un cont, vei primi instrucțiunile de resetare a parolei."
        );
        setError("");
      })
      .catch(() => {
        setMessage("");
        setError("A apărut o eroare. Te rugăm să încerci din nou.");
      });
  };

  return (
    <div className="container">
      <div className="forgot-password-container">
        <h2>Forgot password?</h2>
        <p>Putem să îți trimitem un email pentru a reseta parola.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Introdu email-ul tău"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Trimite</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
