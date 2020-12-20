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
          scale: 3.0,
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
    const wow = new WOW({ live: true });
    wow.init();
  }, []);

  return (
    <>
      <div ref={myRef} className="container-fluid no-gutters">
        <div className=" row title ">
          <div className="topbar"></div>
          <div className=" titleName col">
            <div className="testing animate__fadeInUp vertical">
              <h3 className="">TJ Fitzpatrick</h3>
              <h5>Full Stack Web Developer</h5>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <div className="">
          <div className="row evenodd">
            <div className="test col"> content </div>
          </div>{" "}
          <div className=" row evenodd ">
            <div className="test col"> content to animate</div>
          </div>{" "}
          <div className="row evenodd">
            <div className="test col"> content </div>
          </div>{" "}
          <div className="row evenodd">
            <div className="test col"> content </div>
          </div>{" "}
          <div className="row evenodd">
            <div className="test col"> content </div>
          </div>{" "}
          <div className="row evenodd">
            <div className="test col"> content </div>
          </div>{" "}
          <div className="row evenodd">
            <div className="test col"> content </div>
          </div>{" "}
          <div className="row evenodd">
            <div className="test col"> content </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
