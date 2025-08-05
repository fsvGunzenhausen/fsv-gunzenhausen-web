
import { ROUTES } from '../../routes';
import homeImages from "./Images.index";

const navItems = [
      { href: ROUTES.INFORMATIONEN, img: homeImages.icons.information, label: "Flugplatzinfos" },
      { href: ROUTES.LANDEGEBUEHREN, img: homeImages.icons.landegebuehren, label: "Landegebühren" },
      { href: ROUTES.FLUGAUSBILDUNG, img: homeImages.icons.flugausbildung, label: "Flugausbildung" },
      { href: ROUTES.RUNDFLUEGE, img: homeImages.icons.rundfluege, label: "Rundflüge" },
      { href: ROUTES.FLUGZEUGE, img: homeImages.icons.flugzeuge, label: "Flugzeuge" },
      { href: ROUTES.FOTOS, img: homeImages.icons.fotos, label: "Fotos" },
      { href: ROUTES.KONTAKT, img: homeImages.icons.kontakt, label: "Kontakt" },
      { href: ROUTES.CHRONIK, img: homeImages.icons.chronik, label: "Chronik" }
  ];


  function Navigation() {
    return (
      <div className="container">
        {/* Main Navigation Grid */}
        <div className="row mb-4">
            {navItems.map(({ href, img, label }) => (
              <div key={href} className="col-6 col-sm-4 col-md-3 col-lg-3 text-center">
                <a className="btn" href={href} role="button">
                  <img className="navgrid-image" src={img} alt={label} />
                  <p>{label}</p>
                </a>
              </div>
            ))}
        </div>
      </div>


    );
  }
  
  export default Navigation;