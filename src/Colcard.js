import React from "react";

function Colcard({ title, top1, top2 }) {
  return (
    <div>
      <div className="colcm">
        <div className="colcm1">
          <div id="colcm2">{title}</div>
          <div id="colcm3"></div>
          <div id="colcm4">
            <div id="colcm5">{top1}</div>
            <div id="colcm6">{top2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colcard;
