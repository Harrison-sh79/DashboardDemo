"use client";
import React from "react";
import "./fab5.scss";
import "./fab5.jsx";

import dynamic from "next/dynamic";

dynamic(() => import("./fab5.jsx"), {
  ssr: false,
});

function Fab5() {
  return (
    <div>
      <a
        href="https://www.behance.net/gallery/41326611/Interaction-Design-After-Effects"
        target="_blank"
        className="link"
      >
        Idea of Floating Action Button Interaction
      </a>
      <div className="faoptions">
        <nav>
          <a href="#">
            <div className="icono-facebook">11</div>
          </a>
          <a href="#">
            <div className="icono-instagram">22</div>
          </a>
          <a href="#">
            <div className="icono-crop">33</div>
          </a>
          <a href="#">
            <div className="icono-camera">44</div>
          </a>
        </nav>
        <button type="button" className="outer-button">
          <span className="lines"></span>
        </button>
      </div>
    </div>
  );
}

export default Fab5;
