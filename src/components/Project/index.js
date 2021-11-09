import React from "react";
import "./style.css";

export default function Project(props) {
  return (
    <div key={props.index} className="row mainContent evenodd">
      <div className="row projectWrapper wow fadeInUp">
        <div className="col-xl-12">
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
  );
}
