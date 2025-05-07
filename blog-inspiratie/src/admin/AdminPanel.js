import React from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { auth } from '../firebase.js';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2><NavLink to="/admin/home">Admin</NavLink></h2>
        <ul>
          <li><NavLink to="/admin/categories">Categorii</NavLink></li>
          <li><NavLink to="/admin/comments">Comentarii</NavLink></li>
          <li><NavLink to="/admin/newsletter">Newsletter</NavLink></li>
          <li><NavLink to="/admin/statistici">Statistici</NavLink></li>
          <li className="logout-admin" onClick={handleLogout} >Logout</li>
        </ul>
      </aside>

      <main className="admin-main">
        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
