import { useEffect, useState } from "react";
import './Intro.css'; // Importiere die CSS-Datei für Animationen

const rotatingText = ["Erfülle Dir den Traum vom Fliegen!"];

function Intro() {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Trigger the completion of the animation after the text has fully flown in
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true); // Set animation as complete after 4 seconds
    }, 4000); // Adjust timing for when the text finishes animating

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-end mb-4">
      {/* First text - fly in animation */}
      <div className={`fly-in-text ${animationComplete ? "stay" : ""}`}>
        {rotatingText.map((line, i) => (
          <p key={i} className="display-6 fw-bold text-primary m-0">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Intro;
