
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
        <img src="img/rundfluege/rundflugrouten_flach.jpg" width="100%" alt="Rundflug Routen" />
      </div>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <p className="lead">
          Kleine Flugrouten über das fränkische Seenland für zwei bis drei Personen
        </p>
      </div>

      <div className="container mb-0">
        <div className="row text-center">
          {/* Flight Cards */}
          {[
            {
              title: "Kleiner Seenrundflug",
              price: "45 €",
              duration: "ca 15 Minuten",
              items: ["Altmühlsee", "Brombachsee Vorsperre", "", "", "ca 15 Minuten"],
            },
            {
              title: "Großer Seenrundflug",
              price: "55 €",
              duration: "ca 20 Minuten",
              items: ["Altmühlsee", "Brombachsee Hauptsperre", "", "", "ca 20 Minuten"],
            },
            {
              title: "Drei-Seenrundflug",
              price: "75 €",
              duration: "ca 30 Minuten",
              items: ["Altmühlsee", "Brombachsee", "Rothsee", "", "ca 30 Minuten"],
            },
          ].map((flight, idx) => (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card d-block mb-4 shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{flight.title}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    {flight.price} <small className="text-muted">pro Person</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    {flight.items.map((item, i) => (
                      <li key={i}>{item || <>&nbsp;</>}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Familienangebot & Segelfliegen */}
        <div className="row text-center">
          <div className="col-sm-12 col-md-6 d-flex align-items-stretch">
            <div className="card d-block mb-4 shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Familienangebot</h4>
              </div>
              <div className="card-body">
                <div className="mb-3 text-muted">
                  Kinder unter 14 Jahren in Begleitung mindestens eines Erwachsenen erhalten einen Nachlass von 5 € auf den oben angegebenen pro Personen Preis.
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 d-flex align-items-stretch">
            <div className="card d-block mb-4 shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Segelfliegen</h4>
              </div>
              <div className="card-body">
                <div className="mb-1 text-muted">
                  Das Spiel mit dem Wind mit einem unserer erfahrenen Piloten in einem zweisitzigen Segelflugzeug erleben!
                </div>
                <div className="mb-3 text-muted">Wir machen es möglich!</div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Windenstart</td>
                      <td>inkl. Flugzeit 5-10 min</td>
                      <td>€ 10,-</td>
                    </tr>
                    <tr>
                      <td>Flugzeug Schleppstart</td>
                      <td>inkl. Flugzeit 20-30 min</td>
                      <td>€ 50,-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Maschinengesamtpreise Section */}
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4 word-wrap">Maschinengesamtpreise</h1>
          <p className="lead">
            Bei Flügen über einer Stunde zu ihrem Wunschziel berechnen wir auf Basis der voraussichtlichen Gesamtflugzeit einen von der Anzahl der Personen unabhängigen Maschinengesamtpreis.
          </p>
        </div>

        {/* Aircraft Cards */}
        <div className="row text-center">
          {[
            {
              title: "Cessna 172",
              image: "img/rundfluege/cessna_prev.jpg",
              link: "flugzeuge_deewg.html",
              code: "D-EEWG",
            },
            {
              title: "Robin DR-400",
              image: "img/rundfluege/robin_prev.jpg",
              link: "flugzeuge_degun.html",
              code: "D-EGUN",
            },
          ].map((aircraft, i) => (
            <div key={i} className="col-sm-12 col-md-6 d-flex align-items-stretch">
              <div className="card d-block mb-4 shadow">
                <a href={aircraft.link}>
                  <div className="view overlay">
                    <img className="card-img-top" src={aircraft.image} alt={aircraft.title} />
                  </div>
                </a>
                <div className="card-body">
                  <a href={aircraft.link}>
                    <h3 className="mb-0 text-dark">{aircraft.title}</h3>
                    <div className="mb-1 text-muted">{aircraft.code}</div>
                  </a>
                  <h1 className="card-title pricing-card-title text-primary">
                    280 € <small className="text-muted">pro Stunde</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4 card-text">
                    <li>Bis zu drei Passagiere</li>
                    <li>Motorflugzeug der Echo-Klasse</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flugroutenvorschläge */}
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4 word-wrap">Flugroutenvorschläge</h1>
        </div>

        <div className="row text-center">
          {/* Add route cards like this one */}
          {/* Repeatable JSX card blocks */}
        </div>

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
              <td className="text-center">
                Ein Rundfluggutschein ist das besondere Geschenk für Geburtstage, Firmenjubiläen, Hochzeit usw.<br />
                Für alle unsere hier beschriebenen Rundflüge können Gutscheine erworben werden.<br />
                Darüber hinaus beraten wir Sie gerne um einen individuellen Flug zusammenzustellen.
              </td>
            </tr>
            <tr>
              <td className="text-center">
                Informationen zu Rundflügen und Gutscheinverkauf bekommen Sie an Wochenenden<br />
                auf dem Flugplatz (09831-2728 Samstags ab 13:00, Sonn- und Feiertags ab 10:00),<br />
                unter Telefonnummer 09831-881304 oder per E-Mail unter{" "}
                <a href="mailto:gutscheine@fsv-gunzenhausen.de">gutscheine@fsv-gunzenhausen.de</a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>

        <small>
          <p className="text-muted text-center">
            Alle Flugpreise verstehen sich als Selbstkostenpreise mit dem Ziel, Ihnen unseren Sport näher zu bringen.<br />
            Gerne informieren wir Sie über eine Mitgliedschaft und die Ausbildungsmöglichkeiten in unserem Verein.
          </p>
        </small>
      </div>
    </>
  );
}

export default Rundfluege;
