import React, { useEffect, useRef, useState } from "react";
import { WOW } from "wowjs";
import WAVES from "vanta/dist/vanta.waves.min";
import Footer from "../src/components/Footer/Footer";
import "animate.css";
import "./App.css";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 2.0,
          scaleMobile: 2.0,
          color: 0x5c5677,
          zoom: 2,
          shininess: 100.0,
          waveHeight: 4.0,
          waveSpeed: 0.75,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    // window.scrollTo(0, 0);
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <>
      <div ref={myRef} className="container-fluid no-gutters">
        <div className=" row title ">
          <div className="topbar"></div>
          <div className=" titleName col">
            <div className="nametitle animate__fadeInUp vertical">
              <h3 className="">TJ Fitzpatrick</h3>
              <h5>Full Stack Web Developer</h5>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <div className="">
          <div className="row mainContent evenodd">
            <div className="aboutMeTitle col-xl-12">
              {" "}
              <h4 className="wow fadeInUp designs">Modern Designs</h4>{" "}
              <h4 className="wow fadeInUp solutions">Modern Solutions</h4>{" "}
            </div>
            <div className="row wow fadeInUp aboutMe">
              <div className="col">
                <div className="">content</div>
              </div>
            </div>
          </div>{" "}
          <div className="row mainContent evenodd">
            <div className="col"> content to animate</div>
          </div>
          <div className="row mainContent evenodd">
            <div className="col"> content </div>
          </div>
          <div className="row mainContent evenodd">
            <div className="col"> content </div>
          </div>
          <div className="row mainContent evenodd">
            <div className="col"> content </div>
          </div>
          <div className="row mainContent evenodd">
            <div className="col"> content </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
