import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData.role === "admin") {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
            navigate('/');
          }
        } else {
          setIsAdmin(false);
          navigate('/'); 
        }
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <p>Se încarcă...</p>; 
  }

  if (!isAdmin) {
    return <p>Acces interzis!</p>; 
  }

  return children; 
};

export default AdminRoute;
