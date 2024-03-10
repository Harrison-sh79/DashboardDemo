import React from "react";
import "./fab7.scss";
import "./lib/all.min.css"

function Fab7() {
  return (
    <div>
      <div className="wrapper">
        <input type="checkbox" />
        <div className="fab"></div>
        <div className="fac">
          <a href="#">
            <i className="fas fa-suitcase"></i>
          </a>
          <a href="#">
            <i className="far fa-file-alt"></i>
          </a>
          <a href="#">
            <i className="fas fa-wallet"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fab7;
