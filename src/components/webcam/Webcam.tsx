import PageNotFound from "../../layout/page-not-found/PageNotFound";
import { useEffect, useState } from "react";

// Funktion, die den Basis-URL für Webcams festlegt
const getWebcamPath = () => {
  // Wenn es sich um die Entwicklungsumgebung handelt
  if (window.location.hostname === "localhost" || window.location.hostname === "dev.fsv-gunzenhausen.de") {
    return "https://www.fsv-gunzenhausen.de/webcam"; // Verwende die feste Domain im Dev
  }
  // Im Produktionsmodus (z.B. auf fsv-gunzenhausen.de)
  return "../webcam"; // Relativer Pfad für die Produktion
};
export enum WebcamDirection {
    SUED = "Süd",
    OST = "Ost",

  }

  type WebcamDirectionProps = {
    direction: WebcamDirection;
  };


function Webcam({ direction }: WebcamDirectionProps) {
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
    switch (direction) {
        case WebcamDirection.OST:
            return (
                <>
                    <div className="container">
                        <img
                            className="img-fluid w-100 mb-4"
                            id="webcamNO"
                            src={webcamImages.webcamNO}
                            alt="Webcam Ost"
                            />
                    </div>
                </>
            );
            break;
        case WebcamDirection.SUED:
            return (
                <>
                    <div className="container">
                        <img
                            className="img-fluid w-100 mb-4"
                            id="webcamSW"
                            src={webcamImages.webcamSW}
                            alt="Webcam Süd"
                            />
                    </div>
                </>
            );
            break;
        default:
            return <PageNotFound />; // Return a 404 page if the direction is not found
            break;
    }
  }
  
  export default Webcam;