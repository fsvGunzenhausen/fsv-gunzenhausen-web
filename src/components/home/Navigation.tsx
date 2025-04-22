
import { ROUTES } from '../../routes';
import homeImages from "./Images.index";

const navItems = [
    { href: ROUTES.FLUGAUSBILDUNG, img: homeImages.icons.flugausbildung, label: "Flugausbildung" },
    { href: ROUTES.RUNDFLUEGE, img: homeImages.icons.rundfluege, label: "Rundflüge" },
    { href: ROUTES.FLUGZEUGE, img: homeImages.icons.flugzeuge, label: "Flugzeuge" },
    { href: ROUTES.FOTOS, img: homeImages.icons.fotos, label: "Fotos" },
    { href: ROUTES.KONTAKT, img: homeImages.icons.kontakt, label: "Kontakt" },
    { href: ROUTES.CHRONIK, img: homeImages.icons.chronik, label: "Chronik" },
    { href: "https://www.facebook.com/Flugplatz.Gunzenhausen", img: homeImages.socialMediaIcons.facebook, label: "Facebook", external: true },
    { href: "https://www.instagram.com/fsv_gunzenhausen/", img: homeImages.socialMediaIcons.instagram, label: "Instagram", external: true },
  ];

  const mainNavItems = navItems.filter(item => !item.external);
  const socialNavItems = navItems.filter(item => item.external);

  function Navigation() {
    return (
      <div className="container">
        {/* Main Navigation Grid */}
        <div className="row mb-4">
          {mainNavItems.map(({ href, img, label }) => (
            <div key={href} className="col-sm-6 col-md-4 col-lg-4 text-center">
              <a className="btn" href={href} role="button">
                <img className="navgrid-image" src={img} alt={label} />
                <p>{label}</p>
              </a>
            </div>
          ))}
        </div>
  
        {/* Divider */}
        <hr className="mt-4 mb-1" />
  
        {/* Social Media Title */}
        <div className="text-center fw-light mb-3">
          <p className='lead fw-lead'>Folge uns auch auf Facebook und Instagram!</p>
        </div>
  
        {/* Social Media Grid */}
        <div className="row justify-content-center">
          {socialNavItems.map(({ href, img, label }) => (
            <div key={href} className="col-4 col-sm-3 col-md-2 text-center">
              <a
                className="btn"
                href={href}
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="navgrid-image social-icon" src={img} alt={label} />
              </a>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="mt-1 mb-4" />
      </div>


    );
  }
  
  export default Navigation;