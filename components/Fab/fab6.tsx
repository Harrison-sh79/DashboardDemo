import React from "react";
import "./fab6.css";
import "./fab6.jsx"

import dynamic from "next/dynamic";

dynamic(() => import("./fab6.jsx"), {
  ssr: false,
});

function Fab6() {
  return (
    <div>
      <div className="share">
        <i className="fa fa-plus">11</i>
      </div>
      <div className="one">
        <i className="fa fa-facebook">22</i>
      </div>
      <div className="two">
        <i className="fa fa-twitter">33</i>
      </div>
      <div className="three">
        <i className="fa fa-instagram">44</i>
      </div>
    </div>
  );
}

export default Fab6;
