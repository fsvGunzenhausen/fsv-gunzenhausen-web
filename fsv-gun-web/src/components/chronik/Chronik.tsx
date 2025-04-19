import { useState } from "react";
import chronikDaten from "./Chronikdaten"; // Import the data file
import Chronikkarte from "./Chronikkarte";

import imageStore from './Images.index';

function convertImageStoreToArray(imageStore: { [key: string]: { full: any, preview: any } }) {
  return Object.values(imageStore);
}


function Chronik() {

  const imageStoreArray = convertImageStoreToArray(imageStore);
  // State to manage the expanded card
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  // Open modal with full image
  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    const currentIndex = imageStoreArray.findIndex((img) => img.full === selectedImage);
    let newIndex = direction === "next"
      ? (currentIndex + 1) % imageStoreArray.length
      : (currentIndex - 1 + imageStoreArray.length) % imageStoreArray.length;
  
    setSelectedImage(imageStoreArray[newIndex].full);
  };

  return (
    <div className="container py-5">
      <div className="timeline-container">
        <ul className="timeline">
          {chronikDaten.map((era, index) => (
            <li key={index} className="timeline-item">
              <div className="timeline-body">
                <div className="timeline-content">
                      <Chronikkarte
                        year={era.year}
                        title={era.title} 
                        description={era.description}
                        images={era.images}
                        expanded={expanded}
                        setExpanded={setExpanded}
                        openModal={openModal}
                      />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="small fw-light">Dank sagt die FSV an dieser Stelle all ihren Förderern, insbesondere der Stadt Gunzenhausen, die den Belangen des Flugsports immer aufgeschlossen gegen&uuml;berstand.</p>      
      <p className="small fw-light text-center">Text und Bilder 1951-2001: Hans-Peter Lautner, November 2001<br/>Text und Bilder 2002-2015: FSV-Gunzenhausen</p>      
    
      {selectedImage && (
  <>
    {/* Backdrop */}
    <div className="modal-backdrop fade show" onClick={closeModal}></div>

    {/* Modal */}
    <div
      className="modal fade show d-block"
      id="imageModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="imageModalLabel"
      aria-hidden="true"
      onClick={closeModal}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered max-h-80"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content"
              style={{ maxHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div className="modal-header">
            <h5 className="modal-title" id="imageModalLabel">Chronik</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            />
          </div>

          <div className="modal-body text-center">
            <img src={selectedImage} alt="Full" className="img-fluid" 
                      style={{
                        minHeight: '70vh',
                        maxHeight: '70vh',
                        maxWidth: '100%',
                        objectFit: 'contain',
                      }}/>
          </div>

          {/* Footer with Next/Previous buttons aligned right */}
          <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary float-left"
                onClick={() => navigateImage("prev")}
                id="show-previous-image"

              >
                <span className="carousel-control-prev-icon" aria-hidden="true"
                                style={{ width: '20px', height: '15px', padding: 0 }}></span>
              </button>
              <button
                type="button"
                className="btn btn-secondary float-right"
                onClick={() => navigateImage("next")}
                id="show-next-image"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"
                                style={{ display: 'inline-block', width: '20px', height: '15px', padding: 0 }}>

                                </span>
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

export default Chronik;
