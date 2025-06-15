import flugzeugeImages from "./Images.index";
import { ROUTES } from "../../routes";


// Define aircraft data for easy mapping, with grouping based on type
const aircraftData = [
  {
    model: "Cessna 172 P",
    registration: "D-EEWG",
    image: (flugzeugeImages.deewg as { full: string; preview: string }[])[0]?.preview,
    link: ROUTES.CESSNA,
    category: "Motorflugzeuge"
  },
  {
    model: "Robin DR-400/180 R",
    registration: "D-EGUN",
    image: (flugzeugeImages.degun as { full: string; preview: string }[])[0]?.preview,
    link: ROUTES.ROBIN,
    category: "Motorflugzeuge"
  },
  {
    model: "Dynamic WT-9",
    registration: "D-MFVG",
    image: (flugzeugeImages.dmfvg as { full: string; preview: string }[])[0]?.preview,
    link: ROUTES.DYNAMIC,
    category: "Ultraleichtflugzeuge"
  },
  {
    model: "Pioneer 200",
    registration: "D-MFGB",
    image: (flugzeugeImages.dmfgb as { full: string; preview: string }[])[0]?.preview,
    link: ROUTES.PIONEER,
    category: "Ultraleichtflugzeuge"
  },
  {
    model: "ASK 21",
    registration: "D-5942",
    image: (flugzeugeImages.d5942 as { full: string; preview: string }[])[0]?.preview,
    link: ROUTES.ASK21,
    category: "Segelflugzeuge"
  },
  {
    model: "Discus CS",
    registration: "D-4149",
    image: (flugzeugeImages.d4149 as { full: string; preview: string }[])[0]?.preview,
    link: ROUTES.DISCUS,
    category: "Segelflugzeuge"
  },
  {
    model: "ASW 20 C",
    registration: "D-2510",
    image: (flugzeugeImages.d2510 as { full: string; preview: string }[])[0]?.preview,
    link: ROUTES.ASW20,
    category: "Segelflugzeuge"
  },
];

function Flugzeuge() {
  const categories = ["Motorflugzeuge", "Ultraleichtflugzeuge", "Segelflugzeuge"];

  return (
    <div className="container">
      {categories.map((category) => (
        <div key={category}>
          <div className="row text-center">
            {aircraftData
              .filter((aircraft) => aircraft.category === category)
              .map((aircraft, index) => (
                <div
                  className={`col-sm-12 col-md-6 ${category === "Segelflugzeuge" ? "col-lg-4" : "col-lg-6"
                    } d-flex align-items-stretch`}
                  key={index}
                >
                  <a href={aircraft.link}
                    style={{ textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}></a>
                  <div className="card d-block mb-4 shadow p-0">
                    <div className="view overlay">
                      <img
                        className="card-img-top"
                        src={aircraft.image}
                        alt={aircraft.model}
                      />
                    </div>
                    <div className="card-body">

                      <h3
                        className="mb-0 text-dark"
                      >{aircraft.model}</h3>
                      <div
                        className="mb-1 text-muted"
                      >{aircraft.registration}</div>

                    </div>
                  </div>
                </a>
                </div>
              ))}
        </div>
        </div>
  ))
}
    </div >
  );
}

export default Flugzeuge;