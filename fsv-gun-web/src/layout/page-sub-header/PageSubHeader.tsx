// src/components/SubHeader.tsx

import { useLocation } from 'react-router-dom';
import { ROUTE_CONFIG } from '../../routes.config';  // Import the config

function SubHeader() {
  const location = useLocation();
  
  // Get the title and content for the current route or fallback to the default
  // Find the route content for the current path
  const route = ROUTE_CONFIG.find((route) => route.path === location.pathname)?.routeContent || {
    title: 'Default Title',
    subHeader: undefined,
    component: <></>, // Default empty component
  };

  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className='text-black-50'>{route.title}</h1>
        {/* Render subHeader if it exists */}
        {route.subHeader && <div>{route.subHeader}</div>}
      </div>
    </div>
  );
}

export default SubHeader;
