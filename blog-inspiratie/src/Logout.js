// Logout.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './auth';

const Logout = ({ className }) => {
  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log('Utilizatorul s-a deconectat!');
    }).catch((error) => {
      console.log('Eroare la deconectare:', error.message);
    });
  };

  return (
    <a className={className} onClick={handleLogout}>Log out</a>
    
  );
};

export default Logout;
