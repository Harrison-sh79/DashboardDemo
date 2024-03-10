"use client";
import React from "react";
import "./fab12.css";
import "./fab12.jsx";

import dynamic from "next/dynamic";

dynamic(() => import("./fab12.jsx"), {
  ssr: false,
});

function Fab12() {
  return (
    <div>
      <div className="floatingButtonWrap">
        <div className="floatingButtonInner">
          <a href="#" className="floatingButton">
            <i className="fa fa-plus icon-default"></i>
          </a>
          <ul className="floatingMenu">
            <li>
              <a href="#">Add Supplier</a>
            </li>
            <li>
              <a href="#">Add Table</a>
            </li>
            <li>
              <a href="#">Add Food</a>
            </li>
            <li>
              <a href="#">Add Menu Type</a>
            </li>
            <li>
              <a href="#">Add Menu</a>
            </li>
            <li>
              <a href="https://google.com" target="_blank">
                Go To Google
              </a>
            </li>
            <li>
              <a href="#">Add Inventory</a>
            </li>
            <li>
              <a href="#">Add Staff</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Fab12;
