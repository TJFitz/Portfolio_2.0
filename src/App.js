import React, { useEffect, useRef, useState } from "react";
import { WOW } from "wowjs";
import FOG from "vanta/dist/vanta.fog.min";
import Footer from "./components/Footer";
import Project from "./components/Project";
import projectConfig from "./assets/projects";
import "animate.css";
import "./App.css";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 300.0,
          highlightColor: 0x0,
          midtoneColor: 0x705b1f,
          lowlightColor: 0x897262,
          baseColor: 0x20000,
          blurFactor: 0.18,
          speed: 0.3,
          zoom: 1.8,
        }),
        FOG({
          el: secondRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 300.0,
          highlightColor: 0x0,
          midtoneColor: 0x705b1f,
          lowlightColor: 0x897262,
          baseColor: 0x20000,
          blurFactor: 0.18,
          speed: 0.3,
          zoom: 1.8,
        }),
        FOG({
          el: thirdRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 300.0,
          highlightColor: 0x0,
          midtoneColor: 0x705b1f,
          lowlightColor: 0x897262,
          baseColor: 0x20000,
          blurFactor: 0.18,
          speed: 0.3,
          zoom: 1.8,
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
      <div className="container-fluid no-gutters">
        <div ref={myRef} className=" row title ">
          <div className="topbar"></div>
          <div className="col-xl-12 blurDrop">
            <div className="nametitle animate__fadeInUp vertical">
              <h3 className="">TJ Fitzpatrick</h3>
              <h5>Full Stack Web Developer</h5>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <div className="col">
          <div ref={secondRef} className="row mainContent evenodd">
            <div className="aboutMeTitle col-xl-12">
              {" "}
              <h4 className="wow fadeInUp designs">Modern Designs</h4>{" "}
              <h4 className="wow fadeInUp solutions">Modern Solutions</h4>{" "}
            </div>

            <div className="row wow fadeInUp aboutMe">
              <div className="col-xl-12 d-flex justify-content-center">
                <div className="row profileCentering">
                  <div className="headshot col-lg-6">
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
            <Project project={project} index={index} ref={myRef} />
          ))}
          <div ref={thirdRef} className="row mainContent evenodd">
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
