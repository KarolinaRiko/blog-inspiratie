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
    setError(""); // Resetăm erorile
    try {
      await login(email, password);  // Apelăm funcția de login
      navigate("/home");  // Redirecționează utilizatorul
    } catch (error) {
      console.log(error.code);
      setError(error.message);  // Afișăm eroarea
    }
  };

  return (
    <div className="container">
      <div className="register-box">
        <h2>Log In</h2>
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
            {error && <p>{error}</p>}
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
