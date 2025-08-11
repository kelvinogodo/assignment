// src/layouts/AdminLayout.jsx
import Sidebar from '../components/Sidebar';
import Header from '../components/header/Header'; // we'll stub this for now
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Header />
        <main className="admin-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
