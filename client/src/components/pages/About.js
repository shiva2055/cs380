import React from "react";
import table from "../../photos/about.jpg";
import "../css/About.css";
function About() {
  return (
    <div className="About">
      <div className="info">
        <p>
          We are a webpage specially designed to help you reserve the table.
          <br></br>
          We are group of 6 people from CWU working on a project.<br></br>
          Are you having trouble with reserving a resturant?? <br></br>
          Let us handle all the hustle of reserving the seat for you.
        </p>
        <button href="#">Learn More.</button>
      </div>
    </div>
  );
}

export default About;
