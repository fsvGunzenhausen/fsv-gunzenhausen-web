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
    return <div>Flugzeug nicht gefunden.</div>;
  }
}

export default Aircraft;