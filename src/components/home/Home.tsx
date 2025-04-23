
import Carousel from "./Carousel";
import Navigation from './Navigation';
import News from "./News";
import WebcamGrid from "./WebcamGrid";


function Home() {

    return (
        <>
          {/* Carousel */}
          <Carousel />
          {/* Navigation Grid */}
          <Navigation />
          {/* News */}
          <News/>
          {/* Webcam Grid */}
          <WebcamGrid />
        </>
      );
  }
  
  export default Home;
  