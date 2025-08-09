import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login';
import AdminRoutes from './AdminRoutes';
import LgaDashboard from '../pages/lga/LgaDashboard';
import Unauthorized from '../pages/errors/Unauthorized';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/lga"
        element={
          <ProtectedRoute allowedRoles={['lga']}>
            <LgaDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Home />} />

      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    < AdminRoutes />
    </>
  );
};

export default AppRouter;
