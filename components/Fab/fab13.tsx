import React from "react";
import "./fab13.scss";
import "./fab13.jsx";

function Fab13() {
  return (
    <div>
      <div className="inner-fabs">
        <div className="fab round" id="fab4" data-tooltip="Create">
          <i className="material-icons">create</i>
        </div>
        <div className="fab round" id="fab3" data-tooltip="Move to inbox">
          <i className="material-icons">move_to_inbox</i>
        </div>
        <div className="fab round" id="fab2" data-tooltip="Send">
          <i className="material-icons">send</i>
        </div>
      </div>
      <div className="fab round" id="fab1">
        <i className="material-icons" id="fabIcon">
          add
        </i>
      </div>
    </div>
  );
}

export default Fab13;
