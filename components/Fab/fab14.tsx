import React from "react";
import "./fab14.css"
import "./lib/all.min.css"

function Fab14() {
  return (
    <div>
      <div className="fab-wrapper">
        <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
        <label className="fab" htmlFor="fabCheckbox">
          <span className="fab-dots fab-dots-1"></span>
          <span className="fab-dots fab-dots-2"></span>
          <span className="fab-dots fab-dots-3"></span>
        </label>
        <div className="fab-wheel">
          <a className="fab-action fab-action-1">
            <i className="fas fa-question"></i>
          </a>
          <a className="fab-action fab-action-2">
            <i className="fas fa-book"></i>
          </a>
          <a className="fab-action fab-action-3">
            <i className="fas fa-address-book"></i>
          </a>
          <a className="fab-action fab-action-4">
            <i className="fas fa-info"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fab14;
