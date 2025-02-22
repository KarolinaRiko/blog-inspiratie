// Logout.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './auth';

const Logout = () => {
  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log('Utilizatorul s-a deconectat!');
    }).catch((error) => {
      console.log('Eroare la deconectare:', error.message);
    });
  };

  return (
    <a className="log-out" onClick={handleLogout}>Log Out</a>
  );
};

export default Logout;
