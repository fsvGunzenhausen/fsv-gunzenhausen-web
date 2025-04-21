import Motorflug from './Motorflug';

const FlyingSection = ({
  title,
  description,
  requirements,
  costs,
  images,
}: {
  title: string;
  description: string;
  requirements: string[];
  costs: string;
  images: string[];
}) => (
  <div className="row mb-5">
    <div className="col-md-7">
      <h2 className="text-center text-black-50">{title}</h2>
      <p>{description}</p>
      <h3 className="text-black-50">Die Ausbildung in Fakten</h3>
      <h4 className="text-black-50">Voraussetzungen:</h4>
      <ul className="list-unstyled">
        {requirements.map((req, index) => (
          <li key={index} className="pl-3">
            {req}
          </li>
        ))}
      </ul>
      <h4 className="text-black-50">Kosten:</h4>
      <p>{costs}</p>
    </div>
    <div className="col-md-5">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className="img-fluid mb-3"
          alt={`${title} ${index + 1}`}
        />
      ))}
    </div>
  </div>
);

const Flugausbildung = () => {
  return (
    <div className="container mb-4 fw-light">
        <Motorflug />
    </div>
  );
};

export default Flugausbildung;
