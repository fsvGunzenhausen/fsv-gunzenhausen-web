
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import images from './Images.index';
import Flugzeugekarten from './Flugzeugekarten';
import Flugkarten from './Flugkarten';
import Angebote from './Angebote';
import Routenkarten from './Routenkarten';

function Rundfluege() {

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Use smooth scroll
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  

  return (
    <>
      <div className="container mb-4">
        <img src={images.rundflugrouten.full} width="100%" alt="Rundflug Routen" />
      </div>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <p className="lead">
          Kleine Flugrouten über das fränkische Seenland für bis zu drei Personen
        </p>
      </div>

      <div className="container mb-0">
        <Flugkarten />
        <Angebote />
        {/* Maschinengesamtpreise Section */}
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4 word-wrap">Maschinengesamtpreise</h1>
          <p className="lead">
            Bei Flügen über einer Stunde zu ihrem Wunschziel berechnen wir auf Basis der voraussichtlichen Gesamtflugzeit einen von der Anzahl der Personen unabhängigen Maschinengesamtpreis.
          </p>
        </div>
        <Flugzeugekarten />
        {/* Flugroutenvorschläge */}
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4 word-wrap">Flugroutenvorschläge</h1>
          <p className="lead">
            Touren von mehr als einer Stunde Flugdauer nach terminlicher Absprache.
          </p>
        </div>
        <Routenkarten />

        {/* Gutscheine */}
        <section className="container mb-4" id="gutscheine" />
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <a id="Gutscheine">
            <h1 className="display-4 word-wrap">Gutscheine</h1>
          </a>
        </div>

        <table className="table">
          <tbody>
            <tr>
              <td className="text-center fw-light">
                Ein Rundfluggutschein ist das besondere Geschenk für Geburtstage, Firmenjubiläen, Hochzeit usw.<br />
                Für alle unsere hier beschriebenen Rundflüge können Gutscheine erworben werden.<br />
                Darüber hinaus beraten wir Sie gerne um einen individuellen Flug zusammenzustellen.
              </td>
            </tr>
            <tr>
              <td className="text-center fw-light">
                Informationen zu Rundflügen und Gutscheinverkauf bekommen Sie an Wochenenden<br />
                auf dem Flugplatz (09831-2728 Samstags ab 13:00, Sonn- und Feiertags ab 10:00),<br />
                unter Telefonnummer 09831-881304 oder per E-Mail unter{" "}
                <a href="mailto:gutscheine@fsv-gunzenhausen.de">gutscheine@fsv-gunzenhausen.de</a>
              </td>
            </tr>
          </tbody>
        </table>

        <small>
          <p className="text-muted text-center mt-5">
            Alle Flugpreise verstehen sich als Selbstkostenpreise mit dem Ziel, Ihnen unseren Sport näher zu bringen.<br />
            Gerne informieren wir Sie über eine Mitgliedschaft und die Ausbildungsmöglichkeiten in unserem Verein.
          </p>
        </small>
      </div>
    </>
  );
}

export default Rundfluege;
