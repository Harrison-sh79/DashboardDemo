import React from "react";
import "./fab8.scss"

import "./fab8.jsx"

function Fab8() {
  return (
    <div>
<section className="section-wrapper">
  
  <div className="floating-action-button">
    
    <div className="share-btn">
      <ion-icon id="share-icon" name="share-social"></ion-icon>
      <ion-icon id="close-icon" name="close-sharp"></ion-icon>
    </div>
    
    <ul>
      <li>
        <ion-icon name="logo-twitter"></ion-icon>
      </li>
      <li>
        <ion-icon name="logo-facebook"></ion-icon>
      </li>
      <li>
        <ion-icon name="logo-whatsapp"></ion-icon>
      </li>
      <li>
        <ion-icon name="send-sharp"></ion-icon>
      </li>
      <li>
        <ion-icon name="logo-instagram"></ion-icon>
      </li>
    </ul>
    
  </div>
  
</section>

    </div>
  );
}

export default Fab8;
