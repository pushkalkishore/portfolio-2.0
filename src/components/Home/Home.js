import React from "react";
import "./Home.css";
import logo from "../images/Logo2.png";
import Typewriter from "typewriter-effect";
import { FaWindowClose } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

function Home(props) {
  return (
    <section className="header">
      <nav>
        <a href="#">
          <img src={logo} />
        </a>
        <div className="nav-links" id="navlinks">
          <FaWindowClose className="closeicon" onClick={hidemenu} />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </div>
        <HiMenuAlt3 className="menuicon" onClick={showmenu}/>
      </nav>

      <div className="intropage">
        <h2 className="introhead2">Hey, I'm</h2>
        <h1 className="introhead1">Pushkal Kishore</h1>
        <div className="typewriter">
          <Typewriter
            options={{
              strings: [
                "Programmer","Developer", "Cool Guy", "Learner","Thinker",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <a href="#" className="hero-btn">
          Hire Me
        </a>
      </div>
    </section>
  );
}


function showmenu(){
  var navLinks=document.getElementById("navlinks")
  navLinks.style.right="0";
}

function hidemenu(){
  var navLinks=document.getElementById("navlinks")
  navLinks.style.right="-200px"
}

export default Home;
