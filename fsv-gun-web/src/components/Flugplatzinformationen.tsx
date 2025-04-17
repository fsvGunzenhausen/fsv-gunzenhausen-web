// src/components/SubHeader.tsx
import trafficPattern from '../assets/components/flugplatzinformationen/WebPlatzrunde-400x396.jpg';

function Flugplatzinformationen() {
    return (
        <div className="container mb-4">
        <div className="row">
          <div className="col-md-1 col-lg-2"></div>
          <div className="col-sm-12 col-md-10 col-lg-8">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th scope="col">ICAO Kennung</th>
                  <td>EDMH</td>
                  <th scope="col">ICAO Identifier</th>
                </tr>
                <tr>
                  <th scope="col">Betreiber</th>
                  <td>Flugsportvereinigung "Gelbe Bürg" Gunzenhausen e.V.<br />
                    Albert-Schweitzer-Str. 93<br />
                    D-91710 Gunzenhausen</td>
                  <th scope="col">Operator</th>
                </tr>
                <tr>
                  <th scope="col">AIP VFR Deutschland</th>
                  <td><a href="https://aip.dfs.de/BasicVFR/pages/C019E6.html"
                      target="_blank">AIP VFR - aip.dfs.de - EDMH</a></td>
                  <th scope="col">AIP VFR Germany</th>
                </tr>
                <tr>
                  <th scope="col">Lage</th>
                  <td>N49° 06.7', E010° 46.9'<br />
                    0,9nm ESE Gunzenhausen<br />
                    DKB VOR 117,80 093° 21nm</td>
                  <th scope="col">Location</th>
                </tr>
                <tr>
                  <th scope="col"><p className="semi-bold">Platzhöhe</p></th>
                  <td>1.591 ft. /485 m MSL</td>
                  <th scope="col">Field Elevation</th>
                </tr>
                <tr>
                  <th scope="col">Startbahn</th>
                  <td><p>725m x 15m Asphalt
                            06: TORA 695m, LDA 605m<br />
                            24: TORA 635m, LDA 605m</p>
                  </td>
                  <th>Runways</th>
                </tr>
                <tr>
                  <th scope="col">Platzrunde</th>
                  <td><img src={trafficPattern} alt="Platzrunde" className="img-fluid" /></td>
                  <th scope="col">Traffic Pattern</th>
                </tr>
                <tr>
                  <th scope="col">Zugelassen für</th>
                  <td>Motorflugzeuge bis / Airplanes up to 2.000kg MTOW<br />
                    Motorsegler / Powered Gliders<br />
                    Segelflugzeuge / Gliders<br />
                    Ultraleichtflugzeuge</td>
                  <th scope="col">Approved for</th>
                </tr>
                <tr>
                  <th scope="col">Frequenzen</th>
                  <td>Gunzenhausen Radio 118,960 MHz (de)<br />
                    Langen Information 120,650 MHz (de, en)</td>
                  <th scope="col">Frequencies</th>
                </tr>
                <tr>
                  <th scope="col">Betriebszeiten</th>
                  <td>Der Platz ist PPR, es besteht keine Betriebspflicht.<br />
                    In der Regel ist die Flugleitung besetzt:<br />
                    <ul>
                      <li>Samstags von 13:00 bis ca 19:00 local</li>
                      <li>Sonntags/Feiertags von 10:00 bis ca 19:00 local</li>
                    </ul><br/>
                        Kein VFR-Nacht. <br />
                         Keine Starts oder Landungen ohne Flugleiter!<br />
                        No VFR Night.<br />
                        The airfield is PPR, there is no operating duty.<br />
                  </td>
                  <th scope="col">Operating hours</th>
                </tr>
                <tr>
                  <th scope="col">Flugleitung/Turm</th>
                  <td>+49 9831 2728</td>
                  <th scope="col">Apt OPS</th>
                </tr>
                <tr>
                  <th scope="col">PPR Anfragen</th>
                  <td>+49 9831 881304<br />
                    +49 9831 9207<br />
                    +49 151 21684903</td>
                  <th scope="col">PPR Requests</th>
                </tr>
                <tr>
                  <th scope="col">Kraftstoff</th>
                  <td>AvGas 100LL<br />
                    AvGas UL91</td>
                  <th scope="col">Fuel</th>
                </tr>
                <tr>
                  <th scope="col">Bemerkungen</th>
                  <td>
                    <p>Bei Windrichtung zwischen 260° und 040° ist mit Turbulenzen durch den n&ouml;rdlich angrenzenden
                      Wald zu rechnen.</p>
                    <p>Vorsicht bei Start und Landung.</p>
                    <p>With wind directions between 260° and 040° expect turbulences due to adjacent forest.</p>
                    <p>Use caution during takeoff and landing.</p>
                  </td>
                  <th scope="col">Remarks</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-1 col-lg-2"></div>
        </div>
      </div>
    );
}

export default Flugplatzinformationen;
