import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './auth.js';

const Logout = ({ className }) => {
  const handleLogout = (event) => {
    event.preventDefault();

    signOut(auth)
      .then(() => {
        console.log('Utilizatorul s-a deconectat!');
      })
      .catch((error) => {
        console.log('Eroare la deconectare:', error.message);
      });
  };

  return (
    <a href="/login" className={className} onClick={handleLogout}>Log out</a>
  );
};
 
export default Logout;

