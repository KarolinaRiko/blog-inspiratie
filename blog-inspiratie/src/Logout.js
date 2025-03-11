import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './auth';

const Logout = ({ className }) => {
  const handleLogout = (event) => {
    event.preventDefault();  // Previne comportamentul implicit al link-ului

    signOut(auth)
      .then(() => {
        console.log('Utilizatorul s-a deconectat!');
        // Poți adăuga redirecționare sau un mesaj de succes aici
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

