
import ausbildung from '../../assets/components/ausbildung/013.jpg';
import cockpit from '../../assets/components/ausbildung/014_prev.jpg';
import dynamic from '../../assets/components/ausbildung/015_prev.jpg';
import pioneer from '../../assets/components/ausbildung/003_prev.jpg';
import Intro from './Intro';
import BoldBlueCheckmark from '../../shared/checkmark/BoldCheckmark';
import { ROUTES } from '../../routes';

const textIntro = ["Erobere unbeschwert den Himmel!"];


function Ultraleicht() {

  return (
    <>
        <div className="container px-3 p-0">
        {/* Main Content */}
        <Intro 
          text={textIntro} />
          <h2 className="text-left text-black-50 mb-4">Ultraleicht Sport Pilot Licence</h2>
          <p className="lead mt-2">
          Das Ultraleichtfliegen ist nicht nur kosteneffizient, sondern auch
          der Flugtrend der Zukunft. Nutze die Chance, Teil unserer
          aufstrebenden Fliegergemeinschaft zu werden und erlebe das
          moderne Fliegen in einem dynamischen Umfeld. Starte bei uns
          durch und werde ein Pionier des Ultraleichtfliegens!
          </p>
          <div className="container mt-4 mb-0 p-0">
          <div className="row">
               {/* Abschnitt: Voraussetzungen */}
              <section id="voraussetzungen" className="col-12 col-md-6">
                    <div className='card d-block mb-4 shadow p-0'>
                        <div className="card-header">
                          <h4 className="card-title my-0 font-weight-normal py-0.5">Voraussetzungen</h4>
                        </div>
                        <div className="card-body mt-0">
                              <div>
                                  <img className="img-fluid w-100 " 
                                        style={{ objectFit: 'cover', maxHeight: "285px" }}  src={cockpit} alt='Voraussetzungen' />
                                </div>
                              <ul className="mb-4 fw-light list-unstyled mx-4 mt-2 mb-2">
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Mindestalter: 16 Jahre für den Ausbildungsbeginn, Lizenz ab 17 Jahren</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Medizinische Flugtauglichkeit: LAPL Medical</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Maximales Körpergewicht aufgrund begrenzter Maximalzuladung etwa 85kg</div>
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
                              </ul>
                              <p className="fw-light mx-3 mb-4">Günstige Flugpreise sind in Vereinen nur möglich, wenn alle
                                                        Mitglieder auch ihre sonstigen (Berufs)Qualitäten zum Gelingen
                                                        des Ganzen beisteuern. </p>
                        </div>
                    </div>
              </section >
               {/* Abschnitt: Vorteile */}
              <section  id="vorteile" className="col-12 col-md-6">
                  <div className="card d-block mb-4 shadow p-0">
                    <div className="card-header">
                      <h4 className="card-title my-0 font-weight-normal py-0.5">🎯 Vorteile bei uns im Verein</h4>
                    </div>
                    <div className="card-body mt-0">
                        <div>
                          <img className="img-fluid w-100 " 
                                style={{ objectFit: 'cover', maxHeight: "279px" }}  src={pioneer} alt='Vorteile' />
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
                            Eine realistische Größenordnung für den Erwerb der UL-Lizenz im
                            Verein inklusive Nebenkosten liegt bei etwa 4.000 € - 4.500 €.
                            
                            </div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="d-flex mb-2">
                            <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                            <div><strong>Vielfältige Gemeinschaft:</strong> <br/>
                                         Werde Teil unserer engagierten Fliegergemeinschaft und genieße
                                          den Austausch mit Gleichgesinnten sowie gemeinsame Events
                                         und Ausflüge.
                            </div>
                          </div>
                        </li>    
                        <li className="mb-2">
                          <div className="d-flex mb-2">
                            <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                            <div><strong>Kosteneffizienz:</strong> <br/>
                            Ultraleichtflugzeuge sind im Betrieb günstiger als herkömmliche
                            Flugzeuge.
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
                          <h4 className="card-title my-0 font-weight-normal py-0.5">Ausbildung</h4>
                      </div>
                      <div className="card-body mt-0">
                              <div>
                                  <img className="img-fluid w-100 " 
                                style={{ objectFit: 'cover', maxHeight: "250px" }}  src={ausbildung} alt='ausbildung' />
                              </div>
                          <p className="lead mx-3 mt-2">
                            Die Ausbildung zum Luftsportgeräteführer umfasst einen praktischen und einen theoretischen Teil.
                          </p>
                          <h5 className='mx-3 mb-2'>Praxis</h5>
                          <p className="mx-3 mb-2">Die praktische Ausbildung umfasst unter anderem folgende Mindestanforderungen:</p>
                          <ul className="mb-4 fw-light list-unstyled mx-4">
                          <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Mindestens 30 Flugstunden</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Davon mindestens 5 Flugstunden Alleinflug</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Starts- und Landungen auf verschiedenen Flugplätze</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Mindestens zwei Überlandflüge mit Fluglehrer</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Mindestens drei Solo-Überlandflüge über jeweils 50 km</div>
                              </div>
                            </li>
                          </ul>
                          <h5 className='mx-3 mb-2'>Theorie</h5>
                          <ul className="mb-4 fw-light list-unstyled mx-4">
                          <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Allgemeine Luftfahrzeugkunde</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Luftrecht und Flugfunk</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Menschliches Leistungsvermögen</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Meteorologie</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Navigation</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Verhalten in besonderen Fällen</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Pyrotechnische Einweisung</div>
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
                            <h4 className="card-title my-0 font-weight-normal py-0.5">Flugzeugpark</h4>
                            </div>
                            <div className="card-body">
                                <div>
                                  <img className="img-fluid w-100 " 
                                        style={{ objectFit: 'cover', maxHeight: "250px" }}  src={dynamic} alt='Flugzeugpark' />
                                </div>
                                <p className="lead mx-3 mt-2">
                                Hier im mittelfränkischen Gunzenhausen schulen wir aktuell auf unserer Pioneer 200.
                                </p>
                                <p className="mx-3 mb-4">
                                Wir verfügen über eine moderne Flotte an Ultraleichtflugzeugen:</p>
                                <ul className="mb-4 fw-light list-unstyled mx-4 mt-2">
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Dynamic WT-9 – 2-sitziges Ultraleichtflugzeug</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Pioneer 200 – 2-sitziges Ultraleichtflugzeug</div>
                                  </div>
                                </li>                  
                              </ul>
                              <p className="mx-3 mb-4">Mit diesen fortschrittlichen Flugzeugen erheben wir uns mühelos
                                                      in luftige Höhen und können schnell weite Strecken überbrücken
                                                      – Geschwindigkeiten von 200 km/h und mehr sind problemlos
                                                      möglich.</p>
                              <p className="mx-3 mb-4">👉 Die komplette Flotte findest Du <a href={ROUTES.FLUGZEUGE}>hier</a>.</p>
                            </div>
                </div>
                <div className='d-block mb-4 p-0 mx-3 pt-2'>
                    <p className=' lead fw-light'> Unser Ziel ist es Dich sicher und professionell zum
Luftsportgeräteführer auszubilden. Egal ob Du den Himmel erobern
möchtest oder Deine fliegerischen Fähigkeiten verbessern willst,
wir begleiten Dich auf Deinem Weg.
                     </p>
                     <p  className=' lead fw-light'>
                     Unsere Fluglehrer geben gerne Auskunft über weitere Einzelheiten
                        der Ausbildung. Durch ehrenamtlich tätige Fluglehrer ist die
                        Flugausbildung bei uns im Verein in der Regel erheblich günstiger
                        als in kommerziellen Flugschulen.
                    
                     </p>
                      <p className=' lead fw-light'>
                      Mit dem Erwerb des Luftfahrerscheins für Luftsportgeräteführer
                      genießt Du die Freiheit, selbständig Luftsportgeräte zu steuern
                      und wunderschöne Landschaften aus der Vogelperspektive zu
                      erleben.
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

export default Ultraleicht;

