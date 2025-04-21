import { ROUTES } from "../../routes";

type AircraftTemplateProps = {
  model: string;
  registration: string;
  images: string[];
  descriptionItems: string[];
};

function AircraftTemplate({
  model,
  registration,
  images,
  descriptionItems,
}: AircraftTemplateProps) {
  const carouselId = `carousel-${registration.toLowerCase()}`;

  return (
    <div className="container">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href={ROUTES.FLUGZEUGE}>
              &laquo; Zurück zur Übersicht
            </a>
          </li>
        </ul>
      </nav>

      <div className="row text-center">
        <div className="col-md-12 col-lg-12 d-flex align-items-stretch">
          <div className="card d-block mb-4 shadow p-0">
            <div className="view overlay">
              <div
                id={carouselId}
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="8000"
              >
                <ol className="carousel-indicators">
                  {images.map((_, index) => (
                    <li
                      key={index}
                      data-bs-target={`#${carouselId}`}
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                    ></li>
                  ))}
                </ol>

                <div className="carousel-inner">
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        className="carousel-image"
                        src={src}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card-body">
                <h3 className="mb-0 text-dark">{model}</h3>
                <div className="mb-1 text-muted">{registration}</div>
                <ul className="list-unstyled mt-3 mb-4 card-text">
                  {descriptionItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AircraftTemplate;
