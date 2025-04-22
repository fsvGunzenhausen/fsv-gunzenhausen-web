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
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
};

function NavDropdown({ label, dropdownId, routes, currentPath, openDropdown, setOpenDropdown }: NavDropdownProps) {
  const isOpen = openDropdown === dropdownId;
  const isAnyActive = routes.some(route => route.path === currentPath);
  const [isHovering, setIsHovering] = useState(false);  // Separate hover state
  // Funktion zum Umschalten des Dropdown-Menüs bei Klick


  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(isOpen ? null : dropdownId);

  };
  
  return (
    <li
      className={`nav-item dropdown ${isOpen || isHovering ? 'show' : ''} ${isAnyActive ? 'active' : ''}`}
      onMouseEnter={() => {
        setIsHovering(true);
        setOpenDropdown(dropdownId);
      }}
      
      onMouseLeave={() => {
        setIsHovering(false);
        setOpenDropdown(null);
      }}
      onClick={handleClick}
    >
      <a
        className="nav-link dropdown-toggle disabled"
        href="#"
        id={dropdownId}
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={handleClick}
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
