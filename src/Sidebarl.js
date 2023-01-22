import "./Sidebarl.css";
import React from "react";
import logo from "./logo.png";
import dul from "./images/dul.jpg";

function Sidebarl() {
  return (
    <div className="sidebarl">
      <div class="c1">
        <div class="c5">
          <img src={logo} alt="Logo" id="logo" />
        </div>
        <div>aa</div>
      </div>
      <div class="c7">
        <div className="imgg">
          <img src={dul} alt="Dul" id="dul" />
          <div id="gdot">.</div>
          <div className="dult">Dulaj Perera</div>
          <div className="dult">dulajp@sltc.ac.lk</div>
        </div>
        <div className="dash">
          <ul id="dashlist">
            <li>
              Dashboard <div id="selected"></div>
            </li>
            <li>My Profile</li>
            <li>Messages</li>
            <li>Mail</li>
            <li>Attendence</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebarl;
