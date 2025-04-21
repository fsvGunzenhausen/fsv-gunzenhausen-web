import { aircraftList } from './Rundfluegedaten';

function Flugzeugekarten() {

  return (

        <div className="row text-center">
            {/* Aircraft Cards */}
            {aircraftList.map((aircraft, i) => (
              <div key={i} className="col-sm-12 col-md-6 d-flex align-items-stretch">
                <div className="card d-block mb-4 shadow p-0">
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
                      {aircraft.price} <small className="text-muted">pro Stunde</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4 card-text">
                      <li>{aircraft.passengers}</li>
                      <li>{aircraft.typeOfAircraft}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
  );
}

export default Flugzeugekarten;
