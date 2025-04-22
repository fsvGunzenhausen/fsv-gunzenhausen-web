import React from 'react';
import { ROUTES } from './routes';

import Flugplatzinformationen from './components/flugplatzinformationen/Flugplatzinformationen'; // Import the information component
import Kontakt from './components/kontakt/Kontakt';
import Fotos from './components/fotos/Fotos';
import Chronik from './components/chronik/Chronik';
import Datenschutz from './components/datenschutz/Datenschutz';
import Rundfluege from './components/rundfluege/Rundfluege';
import Flugausbildung from './components/flugausbildung/Flugausbildung';
import Motorflug from './components/flugausbildung/Motorflug';
import Ultraleicht from './components/flugausbildung/Ultraleicht';
import Segelflug from './components/flugausbildung/Segelflug';
import Flugzeuge from './components/flugzeuge/Flugzeuge';

import Aircraft from './components/flugzeuge/Aircraft';
import {AircraftType} from './components/flugzeuge/AircraftType'; // Import the AircraftType component
import RundfluegeSubHeader from './components/rundfluege/RundfluegeSubHeader';
import ChronikSubHeader from './components/chronik/ChronikSubHeader';
import Home from './components/home/Home';
import Webcam, { WebcamDirection } from './components/webcam/Webcam';

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
      component: <Home />
    },
  },
  {
    path: ROUTES.HOME,
    routeContent: {   
      title: 'Flugsportvereinigung "Gelbe Bürg" e.V.',
      subHeader: undefined,
      component: <Home />
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
        component: <Flugausbildung />
      },
    },
    {
      path: ROUTES.MOTORFLUG,
      routeContent: {   
        title: 'Flugausbildung',
        subHeader: undefined,
        component: <Motorflug />
      },
    },
    {
      path: ROUTES.ULTRALEICHTFLUG,
      routeContent: {   
        title: 'Flugausbildung',
        subHeader: undefined,
        component: <Ultraleicht />
      },
    },
    {
      path: ROUTES.SEGELFLUG,
      routeContent: {   
        title: 'Flugausbildung',
        subHeader: undefined,
        component: <Segelflug />
      },
    },
    {
      path: ROUTES.FLUGAUSBILDUNG,
      routeContent: {   
        title: 'Flugausbildung',
        subHeader: undefined,
        component: <Flugausbildung />
      },
    },
    {
      path: ROUTES.RUNDFLUEGE,
      routeContent: {   
        title: 'Rundflüge',
        subHeader: (
              <RundfluegeSubHeader />
        ),
        component: <Rundfluege />
      },
    },
    {
      path: ROUTES.WEBCAM_OST,
      routeContent: {   
        title: 'Webcam Ost',
        subHeader: undefined,
        component: <Webcam direction={WebcamDirection.OST} />
      },
    },
    {
      path: ROUTES.WEBCAM_SUED,
      routeContent: {   
        title: 'Webcam Süd',
        subHeader: undefined,
        component: <Webcam direction={WebcamDirection.SUED} />
      },
    },
    {
      path: ROUTES.FLUGZEUGE,
      routeContent: {   
        title: 'Flugzeuge',
        subHeader: undefined,
        component: <Flugzeuge />
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
              <ChronikSubHeader />
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
  // Aircraft-specific routes
  {
    path: ROUTES.CESSNA,
    routeContent: {
      title: "Cessna 172 – D-EEWG",
      subHeader: undefined,
      component: <Aircraft aircraftType={AircraftType.CESSNA} />
    }
  },
  {
    path: ROUTES.ROBIN,
    routeContent: {
      title: "Robin DR-400/180 R – D-EGUN",
      subHeader: undefined,
      component: <Aircraft aircraftType={AircraftType.ROBIN} />
    }
  },
  {
    path: ROUTES.DYNAMIC,
    routeContent: {
      title: "Dynamic WT-9 – D-MFVG",
      subHeader: undefined,
      component: <Aircraft aircraftType={AircraftType.DYNAMIC} />
    }
  },
  {
    path: ROUTES.PIONEER,
    routeContent: {
      title: "Pioneer 200 – D-MFGB",
      subHeader: undefined,
      component: <Aircraft aircraftType={AircraftType.PIONEER} />
    }
  },
  {
    path: ROUTES.ASK21,
    routeContent: {
      title: "ASK 21 – D-5942",
      subHeader: undefined,
      component: <Aircraft aircraftType={AircraftType.ASK21} />
    }
  },
  {
    path: ROUTES.DISCUS,
    routeContent: {
      title: "Discus CS – D-4149",
      subHeader: undefined,
      component: <Aircraft aircraftType={AircraftType.DISCUS} />
    }
  },
  {
    path: ROUTES.ASW20,
    routeContent: {
      title: "ASW 20 C – D-2510",
      subHeader: undefined,
      component: <Aircraft aircraftType={AircraftType.ASW20} />
    }
  },
];