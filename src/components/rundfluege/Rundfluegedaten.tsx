import images from './Images.index';
import { ROUTES } from "../../routes";

export interface AircraftData {
  title: string;
  image: string;
  link: string;
  code: string;
  passengers: string;
  typeOfAircraft: string;
  price: string;
}
export interface FlightCardData {
    title: string;
    price: string;
    duration: string;
    items: string[];
}
export interface RoutingCardData {
  title: string;
  image: string;
  description: string[];
  details: string[];
  detailsUL?: string[];
}

  
export const flightCards: FlightCardData[] = [
{
    title: "Kleiner Seenrundflug",
    price: "45 €",
    duration: "ca 15 Minuten",
    items: ["Altmühlsee", "Brombachsee Vorsperre", "", "", "ca 15 Minuten"],
},
{
    title: "Großer Seenrundflug",
    price: "55 €",
    duration: "ca 20 Minuten",
    items: ["Altmühlsee", "Brombachsee Hauptsperre", "", "", "ca 20 Minuten"],
},
{
    title: "Drei-Seenrundflug",
    price: "75 €",
    duration: "ca 30 Minuten",
    items: ["Altmühlsee", "Brombachsee", "Rothsee", "", "ca 30 Minuten"],
},
];

export const aircraftList: AircraftData[] = [
  {
    title: "Dynamic WT-9",
    image: images.dynamic.preview,
    link: ROUTES.DYNAMIC,
    code: "D-MFVG",
    passengers: "Ein Passagier",
    typeOfAircraft: "Ultraleichtflugzeug",
    price: "200 €",
  },
  {
    title: "Pioneer 200",
    image: images.pioneer.preview,
    link: ROUTES.PIONEER,
    code: "D-MFGB",
    passengers: "Ein Passagier",
    typeOfAircraft: "Ultraleichtflugzeug",
    price: "200 €",
  },
  {
    title: "Robin DR-400",
    image: images.robin.preview,
    link: ROUTES.ROBIN,
    code: "D-EGUN",
    passengers: "Bis zu drei Passagiere",
    typeOfAircraft: "Motorflugzeug der Echo-Klasse",
    price: "280 €",
  },
  {
    title: "Cessna 172",
    image: images.cessna.preview,
    link: ROUTES.CESSNA,
    code: "D-EEWG",
    passengers: "Bis zu drei Passagiere",
    typeOfAircraft: "Motorflugzeug der Echo-Klasse",
    price: "280 €",
  },
];


export const routingCards: RoutingCardData[] = [
  {
    title: "Südliches Mittelfranken",
    image: images.wuelzburg.preview,
    description: [
      "Brombachsee, Wülzburg, Altmühltal, Burg Pappenheim, Nördlingen, Dinkelsbühl, Hesselberg, Altmühlsee",
    ],
    details: ["Motorflugzeug (max. 3 Passagiere)", "Dauer ca. 1:00h € 280,-"],
    detailsUL: ["UL (ein Passagier)  € 200,-"],
  },
  {
    title: "Kloster Weltenburg",
    image: images.weltenburg.preview,
    description: [
      "Hinflug über Brombachsee, Rothsee, Main-Donau-Kanal zur Befreiungshalle bei Kehlheim, Kloster Weltenburg, Donaudurchbruch",
      "Rückflug über das Altmühltal",
    ],
    details: ["Motorflugzeug (max. 3 Passagiere)", "Dauer ca. 1:20h € 375,-"],
    detailsUL: ["UL (ein Passagier)  € 265,-"],
  },
  {
    title: "Alpenflug",
    image: images.zugspitze.preview,
    description: [
      "Wettersteingebirge, Zugspitze",
      "auf Wunsch mit Zwischenlandung (Kaffee) in Leutkirch",
    ],
    details: [
      "Motorflugzeug (max. 3 Passagiere)", 
      "Dauer ca. 2:30h € 700,-",
    ],
    detailsUL: ["UL (ein Passagier)  € 500,-",       "Terminfindung ist stark wetterabhängig!",],
  },
];
