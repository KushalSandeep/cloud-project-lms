import "./Header.css";
import React from "react";
import Hbox from "./Hbox";
import logo2 from "./logo2.png";

function Header() {
  return (
    <div className="header">
      <div className="c2">
        <div className="c6">
          <img src={logo2} alt="Logo2" id="logo2" />
          <div id="ww">WELCOME</div>
          <div id="we">SLTC RESEARCH UNIVERSITY LEARNING MANAGEMENT SYSTEM</div>
        </div>
        <div className="cc1">
          <Hbox />
          <Hbox />
          <Hbox />
          <Hbox />
          <Hbox />
          <Hbox />
          <Hbox />
        </div>
      </div>
    </div>
  );
}

export default Header;
