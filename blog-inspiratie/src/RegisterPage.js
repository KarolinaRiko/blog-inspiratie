import React, { useState } from 'react';
import "./App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Iconițe pentru ochi



const RegisterPage = () => {
  const [prenume, setPrenume] = useState("");
  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", { prenume, nume, email, parola });
  };

  return (
    <div className="container">
      <div className="register-box">
        <h2>Create  Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="prenume">Prenume:</label>
            <input
              type="text"
              id="prenume"
              value={prenume}
              onChange={(e) => setPrenume(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nume">Nume:</label>
            <input
              type="text"
              id="nume"
              value={nume}
              onChange={(e) => setNume(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group password-group">
            <label htmlFor="parola">Parola:</label>
            <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="parola"
              value={parola}
              onChange={(e) => setParola(e.target.value)}
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
