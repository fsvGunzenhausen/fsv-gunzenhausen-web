import chronikIcon from '../../assets/components/home/icons/chronik.png';
import flugausbildungIcon from '../../assets/components/home/icons/flugausbildung.png'; 
import flugzeugeIcon from '../../assets/components/home/icons/flugzeuge.png';
import kontaktIcon from '../../assets/components/home/icons/kontakt.png';
import fotosIcon from '../../assets/components/home/icons/fotos.png';
import rundfluegeIcon from '../../assets/components/home/icons/rundfluege.png';
import landegebuehrenIcon from '../../assets/components/home/icons/landegebuehren.png';
import informationIcon from '../../assets/components/home/icons/piloteninformation.png';

import introVideo from '../../assets/components/home/carousel_000.mp4';
import carousel_001 from '../../assets/components/home/carousel_001.png';
import carousel_007 from '../../assets/components/home/carousel_007.jpg';
import carousel_008 from '../../assets/components/home/carousel_008.jpg';
import carousel_009 from '../../assets/components/home/carousel_009.jpg';
import carousel_010 from '../../assets/components/home/carousel_010.jpg';

import carousel_012 from '../../assets/components/home/carousel_012.png';

import facebookIcon from '../../assets/components/home/socialMedia/facebook.svg';
import instagramIcon from '../../assets/components/home/socialMedia/instagram.png';



const homeImages = {
    icons: {
        chronik: chronikIcon,
        flugausbildung: flugausbildungIcon,
        flugzeuge: flugzeugeIcon,
        kontakt: kontaktIcon,
        fotos: fotosIcon,
        rundfluege: rundfluegeIcon,
        landegebuehren: landegebuehrenIcon,
        information: informationIcon,
      },
    carouselImages:[
        carousel_001,
        carousel_012,
        carousel_007,
        carousel_008,
        carousel_009,
        carousel_010
      
    ],
    carouselVideo: introVideo,
    socialMediaIcons: {
        facebook: facebookIcon,
        instagram: instagramIcon,
    },
};

export default homeImages;
