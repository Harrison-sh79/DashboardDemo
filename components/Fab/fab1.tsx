"use client"
import React from "react";
import "./fab1.css";
import "./fab1.jsx"
import dynamic from "next/dynamic";

dynamic(() => import("./fab1.jsx"), {
  ssr: false,
});

function Fab1() {
  return (
    <>
      <div className="sticky-menu-container">
        <div className="inner-menu closed">
          <ul className="menu-list">
            <li className="menu-item">
              <span className="item-icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 92 92"
                  enableBackground="new 0 0 92 92"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_1160_"
                    d="M46,27c-12.6,0-22.9,10.4-22.9,23.2c0,12.8,10.3,23.2,22.9,23.2s22.9-10.4,22.9-23.2
	C68.9,37.4,58.6,27,46,27z M46,65.5c-8.2,0-14.9-6.8-14.9-15.2S37.8,35,46,35s14.9,6.8,14.9,15.2S54.2,65.5,46,65.5z M57.1,51.2
	c-0.2,1.8-1.7,3-3.5,3c-0.2,0-0.3,0-0.5,0c-1.9-0.3-3.3-2-3-3.9c0.4-2.9-3-4.5-3.2-4.6c-1.7-0.8-2.5-2.9-1.7-4.6
	c0.8-1.7,2.8-2.5,4.6-1.8C53,40.7,58,44.7,57.1,51.2z M49.4,55.6c0.7,0.7,1.2,1.8,1.2,2.8c0,1-0.4,2.1-1.2,2.8
	c-0.8,0.7-1.8,1.2-2.8,1.2s-2.1-0.4-2.8-1.2c-0.7-0.8-1.2-1.8-1.2-2.8c0-1.1,0.4-2.1,1.2-2.8c0.8-0.8,1.8-1.2,2.8-1.2
	S48.7,54.8,49.4,55.6z M88,26H72.6l-4.3-16c-0.5-1.7-2.1-3-3.9-3H27.5c-1.8,0-3.4,1.3-3.9,3l-4.3,16H4c-2.2,0-4,1.7-4,3.9V81
	c0,2.2,1.8,4,4,4h84c2.2,0,4-1.8,4-4V29.9C92,27.7,90.2,26,88,26z M84,77H8V34h14.4c1.8,0,3.4-1.3,3.9-3l4.3-16h30.8l4.3,16
	c0.5,1.7,2.1,3,3.9,3H84V77z"
                  />
                </svg>
              </span>
              <span className="item-text">photo</span>
            </li>
            <li className="menu-item">
              <span className="item-icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="92px"
                  height="92px"
                  viewBox="0 0 92 92"
                  enableBackground="new 0 0 92 92"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_1960_"
                    d="M76,2H16c-2.2,0-4,1.8-4,4v80c0,2.2,1.8,4,4,4h60c2.2,0,4-1.8,4-4V6C80,3.8,78.2,2,76,2z M72,82H20V10h52
	V82z M28.5,65c0-2.2,1.8-4,4-4h27c2.2,0,4,1.8,4,4s-1.8,4-4,4h-27C30.3,69,28.5,67.2,28.5,65z M29.1,46c0-2.2,1.8-4,4-4h26.3
	c2.2,0,4,1.8,4,4s-1.8,4-4,4H33.1C30.9,50,29.1,48.2,29.1,46z M29.1,27c0-2.2,1.8-4,4-4h26.3c2.2,0,4,1.8,4,4s-1.8,4-4,4H33.1
	C30.9,31,29.1,29.2,29.1,27z"
                  />
                </svg>
              </span>
              <span className="item-text">files</span>
            </li>
            <li className="menu-item">
              <span className="item-icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="92px"
                  height="92px"
                  viewBox="0 0 92 92"
                  enableBackground="new 0 0 92 92"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_57_"
                    d="M68.3,88c0,2.2-1.8,4-4.1,4H27.6c-2.3,0-4.1-1.8-4.1-4s1.8-4,4.1-4h14.8l0-6.8c0-1.9,1.6-3.5,3.6-3.5
	c2,0,3.6,1.6,3.6,3.5l0,6.8h14.7C66.5,84,68.3,85.8,68.3,88z M67.4,29C67.4,29,67.4,29,67.4,29c-2,0-3.6,1.6-3.6,3.5l0,26
	c0,1.5-0.6,2.9-1.6,3.9c-1,1-2.3,1.6-3.7,1.6c0,0,0,0,0,0l-25,0c-1.4,0-2.7-0.6-3.7-1.6c-1-1.1-1.6-2.4-1.6-3.9l0-26
	c0-1.9-1.6-3.5-3.6-3.5c0,0,0,0,0,0c-2,0-3.6,1.6-3.6,3.5l0,26c0,3.3,1.3,6.5,3.6,8.8c2.4,2.4,5.5,3.7,8.9,3.7l25,0c0,0,0,0,0,0
	c3.4,0,6.5-1.3,8.9-3.7c2.3-2.4,3.6-5.5,3.6-8.8l0-26C71,30.6,69.4,29,67.4,29z M35.2,56.3c-1.4-1.7-2.2-3.7-2.2-5.7l0-41.7
	c0-2,0.8-4.1,2.3-5.8C36.9,1.1,39,0,41.1,0c0,0,0,0,0,0h9.7C55.4,0,59,4.8,59,8.8l0,41.6c0,4-3.6,8.6-8.1,8.6c0,0,0,0,0,0l-9.7,0.2
	C39,59.2,36.8,58.2,35.2,56.3z M41.1,50.6c0,0.2,0.3,0.6,0.5,0.8l8.7,0c0.2-0.2,0.5-0.6,0.5-0.9l0-41.7c0-0.2-0.3-0.6-0.5-0.8
	l-8.7,0c-0.2,0.2-0.5,0.7-0.5,0.9L41.1,50.6z"
                  />
                </svg>
              </span>
              <span className="item-text">record</span>
            </li>
            <li className="menu-item">
              <span className="item-icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="92px"
                  height="92px"
                  viewBox="0 0 92 92"
                  enableBackground="new 0 0 92 92"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_1284_"
                    d="M88,6H4c-2.2,0-4,1.8-4,4v51.1C0,63.3,1.8,65,4,65h47v17c0,1.7,1.3,3.2,2.8,3.8c0.5,0.2,1,0.2,1.5,0.2
	c1.2,0,2.3-0.5,3.1-1.4L75,65h13c2.2,0,4-1.7,4-3.9V10C92,7.8,90.2,6,88,6z M84,57H73.2c-1.2,0-2.5,0.6-3.3,1.4L59,71.1v-10
	c0-2.2-1.4-4.1-3.6-4.1H8V14h76V57z M18.6,28c0-2.2,1.8-4,4-4h29c2.2,0,4,1.8,4,4s-1.8,4-4,4h-29C20.4,32,18.6,30.2,18.6,28z
	 M62.5,31.1c-0.7-0.7-1.2-1.8-1.2-2.8c0-1.1,0.4-2.1,1.2-2.8c0.8-0.8,1.8-1.2,2.8-1.2c1.1,0,2.1,0.4,2.8,1.2
	c0.7,0.7,1.2,1.8,1.2,2.8c0,1.1-0.4,2.1-1.2,2.8c-0.8,0.8-1.8,1.2-2.8,1.2C64.3,32.2,63.3,31.8,62.5,31.1z"
                  />
                </svg>
              </span>
              <span className="item-text">new email</span>
            </li>
          </ul>
        </div>
        <div className="outer-button">
          <div className="icon-container">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 92 92"
              enableBackground="new 0 0 92 92"
              xmlSpace="preserve"
              className="close-icon"
            >
              <path
                id="XMLID_732_"
                d="M70.7,64.3c1.8,1.8,1.8,4.6,0,6.4c-0.9,0.9-2,1.3-3.2,1.3c-1.2,0-2.3-0.4-3.2-1.3L46,52.4L27.7,70.7
	c-0.9,0.9-2,1.3-3.2,1.3s-2.3-0.4-3.2-1.3c-1.8-1.8-1.8-4.6,0-6.4L39.6,46L21.3,27.7c-1.8-1.8-1.8-4.6,0-6.4c1.8-1.8,4.6-1.8,6.4,0
	L46,39.6l18.3-18.3c1.8-1.8,4.6-1.8,6.4,0c1.8,1.8,1.8,4.6,0,6.4L52.4,46L70.7,64.3z"
              />
            </svg>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 92 92"
              enableBackground="new 0 0 92 92"
              xmlSpace="preserve"
              className="arrow-icon"
            >
              <path
                id="XMLID_507_"
                d="M49.9,88c-0.2,0-0.4,0-0.6-0.1c-1.8-0.3-3.2-1.7-3.3-3.5l-3.5-34.8L7.6,46.1c-1.8-0.2-3.3-1.6-3.5-3.3
	c-0.3-1.8,0.7-3.5,2.3-4.3l76-34.1c1.5-0.7,3.3-0.4,4.5,0.8c1.2,1.2,1.5,3,0.8,4.5l-34.1,76C52.9,87.1,51.4,88,49.9,88z M23.3,39.7
	L46.4,42c1.9,0.2,3.4,1.7,3.6,3.6l2.4,23.1L76,16L23.3,39.7z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fab1;