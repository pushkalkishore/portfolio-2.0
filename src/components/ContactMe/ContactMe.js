import React from "react";
import "./ContactMe.css";

function ContactMe(props) {
  return (
    <section className="cta" id="contactme">
      <h3>
        Have a new project in mind?<br></br> Let's collaborate and build
        something awesome.<br></br> Let's turn that idea to an even greater
        product 🙂😇
      </h3>
      <a href="mailto:kpushkal122@gmail.com" className="hero-btn">
        Contact Me
      </a>
    </section>
  );
}

export default ContactMe;
