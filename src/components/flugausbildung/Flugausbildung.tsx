import { Link } from 'react-router-dom';
import motorflugImg from '../../assets/components/ausbildung/019_prev.jpg';
import ultraleichtImg from '../../assets/components/ausbildung/018_prev.jpg';
import segelflugImg from '../../assets/components/ausbildung/017_prev.jpg';
import { ROUTES } from '../../routes';
function Flugausbildung() {
  return (
    <div className="container">
      <p className="lead mb-5">
        Ob Motorflug, Ultraleicht oder Segelflug – bei uns findest Du den passenden Einstieg ins Abenteuer Fliegen. Unsere Ausbildung kombiniert moderne Technik mit persönlicher Betreuung durch erfahrene Fluglehrer.
      </p>
      <div className="row">
        {/* Motorflug */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 mb-4 shadow-sm p-0">
          <div className="card-header">
          <h4 className="cart-title my-0 font-weight-normal py-0.5">Motorflug</h4>
          </div>
            <div className="card-body d-flex flex-column">
              <div>
              <img className="img-fluid w-100" 
                                style={{ objectFit: 'cover', height: "220px" }}  src={motorflugImg} alt='Motorflug' />
              </div>
              <p className="card-text mx-4 mt-2">
                Fliegen mit Kolbenmotorflugzeugen – professionell ausgebildet mit PPL(A) oder LAPL(A).
              </p>
              <Link to={ROUTES.MOTORFLUG} className="btn btn-primary mt-auto mx-4 mb-4">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>

        {/* Ultraleicht */}
        <div className="col-md-4 mb-4">
        <div className="card h-100 mb-4 shadow-sm p-0">
              <div className="card-header">
                    <h4 className="cart-title my-0 font-weight-normal py-0.5">Ultraleicht</h4>
                  </div>
            <div className="card-body d-flex flex-column">
              <div>
                               <img className="img-fluid w-100" 
                                    style={{ objectFit: 'cover', height: "220px" }}  src={ultraleichtImg} alt='Ultraleicht' />
                </div>
                <p className="card-text mx-4 mt-2">
                Leicht, effizient und kostengünstig – ideal für Einsteiger in die Fliegerei.
              </p>
              <Link to={ROUTES.ULTRALEICHTFLUG} className="btn btn-primary mt-auto mx-4 mb-4">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>

        {/* Segelflug */}
        <div className="col-md-4 mb-4">
        <div className="card h-100 mb-4 shadow-sm p-0">
            <div className="card-header">
              <h4 className="cart-title my-0 font-weight-normal py-0.5">Segelflug</h4>
            </div>
            <div className="card-body d-flex flex-column">
                <div>
                  <img className="img-fluid w-100" 
                                    style={{ objectFit: 'cover', height: "220px" }}  src={segelflugImg} alt='Segeleflug' />
                </div>
                <p className="card-text mx-4 mt-2">
                Erlebe die pure Freiheit des Fliegens – lautlos und naturverbunden durch die Thermik getragen.
              </p>
              <Link to={ROUTES.SEGELFLUG} className="btn btn-primary mt-auto mx-4 mb-4">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center fw-light'>
        <p>Die Flugsportvereinigung Gunzenhausen ist einer von etwa 900
            Vereinen in Deutschland, in dem durch ehrenamtlich tätige
            Fluglehrer dieser faszinierende Sport erlernt werden kann. Dadurch
            ist es möglich, sehr attraktive und günstige Preise anbieten zu
            können.
        </p>
        <p>
        Um eine Ausbildung bei der Flugsportvereinigung Gunzenhausen zu
        beginnen ist eine aktive Mitgliedschaft notwendig und obligatorisch.
        Als Mitglied hast Du auch nach erfolgreicher Ausbildung die
        Möglichkeit, alle Einrichtungen des Vereins einschließlich unserer
        Flugzeuge zu nutzen.
        </p>
        <p>Für den erfolgreichen Abschluss der Flugausbildung muss,
          vergleichbar mit einem Autoführerschein, sowohl eine
          Theorieprüfung bei der Landesluftfahrtbehörde als auch eine
          praktische Prüfung abgelegt werden. Danach ist es beispielweise
          auch möglich Passagiere mitzunehmen!
          </p>
          <p>Die Ausbildung kann auf Wunsch auch "stufig" erfolgen: d.h. eine
            vorhandene Lizenz (beispielsweise eine Segelfluglizenz) ist leicht
            mit einem Ergänzungslehrgang auf eine andere Flugzeugsparte (z.B.
            Ultraleichtflugzeug) zu erweitern.
          </p>
          <p>Es kann auch eine unterstützende passive Mitgliedschaft in unserem
            Verein beantragt werden, bei der auch die Möglichkeit besteht, zum
            Selbstkostenpreis mitzufliegen.</p>
      </div>
    </div>
  );
}

export default Flugausbildung;
