import React from "react";
import rrec from "../images/rrec.png";

function Recentbox({ name, code }) {
  return (
    <div className="recentbox">
      <div className="recentup">
        <img src={rrec} alt="rrec" id="rrec" />
      </div>
      <div className="recentdown">
        <div className="recentsubname">{name}</div>
        <div className="recentsubcode">{code}</div>
      </div>
    </div>
  );
}

export default Recentbox;
