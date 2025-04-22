import { routingCards } from './Rundfluegedaten';

function Routenkarten() {

  return (
        <div className="row text-center">
        {routingCards.map((route, idx) => (
            <div key={idx} className="col-sm-12 col-md-4 d-flex align-items-stretch">
                <div className="card d-block mb-4 shadow p-0">
                    <div className="view overlay">
                        <img className="card-img-top" src={route.image} alt={route.title} />
                    </div>
                    <div className="card-body mt-3">
                    <h3 className="mb-0 text-dark">{route.title}</h3>
                    {route.description.map((text, i) => (
                        <div key={i} className="mb-1 text-muted mx-4">
                        {text}
                        </div>
                    ))}
                    <ul className="list-unstyled mt-3 mb-1 mx-4 card-text">
                        {route.details.map((detail, i) => (
                        <li key={i} className="text-primary">
                            {detail}
                        </li>
                        ))}
                    </ul>
                    <ul className="list-unstyled mt-3 mb-4 card-text">
                        {route.detailsUL?.map((detail, i) => (
                        <li key={i} className="text-primary">
                            {detail}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        ))}
        </div>
        
  );
}

export default Routenkarten;