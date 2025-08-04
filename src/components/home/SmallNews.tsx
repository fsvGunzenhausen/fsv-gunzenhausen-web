import smallNewsDaten from "./Smallnewsdaten";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ROUTES } from '../../routes';


function SmallNews() {
  return (
    <>
      <div className="container text-center">
        
           <Link to={ROUTES.NEWS} style={{ textDecoration: 'none' }} 
           onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
           onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}>
          <h3 className="text-black-50 pb-2">Aktuelles</h3>
        </Link>

        {/* Carousel for Mobile */}
        <div id="newsCarousel" 
        className="carousel slide d-sm-none mb-4" 
        data-bs-ride="carousel"
         data-bs-interval="12000">
          <div className="carousel-inner">
              {smallNewsDaten.map((news, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''} bg-white`}
                >
                  <div className="d-flex justify-content-center px-4">
                    {news.video ? (
                      <video
                        width="96%"
                        height="280"
                        controls={false}
                        autoPlay
                        muted
                        loop
                        style={{ marginTop: '1em', borderRadius: '5px' }}
                      >
                        <source src={news.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div
                        className="card shadow-sm border rounded-3"
                        style={{ padding: '0.5em', maxWidth: '95%', height: '300px' }}
                      >
                        <div className="card-body p-3 text-start">
                          <h5 className="card-title mb-1 text-primary">
                            <Link
                              to={ROUTES.NEWS_DETAIL(news.id)}
                              style={{ textDecoration: 'none' }}
                              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                            >
                              {news.title}
                            </Link>
                          </h5>
                          <small className="text-muted d-block mb-2">{news.date}</small>
                          <div className="card-text fw-light">{news.description}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev" style={{ width: '8%' }}>
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '50%', filter: 'invert(40%) grayscale(100%)' }} />
            <span className="visually-hidden">Zurück</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#newsCarousel" data-bs-slide="next" style={{ width: '8%' }}>
            <span className="carousel-control-next-icon" aria-hidden="true" style={{  backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '50%' ,  filter: 'invert(40%) grayscale(100%)' }} />
            <span className="visually-hidden">Weiter</span>
          </button>
        </div>

        {/* List for Desktop/Tablet */}
        <ul className="list-unstyled d-none d-sm-block">
          {smallNewsDaten.map((news, index) => (
            <li key={index} className="mb-3">
              {news.video ? (
                <video
                  width="100%"
                  height="290"
                  controls={false}
                  autoPlay
                  loop
                  muted
                  style={{ borderRadius: '5px' }}
                >
                  <source src={news.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="card shadow-sm border rounded-3" style={{ padding: '0.5em' }}>
                  <div className="card-body p-3 text-start">
                    <h5 className="card-title mb-1 text-primary">
                      <Link
                        to={ROUTES.NEWS_DETAIL(news.id)}
                        style={{ textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        {news.title}
                      </Link>
                    </h5>
                    <small className="text-muted d-block mb-2">{news.date}</small>
                    <div className="card-text pb-1 fw-light">{news.description}</div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SmallNews;