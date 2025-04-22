import PageNotFound from "../../layout/page-not-found/PageNotFound";
import AircraftTemplate from "./AircraftTemplate";
import { AircraftType } from "./AircraftType";
import  aircraftData  from "./Flugzeugdaten"; // Import the aircraft data


type AircraftRegTemplateProps = {
  aircraftType: AircraftType;
};

function Aircraft({ aircraftType }: AircraftRegTemplateProps) {
  // Find the matching aircraft data by aircraftType
  const aircraft = aircraftData.find(a => a.type === aircraftType);

  // Return the matching AircraftTemplate or a fallback message if not found
  if (aircraft) {
    return (
      <AircraftTemplate
        model={aircraft.model}
        registration={aircraft.registration}
        images={aircraft.images}
        descriptionItems={aircraft.descriptionItems}
      />
    );
  } else {
    return <PageNotFound />; // Return a 404 page if the aircraft is not found
  }
}

export default Aircraft;