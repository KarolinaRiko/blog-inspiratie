import React, { useState } from 'react';
import "./App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Iconițe pentru ochi



const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", { email, parola });
  };

  return (
    <div className="container">
      <div className="register-box">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
           
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
          <button type="submit">Sign In</button>
        </form>
        <div className="extra-links">
          <div className="line"></div>
          <div className="account-options">
          <p>
              <a href="/register">Create Account</a> | <a href="/forgot-password">Forgot password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RegisterPage;
