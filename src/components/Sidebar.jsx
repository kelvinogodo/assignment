// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
// import './Sidebar.css'; // optional for styling

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Users', path: '/admin/users' },
    { name: 'LGAs', path: '/admin/lgas' },
    { name: 'Development Centers', path: '/admin/dcs' },
  ];

  return (
    <aside className="sidebar">
      <h2 className="logo">Admin Panel</h2>
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
