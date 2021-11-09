import React, { useEffect, useRef, useState } from "react";
import { WOW } from "wowjs";
import WAVES from "vanta/dist/vanta.waves.min";
import Footer from "./components/Footer";
import Project from "./components/Project";
import projectConfig from "./assets/projects";
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
          scale: 1.0,
          scaleMobile: 3.0,
          color: 0x0,
          zoom: 1.25,
          shininess: 25.0,
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
        <div className="col">
          <div className="row mainContent evenodd">
            <div className="aboutMeTitle col-xl-12">
              {" "}
              <h4 className="wow fadeInUp designs">Modern Designs</h4>{" "}
              <h4 className="wow fadeInUp solutions">Modern Solutions</h4>{" "}
            </div>

            <div className="row wow fadeInUp aboutMe">
              <div className="col-xl-12 center">
                <div className="row">
                  <div className="col-xl-2"></div>
                  <div className="headshot col-xl-4">
                    <img
                      className="myface"
                      alt="Developers face"
                      src={process.env.PUBLIC_URL + "/Headshot.jpeg"}
                    ></img>
                  </div>

                  <div className="col blurb">
                    <div className="col silly">Hey look, it's me!</div>
                    <div className="col aboutmetext">
                      Hello my name is TJ Fitzpatrick and I am a full stack web
                      developer. From starting as an enthusiastic hobbyist to
                      becoming a professional nerd, I love to create, design,
                      and solve problems everywhere I go. I've spent my life
                      working in design and problem solving as an audio
                      engineer, a pharmacy technician, an inventory logistics
                      specialist for small businesses, and much more. Using the
                      skills I've cultivated I bring a fresh and innovative
                      perspective to the world of software development.
                    </div>
                  </div>
                  <div className="col-xl-1"></div>
                </div>
              </div>
              <div className="col quote">
                "Here we stand, feet planted firmly in the earth, but might the
                cosmos be very near us, only just above our heads?"
                <p></p>
              </div>
            </div>
          </div>{" "}
          {projectConfig.map((project, index) => (
            <Project project={project} index={index} />
          ))}
          <div className="row mainContent evenodd">
            <div className="wow fadeInUp row goodbye">
              <div className="col-xl-12 morelater">
                <h4>More in the works!</h4>{" "}
              </div>
              <div className="col-xl-12 goodbyetext">
                Check back later because there are always more projects being
                developed, in fact don't be surprised to find this site has
                changed the next time you visit since I am actively practicing
                more skills and adding new features.
                <br></br>
                <br></br>
                You can find links to my professional materials in the pink bar
                that's been following you around the site, but if you would like
                to contact me directly check out the information below.{" "}
                <br></br>
                <br></br>
                Thank you for taking the time to check out what I do!
              </div>
              <div className="contact">
                <h1>Cellphone: 770-608-2719 </h1>
                <h1>Email: tjfitzdev@gmail.com</h1>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
