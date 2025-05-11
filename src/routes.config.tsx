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
import Landegebuehren from './components/landegebuehren/Landegebuehren';

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
      path: ROUTES.LANDEGEBUEHREN,
      routeContent: {   
        title: 'Landegebühren',
        subHeader: undefined,
        component: <Landegebuehren />
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
      title: "Cessna 172 P",
      subHeader: <>
        <h4 className="text-black-50">D-EEWG</h4>
        </>,
      component: <Aircraft aircraftType={AircraftType.CESSNA} />
    }
  },
  {
    path: ROUTES.ROBIN,
    routeContent: {
      title: "Robin DR-400/180 R",
      subHeader: <>
        <h4 className="text-black-50">D-EGUN</h4>
        </>,
      component: <Aircraft aircraftType={AircraftType.ROBIN} />
    }
  },
  {
    path: ROUTES.DYNAMIC,
    routeContent: {
      title: "Dynamic WT-9",
      subHeader: <>
        <h4 className="text-black-50">D-MFVG</h4>
        </>,
      component: <Aircraft aircraftType={AircraftType.DYNAMIC} />
    }
  },
  {
    path: ROUTES.PIONEER,
    routeContent: {
      title: "Pioneer 200",
      subHeader: <>
        <h4 className="text-black-50">D-MFGB</h4>
        </>,
      component: <Aircraft aircraftType={AircraftType.PIONEER} />
    }
  },
  {
    path: ROUTES.ASK21,
    routeContent: {
      title: "ASK 21",
      subHeader: <>
        <h4 className="text-black-50">D-5942</h4>
        </>,
      component: <Aircraft aircraftType={AircraftType.ASK21} />
    }
  },
  {
    path: ROUTES.DISCUS,
    routeContent: {
      title: "Discus CS",
      subHeader: <>
        <h4 className="text-black-50">D-4149</h4>
        </>,
      component: <Aircraft aircraftType={AircraftType.DISCUS} />
    }
  },
  {
    path: ROUTES.ASW20,
    routeContent: {
      title: "ASW 20 C",
      subHeader: <>
        <h4 className="text-black-50">D-2510</h4>
        </>,
      component: <Aircraft aircraftType={AircraftType.ASW20} />
    }
  },
];