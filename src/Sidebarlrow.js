import React from "react";

function Sidebarlrow({ selected, icon, txt }) {
  return (
    <div>
      <li>
        <div className="dtt">
          <span className="ddt">{icon}</span>
          <span className="dt">{txt}</span>
        </div>
        <div className={` ${selected && "selected"}`}></div>
      </li>
    </div>
  );
}

export default Sidebarlrow;
