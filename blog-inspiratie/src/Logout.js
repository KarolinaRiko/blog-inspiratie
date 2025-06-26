import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './auth.js';

const Logout = ({ className }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleClickLogout = (event) => {
    event.preventDefault();
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log('Eroare la deconectare:', error.message);
      });
  };

  return (
    <>
      <a href="/login" className={className} onClick={handleClickLogout}>
        Log out
      </a>

      {showConfirm && (
        <div className="confirmation-message">
          <p>Ești sigur că vrei să ieși din cont?</p>
          <div className="confirmation-buttons">
            <button onClick={() => { confirmLogout(); setShowConfirm(false); }}>Da</button>
            <button onClick={() => setShowConfirm(false)}>Nu</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Logout;
