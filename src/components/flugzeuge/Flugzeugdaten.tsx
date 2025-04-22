// Aircraft data array
import flugzeugeImages from "./Images.index"; 
import { AircraftType } from "./AircraftType";


  
const aircraftData = [
    {
      type: AircraftType.CESSNA,
      model: "Cessna 172",
      registration: "D-EEWG",
      images: (flugzeugeImages.deewg as { full: string; preview: string }[]).map(img => img.full),
      descriptionItems: [
        "4-sitziges Reise- und Schulflugzeug",
        "Motor: Lycoming 160 PS",
        "Reisegeschwindigkeit: ca. 190 km/h"
      ]
    },
    {
      type: AircraftType.ROBIN,
      model: "Robin DR-400/180 R",
      registration: "D-EGUN",
      images: (flugzeugeImages.degun as { full: string; preview: string }[]).map(img => img.full),
      descriptionItems: [
        "4-sitziges Reise-, Schlepp- und Schulflugzeug",
        "Reisegeschwindigkeit: ca. 200 km/h"
      ]
    },
    {
      type: AircraftType.DYNAMIC,
      model: "Dynamic WT-9",
      registration: "D-MFVG",
      images: (flugzeugeImages.dmfvg as { full: string; preview: string }[]).map(img => img.full),
      descriptionItems: [
        "2-sitziges Ultraleichtflugzeug",
        "Maximale Abflugmasse: 600 kg",
        "Tankinhalt: 100 Liter MoGas/UL91/100LL",
        "Motor: Rotax 912 100 PS",
        "Reisegeschwindigkeit: 180-200 km/h"
      ]
    },
    {
      type: AircraftType.PIONEER,
      model: "Pioneer 200",
      registration: "D-MFGB",
      images: (flugzeugeImages.dmfgb as { full: string; preview: string }[]).map(img => img.full),
      descriptionItems: [
        "2-sitziges Ultraleichtflugzeug",
        "Motor: Rotax 80 PS",
        "Reisegeschwindigkeit: ca. 160 km/h"
      ]
    },
    {
      type: AircraftType.ASK21,
      model: "ASK 21",
      registration: "D-5942",
      images: (flugzeugeImages.d5942 as { full: string; preview: string }[]).map(img => img.full),
      descriptionItems: [
        "2-sitziges Schul- und Übungsflugzeug",
        "Spannweite: 18m",
        "Gleitzahl: 1:34"
      ]
    },
    {
      type: AircraftType.DISCUS,
      model: "Discus CS",
      registration: "D-4149",
      images: (flugzeugeImages.d4149 as { full: string; preview: string }[]).map(img => img.full),
      descriptionItems: [
        "Einsitziges Leistungssegelflugzeug",
        "Standardklasse",
        "Erster Einsitzer auf den Flugschüler nach dem Alleinflug umgeschult werden können",
        "Spannweite: 15m",
        "Gleitzahl: 1:43"
      ]
    },
    {
      type: AircraftType.ASW20,
      model: "ASW 20 C",
      registration: "D-2510",
      images: (flugzeugeImages.d2510 as { full: string; preview: string }[]).map(img => img.full),
      descriptionItems: [
        "Einsitziges Leistungssegelflugzeug",
        "Rennklasse",
        "Spannweite: 15m",
        "Gleitzahl: 1:42"
      ]
    }
  ];

  export default aircraftData;