

import homeImages from "./Images.index";

  const navItems = [

    { href: "https://www.facebook.com/Flugplatz.Gunzenhausen", img: homeImages.socialMediaIcons.facebook, label: "Facebook", external: true },
    { href: "https://www.instagram.com/fsv_gunzenhausen/", img: homeImages.socialMediaIcons.instagram, label: "Instagram", external: true },
  ];


  function SocialMedia() {
    return (
      <div className="container">
            {/* Social Media Title */}
        <div className="text-center fw-light mb-3">
          <p className='lead fw-lead'>Folge uns auch auf Facebook und Instagram!</p>
        </div>
  
        {/* Social Media Grid */}
        <div className="row justify-content-center">
          {navItems.map(({ href, img, label }) => (
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
      </div>

    );
  }
  
  export default SocialMedia;