import { useState } from 'react';
import { Link } from 'react-router-dom';

type RouteItem = {
  path: string;
  label: string;
};

type NavDropdownProps = {
  label: string;
  dropdownId: string;
  routes: RouteItem[];
  currentPath: string;
};

function NavDropdown({ label, dropdownId, routes, currentPath }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isAnyActive = routes.some(route => route.path === currentPath);

  return (
    <li
      className={`nav-item dropdown ${isOpen ? 'show' : ''} ${isAnyActive ? 'active' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        className="nav-link dropdown-toggle disabled"
        href="#"
        id={dropdownId}
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
      </a>
      <div
        className={`dropdown-menu ${isOpen ? 'show' : ''}`}
        aria-labelledby={dropdownId}
      >
        {routes.map(route => (
          <Link
            key={route.path}
            to={route.path}
            className={`dropdown-item ${route.path === currentPath ? 'active' : ''}`}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </li>
  );
}

export default NavDropdown;
