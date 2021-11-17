import React, { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import "./style.css";

export default function Project(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(props.myRef);
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
          highlightColor: 0xc0c0c,
          midtoneColor: 0x1b1a1a,
          lowlightColor: 0x413e3e,
          baseColor: 0x0,
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

  return (
    <div ref={myRef} key={props.index} className="row mainContent evenodd">
      <div className="row projectWrapper wow fadeInUp">
        <div className="col-xl-12 projectCol no-gutters">
          <h4>{props.project.name}</h4>
          <div className="wow fadeInUp col projecttext">
            {props.project.description}
          </div>
          <div className="col links">
            <a
              className="wow fadeInUp github"
              target={"_blank"}
              rel="noreferrer"
              href={!props.project.github ? null : props.project.github}
            >
              <h6 className="">
                {!props.project.github ? "Private Repository" : "Github repo"}
              </h6>{" "}
            </a>
            <a
              className="wow fadeInUp deployed"
              target="_blank"
              rel="noreferrer"
              href={props.project.deployed}
            >
              <h6 className="">Deployed application</h6>
            </a>
          </div>
          <div className="col projectimg">
            <img
              alt={props.project.imageAlt}
              src={process.env.PUBLIC_URL + props.project.image}
              className=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
