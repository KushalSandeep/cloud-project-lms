import React from "react";

function Dashcard({ title, dimg, info }) {
  return (
    <div>
      <div className="dscard">
        <div className="dashcardlf">
          <div className="dashimgcard">
            <img src={dimg} alt="dimg" id="dimg" />
          </div>
        </div>
        <div className="dashcardrt">
          <div className="dashtitle">{title}</div>
          <div className="dashinfo">{info}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashcard;
