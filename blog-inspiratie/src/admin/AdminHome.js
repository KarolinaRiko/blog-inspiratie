import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase.js';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AdminHome = () => {
  const [user, setUsers] = useState([]);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const confirmDeleteUser = (id) => {
    setUserIdToDelete(id);
    setShowConfirmMessage(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', id));
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    } catch (error) {
      console.error("Eroare la ștergere:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userDataList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        const currentUser = userDataList.find(u => u.email === user.email);
        setCurrentUserData(currentUser);
        setUsers(userDataList);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
        <header className="admin-header">
          <h1>Salut {currentUserData?.firstName || "Utilizator"} 💫</h1>
        </header>
        <div className="userlist">
          <div className='n'>Lista Utilizatorilor</div>
          <div className="userlist-container">
            <table className="userlist-table">
              <thead>
                <tr>
                  <th>Prenume</th>
                  <th>Nume</th>
                  <th>Email</th>
                  <th>Gen</th>
                  <th>Zi de nastere</th>
                  <th>Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                {user.map(user => (
                  <tr key={user.id}>
                    <td>{user.firstName || '—'}</td>
                    <td>{user.lastName || '—'}</td>
                    <td>{user.email}</td>
                    <td>{user.gender || '—'}</td>
                    <td>{user.birthday || '—'}</td>
                    <td>
                      <button onClick={() => confirmDeleteUser(user.id)}>Șterge</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Outlet />
      {showConfirmMessage && (
        <div className="confirmation-message">
          <p>Vrei să ștergi acest utilizator?</p>
          <div className="confirmation-buttons">
            <button
              onClick={() => {
                handleDelete(userIdToDelete);
                setShowConfirmMessage(false);
              }}
            >
              Da
            </button>
            <button onClick={() => setShowConfirmMessage(false)}>Nu</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
