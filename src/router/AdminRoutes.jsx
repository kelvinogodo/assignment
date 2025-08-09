import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayouts';
import ProtectedRoute from '../router/ProtectedRoute';

import AdminDashboard from '../pages/admin/Admindashboard';
// import UserList from '../pages/users/UserList';
// import UserForm from '../pages/users/UserForm';
// import LGAlist from '../pages/lga/LGAList';
// import LGAForm from '../pages/lga/LGAForm';
// import DCList from '../pages/DCs/DCList';
// import DCForm from '../pages/DCs/DCForm';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute allowedRoles={['ADMIN']}/>}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          {/* <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/users/new" element={<UserForm />} />
          <Route path="/admin/users/:id/edit" element={<UserForm />} />

          <Route path="/admin/lgas" element={<LGAlist />} />
          <Route path="/admin/lgas/new" element={<LGAForm />} />
          <Route path="/admin/lgas/:id/edit" element={<LGAForm />} />

          <Route path="/admin/dcs" element={<DCList />} />
          <Route path="/admin/dcs/new" element={<DCForm />} />
          <Route path="/admin/dcs/:id/edit" element={<DCForm />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}
