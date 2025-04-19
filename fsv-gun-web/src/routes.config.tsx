import React from 'react';
import { ROUTES } from './routes';

import Flugplatzinformationen from './components/flugplatzinformationen/Flugplatzinformationen'; // Import the information component
import Kontakt from './components/kontakt/Kontakt';
import Fotos from './components/fotos/Fotos';
import Chronik from './components/chronik/Chronik';
import Datenschutz from './components/datenschutz/Datenschutz';

// Define types for the route content
type RouteContent = {
    title: string;
    subHeader?: React.ReactNode;  // Ensure the content is of type React.ReactNode (allows JSX)
    component?: React.ReactNode; // Component to render for this route
  };
  

// Define content based on routes
export const ROUTE_CONFIG: Array<{path:string; routeContent: RouteContent}> =
[
  {
    path: ROUTES.HOME,
    routeContent: {   
      title: 'Flugsportvereinigung "Gelbe Bürg" e.V.',
      subHeader: undefined,
      component: undefined
    },
  },
    {
      path: ROUTES.INFORMATIONEN,
      routeContent: {   
        title: 'Flugplatzinformationen',
        subHeader: undefined,
        component: <Flugplatzinformationen />
      },
    },
    {
      path: ROUTES.FLUGAUSBILDUNG,
      routeContent: {   
        title: 'Flugausbildung',
        subHeader: undefined,
        component: undefined
      },
    },
    {
      path: ROUTES.RUNDFLUEGE,
      routeContent: {   
        title: 'Rundflüge',
        subHeader: (
          <>
            <h4 className="text-black-50">
              Gerne fliegen unsere erfahrenen Piloten zu Zielen in der näheren
              oder weiteren Umgebung.
            </h4>
          </>
        ),
        component: undefined
      },
    },
    {
      path: ROUTES.WEBCAM_OST,
      routeContent: {   
        title: 'Webcam Ost',
        subHeader: undefined,
        component: undefined
      },
    },
    {
      path: ROUTES.WEBCAM_SUED,
      routeContent: {   
        title: 'Webcam Süd',
        subHeader: undefined,
        component: undefined
      },
    },
    {
      path: ROUTES.FLUGZEUGE,
      routeContent: {   
        title: 'Flugzeuge',
        subHeader: undefined,
        component: undefined
      },
    },
    {
      path: ROUTES.FOTOS,
      routeContent: {   
        title: 'Fotos',
        subHeader: undefined,
        component: <Fotos />
      },
    },
    {
      path: ROUTES.KONTAKT,
      routeContent: {   
        title: 'Kontakt / Impressum',
        subHeader: undefined,
        component: <Kontakt />
      },
    },
    {
      path: ROUTES.CHRONIK,
      routeContent: {   
        title: 'Chronik',
        subHeader: (
          <>
          <h4 className="text-black-50">1951-2015 - 64 Jahre Flugsportvereinigung "Gelbe Bürg"</h4>
          </>
        ),
        component: <Chronik />
      },
    },
    {
      path: ROUTES.DATENSCHUTZ,
      routeContent: {   
        title: 'Datenschutz',
        subHeader: undefined,
        component: <Datenschutz />
      },
    },
    {
      path: ROUTES.IMPRESSUM,
      routeContent: {   
        title: 'Kontakt / Impressum',
        subHeader: undefined,
        component: <Kontakt />
      },
    },
];