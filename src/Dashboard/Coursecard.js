import React from "react";
import crec from "../images/crec.png";

function Coursecard({ title, des }) {
  return (
    <div>
      <div className="coursecard">
        <div id="cc1">
          <img src={crec} alt="crec" id="crec" />
        </div>
        <div id="cc2">
          <div id="cc21">
            <div id="cc211">{title}</div>
            <div id="cc212">{des}</div>
          </div>
        </div>
        <div id="cc3">
          <div id="cc31">View course</div>
        </div>
      </div>
    </div>
  );
}

export default Coursecard;
