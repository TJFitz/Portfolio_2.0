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
          zoom: 1,
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

  let projects = [
    {
      name: "POC-IT",
      description:
        "POC-IT (Point of Care Information Technology) is our solution to both the risks of self wound treatment and the stress placed on the healthcare industry due to infections and complications caused by improper home care. We provide an application that allows users to get detailed instructions and information on their healthcare needs from their computer or mobile device, making use of machine learning to provide hand gesture control to allow users to maintain a clean environment while performing procedures. I focused on developing the database and server side routing, as well as user image intergration and assistance with training machine learning models",
      imageAlt: "POC-IT dashboard",
      image: "/homepage.png",
      github: "https://github.com/TJFitz/Eat_Da_Burger",
      deployed: "https://hidden-shelf-21758.herokuapp.com/",
    },
    {
      name: "Lockhart Lounge",
      description:
        "Lockhart Lounge is an all-in-one restaurant application that provides users with a way to book reservations, view menu items and order online with ease. With a sleek user interface and scalable menu templating, this eCommerce model is any restaurants answer to all of their online needs.",
      imageAlt: "Lockhart landing page",
      image: "/lockhart.png",
      github: "https://github.com/TJFitz/Lockhart_Lounge",
      deployed: "https://thedaringpenguins.herokuapp.com/",
    },
    {
      name: "Employee Directory",
      description:
        "An application built with React that allows users to sort a database of employees on the fly. Ready for any size list of people, this application focuses on being an easy to use and lightweight source for sorting and viewing employees.",
      imageAlt: "Employee Directory display",
      image: "/employeeDirectory.png",
      github: "https://github.com/TJFitz/React_Employee_Directory",
      deployed: "https://tjfitz.github.io/React_Employee_Directory/",
    },
    {
      name: "Code Quiz",
      description:
        "A timed multiple choice quiz on coding fundamentals with locally tracked high scores. Making use of JQuery and modern ui principles, Code Quiz offers a fun learning experience for people just starting their programming journey.",
      imageAlt: "Code Quiz in action",
      image: "/quiz_inaction.png",
      github: "https://github.com/TJFitz/Code_Quiz",
      deployed: "https://tjfitz.github.io/Code_Quiz/",
    },
  ];

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
          {projects.map((project, index) => {
            return (
              <div key={index} className="row mainContent evenodd">
                <div className="col centering">
                  <div className="row test wow fadeInUp">
                    <div className="col-xl-12 contain">
                      <h3>{project.name}</h3>
                      <div className="wow fadeInUp col projecttext">
                        {project.description}
                      </div>
                      <div className="col links">
                        <a
                          className="wow fadeInUp github"
                          target="_blank"
                          rel="noreferrer"
                          href={project.github}
                        >
                          <h6 className="">Github repo</h6>{" "}
                        </a>
                        <a
                          className="wow fadeInUp deployed"
                          target="_blank"
                          rel="noreferrer"
                          href={project.deployed}
                        >
                          <h6 className="">Deployed application</h6>
                        </a>
                      </div>
                    </div>
                    <div className="col projectimg">
                      <img
                        alt={project.imageAlt}
                        src={process.env.PUBLIC_URL + project.image}
                        className=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="row mainContent evenodd">
            <div className="col center">
              <div className="wow fadeInUp row goodbye">
                <div className="col-xl-12 morelater">
                  <h3>More in the works!</h3>{" "}
                </div>
                <div className="col-xl-12 goodbyetext">
                  Check back later because there are always more projects being
                  developed, in fact don't be surprised to find this site has
                  changed the next time you visit since I am actively practicing
                  more skills and adding new features.
                  <br></br>
                  <br></br>
                  You can find links to my professional materials in the pink
                  bar that's been following you around the site, but if you
                  would like to contact me directly check out the information
                  below. <br></br>
                  <br></br>
                  Thank you for taking the time to check out what I do!
                </div>
                <div className="contact">
                  <h1>Cellphone: 770-608-2719 </h1>
                  <h1>Email: tjfitz@comcast.net</h1>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
