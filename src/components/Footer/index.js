import React from "react";
// import pdf from "../../assets/Thomas_Fitzpatrick_Resume.pdf";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin-logo.png";
import resume from "../../assets/resume-and-cv.png";
import "./style.css";

export default function Footer() {
  return (
    <div className="bottombar">
      <div className="icons">
        <a
          className=""
          href="https://www.linkedin.com/in/tj-fitzpatrick/"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn Icon"></img>
        </a>{" "}
        <a
          className="githubIcon"
          href="https://github.com/TJFitz"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Github Icon"></img>
        </a>{" "}
        <a
          href={process.env.PUBLIC_URL + "/Thomas Fitzpatrick Resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <img src={resume} alt="Resume Icon"></img>
        </a>
      </div>
      <div className="attributions">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/laisa-islam-ani"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          Laisa Islam Ani,
        </a>{" "}
        <a
          href="https://www.flaticon.com/authors/stockio"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          Stockio,
        </a>{" "}
        and
        <a
          className="toTheLeft"
          href="https://www.flaticon.com/authors/google"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
