import { useEffect, useRef } from "react";
import homeImages from "./Images.index";

function Carousel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    function handleSlide(e: CustomEvent & { relatedTarget: HTMLElement }) {
      if (
        e.relatedTarget &&
        e.relatedTarget.querySelector("video") &&
        videoRef.current
      ) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }

    carouselEl.addEventListener("slide.bs.carousel", handleSlide as EventListener);

    return () => {
      carouselEl.removeEventListener("slide.bs.carousel", handleSlide as EventListener);
    };
  }, []);

  return (
    <div className="container mb">
      <div
        id="homeCarousel"
        ref={carouselRef}
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="12000"
      >
        <ol className="carousel-indicators">
          <li data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" />
          {homeImages.carouselImages.map((_, index) => (
            <li
              key={index}
              data-bs-target="#homeCarousel"
              data-bs-slide-to={index + 1}
            />
          ))}
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <video
              ref={videoRef}
              className="carousel-video"
              src={homeImages.carouselVideo}
              controls={false}
              muted
              autoPlay
              playsInline
              loop
            />
          </div>

          {homeImages.carouselImages.map((src, index) => (
            <div key={index} className="carousel-item">
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
  );
}

export default Carousel;
