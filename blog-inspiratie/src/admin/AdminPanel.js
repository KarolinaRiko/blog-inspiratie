import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Logout from '../Logout.js';

const AdminPanel = () => {

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2><NavLink to="/admin/home">Admin</NavLink></h2>
        <ul>
          <li><NavLink to="/admin/categories">Categorii</NavLink></li>
          <li><NavLink to="/admin/comments">Comentarii</NavLink></li>
          <li><NavLink to="/admin/newsletter">Newsletter</NavLink></li>
          <li><NavLink to="/admin/statistici">Statistici</NavLink></li>
          <Logout className="logout-admin" />
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
