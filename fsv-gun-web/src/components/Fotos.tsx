import  { useState } from 'react';
import images from '../shared/images/images';

function Fotos() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Open modal with full image
  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    const currentIndex = images.findIndex((img) => img.full === selectedImage);
    let newIndex = direction === "next"
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
  
    setSelectedImage(images[newIndex].full);
  };

  return (
    <div className='container mb-4'>
      <div className="row">
        {images.map((img, index) => (
          <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 thumb">
            <a
              className="thumbnail"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal(img.full); // Open modal with full image
              }}
            >
              <img className="img-fluid zoom" src={img.preview} alt={`Thumbnail ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
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
            <h5 className="modal-title" id="imageModalLabel">Fotos</h5>
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

export default Fotos;
