import { useState, useEffect } from 'react';
import './rundflugtag.css';
import imageStore from './Images.index';
import { useLocation } from 'react-router-dom';

const RundflugtagModal = () => {
  const imgSrc = 'plakat'; // Assuming 'plakat' is the key for the image in the store    
  const imageFromStore = imageStore[imgSrc as keyof typeof imageStore];
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsOpen(false);
      return;
    }

    // Check if user has already seen the modal
    const alreadySeen = localStorage.getItem('rundflugModalSeen');

    if (!alreadySeen) {
      setIsOpen(true);
      localStorage.setItem('rundflugModalSeen', 'true'); // Set flag to prevent future popups
    } else {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;
  return (
    <div className="rundflug-modal-overlay"
        onClick={handleClose} >
      <div className="rundflug-modal"
            onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={handleClose}>×</button>
        <img 
          src={imageFromStore.preview}
          alt="Rundflugtag Gunzenhausen" 
          className="rundflug-image" 
        />
        <div className="modal-footer">
          <a 
            href="https://www.facebook.com/events/668713469538516" 
            target="_blank" 
            rel="noopener noreferrer"
            className="facebook-button"
          >
           Jetzt vormerken auf Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default RundflugtagModal;