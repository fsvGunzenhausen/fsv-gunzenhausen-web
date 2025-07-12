type Timeline = {
  date: string;
  title: string;
  description: string;
  images: string[];
  expanded: string | null;
   setExpanded: (value: string | null) => void;
   openModal: (image: string) => void;
};

import imageStore from './Images.index';

function convertToParagraphs(text: string): React.ReactNode[] {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((para, idx) => <p key={idx}>{para.trim()}</p>);
}
function Newskarte(  { date, title, description, images, expanded, setExpanded, openModal }: Timeline) {
    const era = { date, title, description, images };
    const maxWords = 60; // Maximum number of words to show in the preview
    const isLong = era.description.split(' ').length > maxWords;
    const preview = era.description.split(' ').slice(0, maxWords).join(' ') + '...';
    const isExpanded = expanded === era.date;

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setExpanded(isExpanded ? null : era.date);
  
    };

    return (
      <div className="custom-timeline-content card shadow rounded-4 p-3 p-md-4">
        <div className="card-body p-0">
          <h5 className="card-subtitle text-secondary mb-1">{era.date}</h5>
          <h2 className="card-title mb-3 text-secondary">{era.title}</h2>
          <div className="card-text fw-light">
            {(isExpanded || !isLong ? convertToParagraphs(era.description) : convertToParagraphs(preview))}

            {isLong && (
              <button
                className="btn btn-link p-0 ms-0 no-bg-hover fw-light"
                onClick={handleClick}
                style={{ fontSize: '0.9rem' }}
              >
                {isExpanded ? 'Weniger lesen' : 'Weiter lesen'}
              </button>
            )}
          </div>
          {era.images && era.images.length > 0 && (
            <div className="row g-2 mt-3">
            {era.images.map((imgSrc, idx) => {
              const imageFromStore = imageStore[imgSrc as keyof typeof imageStore];
              if (!imageFromStore) return null;
              return (
                <div className="col-6 col-md-4" key={idx}>
                  <img
                    src={imageFromStore.preview}
                    alt={`Era ${era.date} image ${idx + 1}`}
                    className="img-fluid rounded"
                    style={{ objectFit: 'cover', height: '150px', width: '100%',   cursor: 'pointer'  }}
                    onClick={() => openModal(imageFromStore.full)}
                  />
                </div>
              );
            })}
          </div>
          )}
        </div>
      </div>
    );
}

export default Newskarte;
