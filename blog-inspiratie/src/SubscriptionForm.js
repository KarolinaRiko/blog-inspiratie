import React, { useState } from "react";
import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'


const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Introdu un email valid!");
      return;
    }

    try {
      await addDoc(collection(db, "subscribers"), { email });
      setMessage("Te-ai abonat cu succes!");
      navigate('/subscription');
      setEmail("");
    } catch (error) {
      console.error("Eroare la abonare:", error);
      setMessage("A apărut o eroare.");
    }
  };

  return (
    <div className="container">
      <div className="subscription-container">
        <h3>Abonează-te la Newsletter</h3>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduceți emailul"
            required
          />
          <button type="submit">Abonare</button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
