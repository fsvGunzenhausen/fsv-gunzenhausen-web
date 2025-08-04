import { useState, useEffect } from 'react';
import imageStore from './Images.index';
import { useLocation } from 'react-router-dom';

const PilottagModal = () => {
const imgSrc = 'plakatPilot';    
const imageFromStore = imageStore[imgSrc as keyof typeof imageStore].full;
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsOpen(false);
      return;
    }

    const countStr = localStorage.getItem('plakatModalCount');
    let count = countStr ? parseInt(countStr, 10) : 0;

    if (count < 10) {
      setIsOpen(true);
      count += 1;
      localStorage.setItem('plakatModalCount', count.toString());
    } else {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop fade show" onClick={handleClose}></div>

      {/* Modal */}
      <div
        className="modal fade show d-block"
        id="imageModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
        onClick={handleClose}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: '60vh', maxHeight: '70vh' }}
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="modal-content"
            style={{ maxHeight: '100vh', display: 'flex', flexDirection: 'column' }}
          >
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              />
            </div>

            <div className="modal-body text-center" style={{ padding: '0' }}>
              <img
                src={imageFromStore}
                alt="Full"
                className="img-fluid"
                style={{
                  maxHeight: '70vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            <div className="modal-footer justify-content-center">
   <a
    href="mailto:vorstand@fsv-gunzenhausen.de?subject=Anmeldung%20zum%20Pilot%20für%20ein%20Tag&body=Hallo%20FSV-Team%2C%0A%0Aich%20möchte%20mich%20für%20den%20Pilot%20für%20ein%20Tag%20anmelden.%0A%0AMit%20freundlichen%20Grüßen"
    className="btn btn-primary fw-bold"
    style={{ fontSize: '1.1rem' }}
  >
    Jetzt anmelden
  </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PilottagModal;
