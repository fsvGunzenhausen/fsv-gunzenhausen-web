import { ROUTES } from './routes';

export const NAV_ITEMS = [
    {
      label: 'Flugplatz',
      dropdownId: 'flugplatz',
      routes: [
        { path: ROUTES.INFORMATIONEN, label: 'Informationen' },
          {path: ROUTES.PILOTEN, label: 'Piloteninfos'},
        { path: ROUTES.WEBCAM_OST, label: 'Webcam Ost' },
        { path: ROUTES.WEBCAM_SUED, label: 'Webcam Süd' },
      ],
    },
    {
      label: 'FSV Gunzenhausen',
      dropdownId: 'fsv',
      routes: [
        { path: ROUTES.FLUGAUSBILDUNG, label: 'Flugausbildung' },
        { path: ROUTES.RUNDFLUEGE, label: 'Rundflüge' },
        { path: ROUTES.FLUGZEUGE, label: 'Flugzeuge' },
        { path: ROUTES.FOTOS, label: 'Fotos' },
        { path: ROUTES.KONTAKT, label: 'Kontakt' },
        { path: ROUTES.CHRONIK, label: 'Chronik' },
      ],
    },
  ];
  
