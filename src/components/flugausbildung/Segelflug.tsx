import ausbildung from '../../assets/components/ausbildung/013.jpg';
import voraus from '../../assets/components/ausbildung/002_prev.png';
import schlepp from '../../assets/components/ausbildung/016_prev.jpg';
import segelflugzeug from '../../assets/components/ausbildung/006_prev.jpg';
import Intro from './Intro';
import BoldBlueCheckmark from '../../shared/checkmark/BoldCheckmark';
import { ROUTES } from '../../routes';

const textIntro = ["Entdecke die Freiheit des Segelflugs!"];


function Segelflug() {

  return (
    <>
        <div className="container px-3 p-0">
        {/* Main Content */}
        <Intro 
          text={textIntro} />
          <h2 className="text-left text-black-50 mb-4">Segelflug SPL</h2>
          <p className="lead mt-2">
          Erlebe Technik, Dynamik und Ästhetik im Einklang mit der Natur. Ganz ohne Motor, nur mit Sonne und Wind, gleitest Du von Aufwind zu Aufwind – lautlos, effizient und faszinierend.
Starte jetzt deine Segelflugausbildung und werde Teil einer Gemeinschaft, die das Fliegen in seiner reinsten Form lebt.
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
                                        style={{ objectFit: 'cover', maxHeight: "250px" }}  src={voraus} alt='Voraussetzungen' />
                                </div>
                              <ul className="mb-4 fw-light list-unstyled mx-4 mt-2 mb-2">
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Mindestalter: 14 Jahre für den Ausbildungsbeginn, Lizenz ab 16 Jahren</div>
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
                                    <div>Auszug aus dem Verkehrszentralregister (Flensburg)</div>
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
                                    <div>Aktive Vereinsmitgliedschaft erforderlich</div>
                                  </div>
                                </li>
                              </ul>
                              <p className="fw-light mx-3"  style={{ marginBottom: "3.1rem" }}>Segelfliegen ist auch ein Team-Sport. Mehrere Helfer sind
                                                  notwendig, um ein Segelflugzeug in die Luft zu befördern. Es ist wichtig, dass sich jedes Teammitglied auf
                                                  die anderen verlassen kann. Daher werden von Beginn der
                                                  Ausbildung an Verantwortungsbewusstsein, Teamgeist und das
                                                  strikte Einhalten aller Sicherheitsvorschriften großgeschrieben.
                                </p>
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
                                style={{ objectFit: 'cover', maxHeight: "255px" }}  src={schlepp} alt='Vorteile' />
                        </div>
                      <ul className="mb-4 fw-light list-unstyled mx-4 mt-2">
                        <li className="mb-2">
                          <div className="d-flex">
                            <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                            <div><strong>Erfahrene Fluglehrer: </strong><br/>
                            Unsere erfahrenen und passionierten Fluglehrer stehen Dir zur
                            Seite und begleiten Dich Schritt für Schritt auf Deinem Weg.
                            Sie teilen nicht nur ihr fundiertes Wissen, sondern auch ihre
                            Begeisterung für das Segelfliegen.</div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="d-flex">
                            <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                            <div><strong>Erschwingliche Ausbildung:</strong> <br/>
                                  Segelfliegen ist nicht teuer. Die Kosten belaufen sich bei uns im
                                  Verein auf etwa 2.000 € bis 2.500 € und verteilen
                                  sich je nach Engagement auf gewöhnlich circa zwei Jahre.
                            </div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="d-flex mb-2">
                            <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                            <div><strong>Vielfältige Gemeinschaft:</strong> <br/>
                            Im Verein bist Du Teil unserer Fliegergemeinschaft und hast damit
                              die Möglichkeit Dich mit Gleichgesinnten auszutauschen, neue
                              Freundschaften zu knüpfen und gemeinsame Flugerlebnisse zu
                              genießen.
                            </div>
                          </div>
                        </li>    
                        <li className="mb-2">
                          <div className="d-flex mb-2">
                            <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                            <div><strong>Moderne Ausstattung:</strong> <br/>
                            Wir verfügen über eine moderne Flotte an Segelflugzeugen und
                            erstklassige Schulungseinrichtungen, die Dir die bestmöglichen
                            Lernbedingungen bieten.
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
                            Die Ausbildung zum Segelflugpiloten umfasst einen praktischen und einen theoretischen Teil.
                          </p>
                          <h5 className='mx-3 mb-2'>Praxis</h5>
                          <p className="mx-3 mb-2">Die praktische Ausbildung umfasst unter anderem folgende Mindestanforderungen:</p>
                          <ul className="mb-4 fw-light list-unstyled mx-4">
                          <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Mindestens 15 Flugstunden</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Davon mindestens 10 Flugstunden mit Fluglehrer</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Davon zwei Stunden Alleinflugzeit unter Aufsicht</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Mindestens 45 Starts und Landungen</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Mindestens ein Alleinflug über eine Strecke von 50 km <br /> oder ein Alleinflug von 100 km unter Aufsicht eines Fluglehrers</div>
                              </div>
                            </li>
                          </ul>
                          <h5 className='mx-3 mb-2'>Theorie</h5>
                          <ul className="mb-4 fw-light list-unstyled mx-4">
                          <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Grundlagen des Fliegens</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Allgemeine Luftfahrzeugkunde (Technik)</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Luftrecht</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Kommunikation (Flugfunk)</div>
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
                                <div>Allgemeine Navigation</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Flugleistung und Flugplanung</div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="d-flex">
                                <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                <div>Allgemeine Betriebsverfahren</div>
                              </div>
                            </li>
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
                            <h4 className="card-title my-0 font-weight-normal py-0.5">Flugzeugpark</h4>
                            </div>
                            <div className="card-body">
                                <div>
                                  <img className="img-fluid w-100 " 
                                        style={{ objectFit: 'cover', maxHeight: "250px" }}  src={segelflugzeug} alt='Flugzeugpark' />
                                </div>
                                <p className="lead mx-3 mt-2">
                                Hier bei der Flugsportvereinigung Gunzenhausen schulen wir auf der ASK 21. 
                                </p>
                                <p className="mx-3 mb-4">
                                Im Vereinsbesitz befinden sich ein doppelsitziges und zwei
                                  einsitzige Segelflugzeuge, die allen Mitgliedern zur Verfügung
                                  stehen.:</p>
                                <ul className="mb-4 fw-light list-unstyled mx-4 mt-2">
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>ASK 21 – 2-sitziges Schul- und Übungsflugzeug</div>
                                  </div>
                                </li>
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>ASW 20C – Einsitziges Leistungssegelflugzeug Rennklasse</div>
                                  </div>
                                </li>       
                                <li className="mb-2">
                                  <div className="d-flex">
                                    <div className="me-2 mt-1"><BoldBlueCheckmark /></div>
                                    <div>Discus CS – Einsitziges Leistungssegelflugzeug Standardklasse</div>
                                  </div>
                                </li>               
                              </ul>
                              <p className="mx-3 mb-4">Nach einer entsprechenden Umschulung kannst Du auch unsere Utraleichtflugzeuge fliegen.</p>
                              <p className="mx-3 mb-4">👉 Die komplette Flotte findest Du <a href={ROUTES.FLUGZEUGE}>hier</a>.</p>
                            </div>
                </div>
                <div className='d-block mb-4 p-0 mx-3 pt-2'>
                    <p className=' lead fw-light'> Unser Ziel ist es Dich sicher und professionell zum
                                Segelflugzeugpiloten auszubilden. Egal ob Du den Himmel erobern
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
                      Mit dem Erwerb der Segelflugpilotenlizenz
                      genießt Du die Freiheit, selbständig Segelflugzeuge zu steuern
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

export default Segelflug;

