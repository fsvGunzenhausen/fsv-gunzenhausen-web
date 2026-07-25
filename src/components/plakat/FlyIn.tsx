import { useState, useEffect } from 'react';
import './rundflugtag.css';
import imageStore from './Images.index';
import { useLocation } from 'react-router-dom';

const FlyinModal = () => {
  const imgSrc = 'flyin';  
  const imageFromStore = imageStore[imgSrc as keyof typeof imageStore];
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/ppr') {
      setIsOpen(false);
      return;
    }

    // Check if user has already seen the modal
    const countStr = localStorage.getItem('newFlyInCount');
    let count = countStr ? parseInt(countStr, 6) : 0;

    if (count < 6) {
      setIsOpen(true);
      count += 1;
      localStorage.setItem('newFlyInCount', count.toString());
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
          alt="Bratwurst Fly-in Gunzenhausen" 
          className="rundflug-image" 
        />
      </div>
    </div>
  );
};

export default FlyinModal;