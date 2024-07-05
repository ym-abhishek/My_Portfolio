import "./home.css";
import dp from "../images/com.png";
import React from "react";
import { Link } from "react-router-dom";

const PDF_FILE_URL = "https://drive.google.com/file/d/1hZZ7Y1Gb3h3syzNpF-k848n3hXcjuwI6/view?usp=sharing"

export default function Home() {
  const openFileInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="container-home">
        <div className="intro">
          <p>--- Hello</p>
          <h1>I'm Y M Abhishek</h1>
          <p>
            This is Abhishek, a Python Full Stack Fresher located in India,
            Karnataka, Bengaluru, looking for fresher opportunities.
          </p>
          <button onClick={()=>{openFileInNewTab(PDF_FILE_URL)}}>Download CV</button>
          <Link to="/about"><button>About Me</button></Link>
        </div>
        <div className="dp">
          <img src={dp} alt="dp" />
        </div>
      </div>
    </>
  );
}
