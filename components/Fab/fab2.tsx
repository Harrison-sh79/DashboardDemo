import React from "react";
import "./fab2.css"

function Fab2() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="floating-container">
        <div className="floating-button">+</div>
        <div className="element-container">
          <a href="google.com">
            {" "}
            <span className="float-element tooltip-left">
              <i className="material-icons">phone</i>
            </span>
          </a>
          <span className="float-element">
            <i className="material-icons">email</i>
          </span>
          <span className="float-element">
            <i className="material-icons">chat</i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Fab2;
