import React from "react";
import "./fab10.scss"
import MailNewModal from "../email/mail-new-modal";
// import "./lib/bootstrap.min.css"

function Fab10() {
  return (
    <div>
      <div className="fab-container">
        <div className="fab shadow">
          <div className="fab-content">
            <span className="material-icons">support_agent</span>
          </div>
        </div>
        <div className="sub-button shadow">
          <a href="v-max.ca" target="_blank">
            <span className="material-icons">phone</span>
          </a>
        </div>
        <div className="sub-button shadow">
          {/* <a href="google.com" target="_blank">
            <span className="material-icons">mail_outline</span>
          </a> */}
          <MailNewModal />
        </div>
        <div className="sub-button shadow">
          <a href="google.com" target="_blank">
            <span className="material-icons">language</span>
          </a>
        </div>
        <div className="sub-button shadow">
          <a href="google.com" target="_blank">
            <span className="material-icons">help_outline</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fab10;
