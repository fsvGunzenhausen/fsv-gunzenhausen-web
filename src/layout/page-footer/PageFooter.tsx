import { useLocation, Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

function PageFooter() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse2"
        aria-controls="navbarCollapse2"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center small" id="navbarCollapse2">
        <ul className="navbar-nav">
          <li className="nav-link disabled">
            &copy; 2025 Flugsportvereinigung "Gelbe Bürg" Gunzenhausen e.V.
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive(ROUTES.IMPRESSUM) ? 'active' : ''}`}
              to={ROUTES.IMPRESSUM}
            >
              Impressum
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive(ROUTES.DATENSCHUTZ) ? 'active' : ''}`}
              to={ROUTES.DATENSCHUTZ}
            >
              Datenschutz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PageFooter;

