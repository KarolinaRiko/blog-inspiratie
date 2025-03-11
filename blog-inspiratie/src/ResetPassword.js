import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, confirmPasswordReset } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const oobCode = params.get("oobCode");  

  console.log("OobCode:", oobCode); 

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setIsPasswordMatch(false);
      return;
    }

    const auth = getAuth();
    confirmPasswordReset(auth, oobCode, newPassword)
      .then(() => {
        setMessage("Parola ta a fost resetată cu succes!");
        setError("");
      })
      .catch((error) => {
        console.log("Eroare la resetarea parolei:", error);
        setError("A apărut o eroare. Te rugăm să încerci din nou.");
        setMessage("");
      });
  };

  return (
    <div className="container">
      <div className="reset-password-container">
        <h2 className={error ? "error-heading" : ""}>Resetare Parola</h2>
        {!isPasswordMatch && <p className="error-message">Parolele nu se potrivesc!</p>}
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="reset-form">
          <div className="input-group">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Noua parolă"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggles-password"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
      
          <div className="input-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmă parola"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggles-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className="reset-button">
            Resetaza parola
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
