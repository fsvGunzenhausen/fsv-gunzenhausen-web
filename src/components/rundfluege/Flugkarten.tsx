import { flightCards } from './Rundfluegedaten';

function Flugkarten() {

  return (
            <div className="row text-center">
            {/* Flight Cards */}
            {flightCards.map((flight, idx) => (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-4">
                <div className="card d-block mb-4 shadow p-0">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal py-1">{flight.title}</h4>
                    </div>
                    <div className="card-body mt-4">
                        <h1 className="card-title pricing-card-title text-primary">
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
        
  );
}

export default Flugkarten;
