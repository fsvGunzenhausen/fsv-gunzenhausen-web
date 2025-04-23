import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../navigation.config';
import NavDropdown from '../../shared/dropdown/NavDropdown';
import logo from '../../assets/header/fsvlogo180x60.png';
import { useState } from 'react';

function Header() {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleNavbar = () => {
    setNavbarOpen(prev => !prev);
  };
  
  const handleNavItemClick = () => {
      setNavbarOpen(false);
      setOpenDropdown(null);

  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" key={location.pathname}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="FSV Gunzenhausen Logo" />
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          type="button"
          data-bs-target="#navbarCollapse1"
          onClick={toggleNavbar}
          aria-controls="navbarCollapse1"
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarCollapse1">
          <ul className="navbar-nav ms-auto">
            {NAV_ITEMS.map(item => (
              <NavDropdown
                key={item.label}
                label={item.label}
                dropdownId={item.dropdownId}
                routes={item.routes}
                currentPath={location.pathname}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onItemClick={handleNavItemClick} // Pass the click handler to NavDropdown
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
