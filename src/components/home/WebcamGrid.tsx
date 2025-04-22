import { useEffect, useState } from "react";
import { ROUTES } from '../../routes';
// Funktion, die den Basis-URL für Webcams festlegt
const getWebcamPath = () => {
  // Wenn es sich um die Entwicklungsumgebung handelt
  if (window.location.hostname === "localhost" || window.location.hostname === "www.dev.fsv-gunzenhausen.de") {
    return "https://www.fsv-gunzenhausen.de/webcam"; // Verwende die feste Domain im Dev
  }
  else{
      // Im Produktionsmodus (z.B. auf fsv-gunzenhausen.de)
      return "./webcam"; // Relativer Pfad für die Produktion
  }
};

function WebcamGrid() {
  const [webcamImages, setWebcamImages] = useState({
    webcamNO: `${getWebcamPath()}/EDMH-NO.jpg?ver=${new Date().getTime()}`,
    webcamSW: `${getWebcamPath()}/EDMH-SW.jpg?ver=${new Date().getTime()}`
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().getTime();
      setWebcamImages({
        webcamNO: `${getWebcamPath()}/EDMH-NO.jpg?ver=${newTime}`,
        webcamSW: `${getWebcamPath()}/EDMH-SW.jpg?ver=${newTime}`
      });
    }, 5*60000); // Aktualisiere alle 60 Sekunden

    return () => clearInterval(intervalId); // Aufräumen, wenn der Component unmontiert wird
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 mb-4">
          <a href={ROUTES.WEBCAM_OST}>
            <img
              className="img-fluid"
              id="webcamNO"
              src={webcamImages.webcamNO}
              alt="Webcam Ost"
            />
          </a>
        </div>
        <div className="col-sm-12 col-md-6 mb-4">
        <a href={ROUTES.WEBCAM_SUED}>
            <img
              className="img-fluid"
              id="webcamSW"
              src={webcamImages.webcamSW}
              alt="Webcam Süd"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebcamGrid;