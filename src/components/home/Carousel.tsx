import homeImages from "./Images.index";

function Carousel() {

    return (
        <>
          {/* Carousel */}
          <div className="container mb">
            <div
              id="homeCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="8000"
            >
              <ol className="carousel-indicators">
                {homeImages.carouselImages.map((_, index) => (
                  <li
                    key={index}
                    data-bs-target="#homeCarousel"
                    data-bs-slide-to={index}
                    className={index === 1 ? "active" : ""}
                  />
                ))}
              </ol>
              <div className="carousel-inner">
                {homeImages.carouselImages.map((src, index) => (
                  <div key={index} className={`carousel-item ${index === 1 ? "active" : ""}`}>
                    <img className="carousel-image" src={src} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </>
      );
  }
  
  export default Carousel;
  