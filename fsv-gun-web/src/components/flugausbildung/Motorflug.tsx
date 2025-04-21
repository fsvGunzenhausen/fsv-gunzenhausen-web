
import ausbildung from '../../assets/components/ausbildung/013.jpg';
import cockpit from '../../assets/components/ausbildung/011_prev.jpg';
import cessna from '../../assets/components/ausbildung/010_prev.jpg';
import robin from '../../assets/components/ausbildung/009_prev.jpg';
import Intro from './Intro';
import BoldBlueCheckmark from '../../shared/checkmark/BoldCheckmark';
import { ROUTES } from '../../routes';



function Motorflug() {

  return (
    <>
        <div className="container p-0">
        {/* Main Content */}
        <Intro />
          <h2 className="text-left text-black-50 mb-4">Motorflug PPL(A) / LAPL(A)</h2>
          <p className="lead mt-2">
          Die PPL(A)-Lizenz beinhaltet die Erlaubnis, einmotorige Kleinflugzeuge bis 2 Tonnen (maximales Abfluggewicht) bei guten Sichtflugbedingungen am Tag zu fliegen. Sie dient als Grundlizenz für alle weiteren Ausbildungen bis hin zum Verkehrsflugzeugführer. <br/> Alternativ bieten wir auch die LAPL(A)-Lizenz an – ideal für den freizeitlich orientierten Piloten mit reduziertem Ausbildungsumfang. Beide Lizenzen können bei uns erworben werden.
          </p>
          <div className="container mt-4 mb-0 p-0">
          <div className="row">
               {/* Abschnitt: Voraussetzungen */}
              <section id="voraussetzungen" className="col-12 col-md-6">
                    <div className='card d-block mb-4 shadow p-0'>
                        <div className="card-header">
                          <h4 className="my-0 font-weight-normal py-0.5">Voraussetzungen</h4>
                        </div>
                        <div className="card-body mt-0">
                              <div>
                                  <img className="img-fluid w-100 " 
                                        style={{ objectFit: 'cover', maxHeight: "250px" }}  src={cockpit} alt='Voraussetzungen' />
                                </div>
                              <ul className="mb-4 fw-light list-unstyled mx-4 mt-2">
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Mindestalter: 16 Jahre für den Ausbildungsbeginn, Lizenz ab 17 Jahren</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Medizinische Flugtauglichkeit: Klasse 2 oder LAPL Medical</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Brille? Kein Problem – in der Regel zulässig</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Teilnahme an einem Erste-Hilfe-Kurs</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Aktive Vereinsmitgliedschaft erforderlich</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Zuverlässigkeitsüberprüfung ("ZÜP")</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Polizeiliches Führungszeugnis der Belegart 0</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Auszug aus dem Verkehrszentralregister (Flensburg)</div>
                                  </div>
                                </li>
                              </ul>
                        </div>
                    </div>
              </section >
               {/* Abschnitt: Vorteile */}
              <section  id="vorteile" className="col-12 col-md-6">
                  <div className="card d-block mb-4 shadow p-0">
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal py-0.5">🎯 Vorteile bei uns im Verein</h4>
                    </div>
                    <div className="card-body mt-0">
                        <div>
                          <img className="img-fluid w-100 " 
                                style={{ objectFit: 'cover', maxHeight: "279px" }}  src={robin} alt='Vorteile' />
                        </div>
                      <ul className="mb-4 fw-light list-unstyled mx-4 mt-2">
                        <li className="mb-2">
                          <div className="d-flex">
                            <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                            <div><strong>Erfahrene Fluglehrer: </strong><br/>
                            Unsere erfahrenen und passionierten Fluglehrer stehen Dir zur
                            Seite und begleiten Dich Schritt für Schritt auf Deinem Weg.</div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="d-flex">
                            <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                            <div><strong>Erschwingliche Ausbildung:</strong> <br/>
                            Je nach Art des Flugscheins ist mit Ausbildungskosten von ca.
                            7.000 € bis 8.500 € zu rechnen, verteilt über die Ausbildungszeit.
                            
                            </div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="d-flex mb-4">
                            <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                            <div><strong>Vielfältige und aufregende Ausflugsziele:</strong> <br/>
                            Als Teil unserer Fliegergemeinschaft hast Du die Möglichkeit,
                            gemeinsam mit anderen Piloten Flugerlebnisse zu genießen
                            und von ihren Erfahrungen für Deine eigenen Flüge zu profitieren.
                            </div>
                          </div>
                        </li>         
                      </ul>
                    </div>
                  </div>
              </section>
              {/* Abschnitt: Ausbildung */}
              <section id="aubildung" className="col-12 col-md-6">
                  <div className='card d-block mb-4 shadow p-0'>
                      <div className="card-header">
                          <h4 className="my-0 font-weight-normal py-0.5">Ausbildung</h4>
                      </div>
                      <div className="card-body mt-0">
                              <div>
                                  <img className="img-fluid w-100 " 
                                style={{ objectFit: 'cover', maxHeight: "250px" }}  src={ausbildung} alt='ausbildung' />
                              </div>
                          <p className="lead mx-3 mt-2">
                            Die Ausbildung zum Motorflugzeugführer umfasst einen praktischen und einen theoretischen Teil.
                          </p>
                          <h5 className='mx-3 mb-2'>Praxis</h5>
                          <p className="mx-3 mb-2">Die praktische Ausbildung umfasst unter anderem folgende Mindestanforderungen:</p>
                          <ul className="mb-4 fw-light list-unstyled mx-4">
                                  <li className="mb-2">
                                    <BoldBlueCheckmark /> Flugstunden:
                                    <ul className="ms-4">
                                      <li>LAPL: mindestens 30 Stunden</li>
                                      <li>PPL: mindestens 45 Stunden</li>
                                    </ul>
                                  </li>
                                  <li className="mb-2">
                                    <BoldBlueCheckmark /> Davon mit Fluglehrer:
                                    <ul className="ms-4">
                                      <li>LAPL: mindestens 15 Stunden</li>
                                      <li>PPL: mindestens 25 Stunden</li>
                                    </ul>
                                  </li>
                                  <li className="mb-2">
                                    <BoldBlueCheckmark /> Alleinflug:
                                    <ul className="ms-4">
                                      <li>LAPL: mindestens 6 Stunden</li>
                                      <li>PPL: mindestens 10 Stunden</li>
                                    </ul>
                                  </li>
                          </ul>
                          <h5 className='mx-3 mb-2'>Theorie</h5>
                          <ul className="mb-4 fw-light list-unstyled mx-4">
                            <li className="mb-2"><BoldBlueCheckmark /> Grundlagen des Fliegens</li> 
                            <li className="mb-2"><BoldBlueCheckmark /> Allgemeine Luftfahrzeugkunde (Technik)</li> 
                            <li className="mb-2"><BoldBlueCheckmark /> Luftrecht</li>   
                            <li className="mb-2"><BoldBlueCheckmark /> Kommunikation (Flugfunk)</li>
                            <li className="mb-2"><BoldBlueCheckmark /> Menschliches Leistungsvermögen</li>
                            <li className="mb-2"><BoldBlueCheckmark /> Meteorologie</li>
                            <li className="mb-2"><BoldBlueCheckmark /> Allgemeine Navigation</li>
                            <li className="mb-2"><BoldBlueCheckmark /> Flugleistung und Flugplanung</li>
                            <li className="mb-2"><BoldBlueCheckmark /> Allgemeine Betriebsverfahren</li>  
                          </ul> 
                          <h5 className='mx-3 mb-2'>Sprechfunkzeugnis / Sprachprüfung</h5>
                          <ul className="mb-4 fw-light list-unstyled mx-4">
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>BZF I bzw. BZF II</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>ICAO Sprachprüfung (Sofern englisch gefunkt werden soll)</div>
                              </div>
                            </li>
                          </ul>
                      </div>
                  </div>
              </section>
              {/* Abschnitt: Flugzeuge und Allgemeines */}
              <section id="flugzeugeUndAllgeimenes" className="col-12 col-md-6 space-y-6">
                <div className="card d-block mb-4 shadow p-0">
                            <div className="card-header">
                            <h4 className="my-0 font-weight-normal py-0.5">Flugzeugpark</h4>
                            </div>
                            <div className="card-body">
                                <div>
                                  <img className="img-fluid w-100 " 
                                        style={{ objectFit: 'cover', maxHeight: "200px" }}  src={cessna} alt='Vorteile' />
                                </div>
                                <p className="lead mx-3 mt-2">
                                Hier im mittelfränkischen Gunzenhausen schulen wir auf der bewährten und in aller Welt bekannten Cessna 172.
                                </p>
                                <p className="mx-3 mb-4">
                                Wir verfügen über eine moderne Flotte an Motorflugzeugen:</p>
                                <ul className="mb-4 fw-light list-unstyled mx-4 mt-2">
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Cessna 172 – 4-sitziges Reise- und Schulflugzeug</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Robin DR400 – 4-sitziges Reise-, Schlepp- und Schulflugzeug</div>
                                  </div>
                                </li>                  
                              </ul>
                              <p className="mx-3 mb-4">Nach einer entsprechenden Umschulung kannst du auch unsere Utraleichtflugzeuge fliegen.</p>
                              <p className="mx-3 mb-4">👉 Die komplette Flotte findest Du <a href={ROUTES.FLUGZEUGE}>hier</a>.</p>
                            </div>
                </div>
                <div className='d-block mb-4 p-0 mx-3 pt-2'>
                    <p className=' lead fw-light'>  Unser Ziel ist es Dich sicher und professionell zum Privatpiloten
                        auszubilden. Egal ob Du den Himmel erobern möchtest oder Deine
                        fliegerischen Fähigkeiten verbessern willst, wir begleiten Dich auf
                        Deinem Weg. 
                     </p>
                     <p  className=' lead fw-light'>
                     Unsere Fluglehrer geben gerne Auskunft über weitere Einzelheiten
                        der Ausbildung. Durch ehrenamtlich tätige Fluglehrer ist die
                        Flugausbildung bei uns im Verein in der Regel erheblich günstiger
                        als in kommerziellen Flugschulen.
                    
                     </p>
                      <p className=' lead fw-light'>
                      Mit dem Erwerb der Motorflugpilotenlizenz genießt Du die Freiheit,
                        selbständig einmotorige Kolbenmotorflugzeuge zu steuern und
                        wunderschöne Landschaften aus der Vogelperspektive zu erleben.
                      </p>
                      <p className=' lead fw-light'>
                      Wir informieren Dich sehr gerne und freuen uns auf Dich.
                      </p>

                        <p className="display-6 fw-bold text-primary m-0">
                        .... starte Dein Abenteuer am Himmel!
                        </p>
                </div>
              </section>
          </div>
        </div>
    </div>
    </>

  );
};

export default Motorflug;

