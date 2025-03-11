import React, { useState } from "react";
import { login } from './auth';  // Importă funcția de login din auth.js
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Iconițe pentru ochi

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      await login(email, password); 
      navigate("/home");  
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-credential':
          setError('Te rog verifică email-ul și parola.');
          break;
        case 'auth/user-not-found':
          setError('Nu am găsit un cont cu acest email.');
          break;
        case 'auth/wrong-password':
          setError('Parola introdusă este greșită. Încearcă din nou.');
          break;
        case 'auth/too-many-requests':
          setError('Ai încercat prea multe logări eșuate. Te rugăm să încerci din nou după câteva minute.');
          break;
        case 'auth/network-request-failed':
          setError('Conexiune eșuată. Verifică-ți conexiunea la internet.');
          break;
        default:
          setError('A apărut o eroare. Te rugăm să încerci din nou.');
      }
    }
  }; 

  return (
    <div className="container">
      <div className="register-box">
        <h2 className={error ? "error-heading" : ""}>Log In</h2>
        {error && <p className="error-message">{error}</p>} 
        <form onSubmit={handleSubmit}>
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
                placeholder="Parola"
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
            <button type="submit">Log In</button>
         
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

export default LoginPage;
