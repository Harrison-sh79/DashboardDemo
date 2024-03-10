import React from "react";
import Image from "next/image";
import "./fab3.scss"

function Fab3() {
  return (
    <div>
      <div id="presentation">
        <h1>Floating Button - Google Inbox</h1>
        <h3>Only CSS</h3>
      </div>

      <div id="container-floating">
        <div className="nd4 nds">
          <Image className="reminder"  src="" alt=""/>
          <p className="letter">C</p>
        </div>

        <div className="nd3 nds">
          <Image
            className="reminder"
            src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png"
            alt=""
          />
        </div>

        <div className="nd1 nds">
          <p className="letter">E</p>
        </div>

        <div id="floating-button">
          <p className="plus">+</p>
          <Image
            className="edit"
            src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Fab3;
