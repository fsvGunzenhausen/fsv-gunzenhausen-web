// src/components/SubHeader.tsx
// This component is used to display information about the airfield, including its ICAO identifier, operator, location, and other relevant details.
import trafficPatternOSM from '../assets/components/flugplatzinformationen/Platzrunde.png';

function Flugplatzinformationen() {

  const data = [
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
        DKB VOR 117,80 093° 21nm
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
      <div className="row">
        {/* Left column: Trigger image */}
        <div className="col-lg-6 mb-3">
          {/* Image with click trigger */}
          <img
            src={trafficPatternOSM}
            alt="Platzrunde"
            className="img-fluid rounded w-100"
            style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
            data-bs-toggle="modal"
            data-bs-target="#platzrundeModal"
          />
    
          {/* Bootstrap Modal */}
          <div
            className="modal fade"
            id="platzrundeModal"
            aria-labelledby="platzrundeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered max-h-80">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="platzrundeModalLabel">Platzrunde Gunzenhausen</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body" style={{ display:'contents'}}>
                  <img src={trafficPatternOSM} alt="Platzrunde" className="img-fluid h-100"
                           />
                </div>
                {/* Footer with copyright and non-navigational info */}
                <div className="modal-footer justify-content-between">
                  <div className='row-lg-6'>
                      <p style={{ fontSize: '0.75em', color: '#555' }}>
                        © {new Date().getFullYear()} Bearbeitetes Kartenbild basierend auf Daten von{' '}
                        <a
                          href="https://www.openstreetmap.org/copyright"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          © OpenStreetMap-Mitwirkenden
                        </a>, Lizenz:{' '}
                        <a
                          href="https://opendatacommons.org/licenses/odbl/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ODbL
                        </a>
                      </p>
                  </div>
                  <div className='row-lg-6'>
                    <p className='mb-0' style={{ fontSize: '0.85em', color: '#444' }}>
                      Diese Darstellung dient ausschließlich zu Informationszwecken und darf nicht für Navigationszwecke verwendet werden.
                    </p>
                    <p className="fw-normal text-muted mb-0" style={{ fontSize: '0.85em' }}>
                      This depiction is for informational purposes only and must not be used for navigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {/* Right column: Additional info */}
        <div className="col-lg-6">
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '1em', color: '#555', marginBottom: '0.1rem' }}>
              Bearbeitete OpenStreetMap-Karte
            </p>
            <p style={{ fontSize: '0.6em', color: '#555' }}>
              Bearbeitetes Kartenbild basierend auf Daten von{' '}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
              >
                © OpenStreetMap-Mitwirkenden
              </a>,
              <br /> Lizenz:{' '}
              <a
                href="https://opendatacommons.org/licenses/odbl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ODbL
              </a>
            </p>
          </div>
    
          {/* Non-navigational info */}
          <div className="mt-5" style={{ fontSize: '0.95em', color: '#444' }}>
            <p>Diese Darstellung dient ausschließlich zu Informationszwecken und darf nicht für Navigationszwecke verwendet werden.</p>
            <p className='fw-normal text-muted mb-0'>This depiction is for informational purposes only and must not be used for navigation.</p>
          </div>
        </div>
      </div>
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
        {/* Deutscher Teil – normaler Zeilenabstand */}
        <div className="mb-3">
              <p className="mb-1">
                Der Platz ist PPR, es besteht keine Betriebspflicht.
              </p>
             {/* Englischer Teil – abgehoben durch margin-top */}
            <div className="mb-3">
              <p className="fw-normal text-muted mb-0">
                The airfield is PPR; there is no operating duty.
              </p>
            </div>
              <p className="mb-1">
                In der Regel ist die Flugleitung besetzt:
              </p>
              <ul className="mb-1">
                <li>Samstags von 13:00 bis ca. 19:00 local</li>
                <li>Sonntags/Feiertags von 10:00 bis ca. 19:00 local</li>
              </ul>
            </div>

            {/* Weiterer deutscher Teil */}
            <div className="mb-0">
              <p className="mb-0">
                Keine VFR-Nacht.<br />
                Keine Starts oder Landungen ohne Betriebsleiter!
              </p>
            </div>

            {/* Englischer Abschlussteil */}
            <div className="mb-2">
              <p className="fw-normal text-muted mb-0">
                No VFR Night.<br />
                No unattended arrivals or departures!
              </p>
            </div>
      </>
    ],
    ['Flugleitung/Turm', 'Apt OPS', '+49 9831 2728'],
    ['PPR Anfragen', 'PPR Requests',
      <>
        +49 9831 881304<br />
        +49 9831 9207<br />
        +49 151 21684903
      </>
    ],
    ['Kraftstoff', 'Fuel',
      <>
        AvGas 100LL<br />
        AvGas UL91
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

  return (
    <div className="container pb-4">
      <div className="row justify-content-center">
        <div className="col-lg-14 ">
          <div className="card shadow rounded-4">
            <div className="card-body">
              <div className="table-responsive w-100" style={{ overflowX: 'hidden' }}>
                <table className="table table-bordered align-middle">
                  <tbody>
                    {data.map(([labelDe, labelEn, content], index) => (
                      <tr key={index}>
                        <th scope="row" className="align-top">
                          <div className="mb-1">{labelDe}</div>
                          <div className="fw-normal text-muted">{labelEn}</div>
                        </th>
                        <td>{content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flugplatzinformationen;
