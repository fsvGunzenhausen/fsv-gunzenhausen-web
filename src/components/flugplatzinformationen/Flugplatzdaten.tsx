import { Link } from "react-router-dom";
import Betriebszeiten from "./Betriebszeiten";
import Platzrunde from "./Platzrunde";
import { ROUTES } from "../../routes";


const flugplatzdaten = [
    ['ICAO Kennung', 'ICAO Identifier', 'EDMH'],
    ['Betreiber', 'Operator', 
      <>
        Flugsportvereinigung "Gelbe Bürg" Gunzenhausen e.V.<br />
        Albert-Schweitzer-Str. 93<br />
        D-91710 Gunzenhausen
      </>
    ],
    ['AIP VFR Deutschland', 'AIP VFR Germany',
      <a href="https://aip.dfs.de/BasicVFR/pages/C019E6.html" target="_blank" rel="noopener noreferrer">
        AIP VFR - EDMH
      </a>
    ],
    ['Lage', 'Location',
      <>
        N49° 06.7', E010° 46.9'<br />
        0,9nm ESE Gunzenhausen<br />
        DKB VOR 117,80 091° 22nm
      </>
    ],
    ['GAFOR Gebiet', 'General Aviation Forecast Area',
      <>
        <a href='https://www.dwd.de/DE/fachnutzer/luftfahrt/teaser/luftsportberichte/fbeu40_edzm_node.html'
        target="_blank" rel="noopener noreferrer">
        DWD - Bereich LBZ Muenchen
        </a> <br />
        56 -  Mittelfranken
      </>
    ],
    ['Platzhöhe', 'Field Elevation', '1.591 ft. / 485 m MSL'],
    ['Startbahn', 'Runways',
      <>
        725m x 15m Asphalt<br />
        06: TORA 695m, LDA 605m<br />
        24: TORA 635m, LDA 605m
      </>
    ],
    ['Platzrunde', 'Traffic Pattern', 
      <>
        <Platzrunde />
      </>
    ],
    ['Zugelassen für', 'Approved for',
      <>
        Motorflugzeuge bis / Airplanes up to 2.000kg MTOW<br />
        Motorsegler / Powered Gliders<br />
        Segelflugzeuge / Gliders<br />
        Ultraleichtflugzeuge
      </>
    ],
    ['Frequenzen', 'Frequencies',
      <>
        Gunzenhausen Radio 118,960 MHz (de)<br />
        Langen Information 120,650 MHz (de, en)
      </>
    ],
    ['Betriebszeiten', 'Operating Hours',
        <>
        <Betriebszeiten />
        </>
    ],
    ['Flugleitung/Turm', 'Apt OPS', '+49 9831 2728'],
    ['PPR Anfragen', 'PPR Requests',
     <Link to={ROUTES.PPR} className="mt-auto mb-4">
                PPR Anfrage
              </Link>],
    ['Kraftstoff', 'Fuel',
      <>
        AvGas 100LL<br />
              UL91
      </>
    ],
    ['Bemerkungen', 'Remarks',
      <>
            <div className="mb-2">
              <p className="mb-0">
                Bei Windrichtung zwischen 260° und 040° ist mit Turbulenzen durch den nördlich angrenzenden Wald zu rechnen.<br />
                Vorsicht bei Start und Landung.
              </p>
            </div>
            <div className="mb-0">
              <p className="fw-normal text-muted mb-0">
                Expect turbulence due to adjacent forest with wind directions between 260° and 040°.<br />
                Use caution during takeoff and landing.
              </p>
            </div>
      </>
    ]
  ];

  export default flugplatzdaten;