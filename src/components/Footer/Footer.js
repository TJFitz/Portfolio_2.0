import React from "react";
import pdf from "../../../public/assets/Thomas Fitzpatrick Resume.pdf";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin-logo.png";
import resume from "../../assets/resume-and-cv.png";
import "./style.css";

export default function Footer() {
  return (
    <div className="bottombar">
      <h4 className="icons">
        <a
          className="animate__pulse"
          href="https://www.linkedin.com/in/tj-fitzpatrick/"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn Icon"></img>
        </a>{" "}
        <a
          className="animate__pulse"
          href="https://github.com/TJFitz"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Github Icon"></img>
        </a>{" "}
        <a
          className="animate__pulse"
          href={pdf}
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          <img src={resume} alt="Resume Icon"></img>
        </a>{" "}
      </h4>
      <div className="attributions">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/vitaly-gorbachev"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          Vitaly Gorbachev,
        </a>{" "}
        <a
          href="https://www.flaticon.com/authors/vitaly-gorbachev"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          Google,
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
