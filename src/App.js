import logo from "./logo.svg";
import React, { useEffect, useRef, useState } from "react";
import { WOW } from "wowjs";
import WAVES from "vanta/dist/vanta.waves.min";
import "./App.css";
import "animate.css";
import pdf from "./resume/Thomas Fitzpatrick Resume.pdf";
function App() {
  const [inView, setInView] = useState(1);
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
        <div className="bottombar">
          <h4 className="icons">
            <a
              className="animate__pulse"
              href="https://www.linkedin.com/in/tj-fitzpatrick/"
              title="Freepik"
              target="_blank"
            >
              <img src="../assets/linkedin-logo.png"></img>
            </a>{" "}
            <a
              className="animate__pulse"
              href="https://github.com/TJFitz"
              title="Freepik"
              target="_blank"
            >
              <img src="../assets/github.png"></img>
            </a>{" "}
            <a
              className="animate__pulse"
              href={pdf}
              title="Freepik"
              target="_blank"
            >
              <img src="../assets/resume-and-cv.png"></img>
            </a>{" "}
          </h4>
          <div className="attributions">
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/vitaly-gorbachev"
              title="Freepik"
              target="_blank"
            >
              Vitaly Gorbachev,
            </a>{" "}
            <a
              href="https://www.flaticon.com/authors/vitaly-gorbachev"
              title="Freepik"
              target="_blank"
            >
              Google,
            </a>{" "}
            and
            <a
              className="toTheLeft"
              href="https://www.flaticon.com/authors/google"
              title="Freepik"
              target="_blank"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
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
