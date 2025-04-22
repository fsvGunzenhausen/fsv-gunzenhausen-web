import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Importiere useLocation für die aktuelle Route
import './Intro.css'; // Importiere die CSS-Datei für Animationen
import { ROUTES } from '../../routes';

type TextIntro = {
  text: string[];
};

function Intro(textIntro: TextIntro) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const location = useLocation(); // <--- Aktuelle Route holen
  // Trigger the completion of the animation after the text has fully flown in
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true); // Set animation as complete after 4 seconds
    }, 4000); // Adjust timing for when the text finishes animating

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {location.pathname !== ROUTES.FLUGAUSBILDUNG && (
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href={ROUTES.FLUGAUSBILDUNG}>
                &laquo; Zurück zur Übersicht
              </a>
            </li>
          </ul>
        </nav>
      )}

    <div className="text-end mb-4">
      {/* First text - fly in animation */}
      <div className={`fly-in-text ${animationComplete ? "stay" : ""}`}>
        {textIntro.text.map((line, i) => (
          <p key={i} className="display-6 fw-bold text-primary m-0">
            {line}
          </p>
        ))}
      </div>
    </div>
    </>

  );
};

export default Intro;
