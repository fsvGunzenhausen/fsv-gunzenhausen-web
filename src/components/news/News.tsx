import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import imageStore from './Images.index';
import Newskarte from "./Newskarte";
import newsDaten from "./Newsdaten";
import { useNews } from "./NewsContext";

function convertImageStoreToArray(imageStore: { [key: string]: { full: any, preview: any } }) {
  return Object.values(imageStore);
}


function News() {
  const { selectedYear } = useNews();
  const location = useLocation();
  const imageStoreArray = convertImageStoreToArray(imageStore);

  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredNews = newsDaten.filter(
      item => Number(item.id.slice(0, 4)) === selectedYear
    );

  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    const currentIndex = imageStoreArray.findIndex((img) => img.full === selectedImage);
    const newIndex = direction === "next"
      ? (currentIndex + 1) % imageStoreArray.length
      : (currentIndex - 1 + imageStoreArray.length) % imageStoreArray.length;
    setSelectedImage(imageStoreArray[newIndex].full);
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setExpanded(id);
      }
    }
  }, [location]);

  return (
    <div className="container pb-5 pt-0">
      <div className="timeline-container">
        <ul className="timeline">
          {filteredNews.map((era) => (
            <section id={era.id} key={era.id} style={{ marginBottom: '1.5rem' }}>
              <Newskarte
                date={era.date}
                title={era.title}
                description={era.description}
                images={era.images}
                expanded={expanded}
                setExpanded={setExpanded}
                openModal={openModal}
              />
            </section>
          ))}
        </ul>
      </div>

      {selectedImage && (
        <>
          <div className="modal-backdrop fade show" onClick={closeModal}></div>
          <div
            className="modal fade show d-block"
            id="imageModal"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered max-h-80"
              role="document"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content" style={{ maxHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <div className="modal-header">
                  <h5 className="modal-title">Aktuelle News</h5>
                  <button type="button" className="btn-close" onClick={closeModal} />
                </div>
                <div className="modal-body text-center">
                  <img
                    src={selectedImage}
                    alt="Full"
                    className="img-fluid"
                    style={{ minHeight: '70vh', maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => navigateImage("prev")}>
                    <span className="carousel-control-prev-icon" style={{ width: '20px', height: '15px', padding: 0 }}></span>
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => navigateImage("next")}>
                    <span className="carousel-control-next-icon" style={{ width: '20px', height: '15px', padding: 0 }}></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default News;
