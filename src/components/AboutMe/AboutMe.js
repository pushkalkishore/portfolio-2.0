import React from "react";
import "./AboutMe.css";
import myphoto from "../images/MyPhoto.png";

function AboutMe() {
  return (
    <section className="aboutme">
      <div className="a-left">

          <div className="bg-image"></div>


          <div className="a-card">
            <img src={myphoto} alt="photo" className="a-image" />
          </div>
      </div>

      <div className="a-right">
        <h1>AboutMe</h1>
        <p>
          Hi, I’m Pushkal Kishore.<br></br> I am currently in my IIIrd year
          pursuing Electrical And Electronics Engineering at BIT Mesra.<br></br>{" "}
          My interests lie in programming, web development and problem solving.
        </p>
        <p>P.S. I am a Marvel Fan</p>
      </div>
    </section>
  );
}

export default AboutMe;
