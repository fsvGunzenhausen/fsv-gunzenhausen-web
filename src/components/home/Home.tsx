

import Navigation from './Navigation';
import SmallNews from "./SmallNews";
import WebcamGrid from "./WebcamGrid";
import SocialMedia from "./SocialMedia";

function Home() {

    return (
        <>
          {/* Navigation Grid */}
          <Navigation />
                  {/* Divider */}
              <div className="container">
                        <hr className="mt-4 mb-4" />
                </div>         

          {/* News */}
          <SmallNews/>
                  {/* Divider */}
              <div className="container">
                        <hr className="mt-4 mb-4" />
                </div>         

          {/* Social Media */}
          <SocialMedia />
          {/* Webcam Grid */}
                  {/* Divider */}
              <div className="container">
                        <hr className="mt-4 mb-4" />
                </div>         

          <WebcamGrid />
        </>
      );
  }
  
  export default Home;
  