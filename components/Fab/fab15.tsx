"use client";
import React from "react";
import "./fab15.scss";
// import "./fab15.jsx";

function Fab15() {
  return (
    <div>
      <div className="container">
        <input type="checkbox" id="toggle" defaultValue="false" hidden/>
        <label className="button" htmlFor="toggle"></label>
        <nav className="nav w-full">
          <ul>
            <a href="http://sashatran.com" target="_blank">
              About
            </a>
            <a href="https://codepen.io/sashatran/pens/public/" target="_blank">
              Home
            </a>
            <a
              href="https://www.linkedin.com/in/sasha-tran-23498989/"
              target="_blank"
            >
              Hire Me
            </a>
            <a
              href="https://www.youtube.com/channel/UCCATAa8MWoBuH-sR_Jlx29A"
              target="_blank"
            >
              Subscribe
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Fab15;
