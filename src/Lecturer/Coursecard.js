import React from "react";
import crec from "../images/crec.png";
import { Link } from "react-router-dom";

function Coursecard({ title, title2, des }) {
  return (
    <div>
      <div className="coursecard">
        <div id="cc1">
          <img src={crec} alt="crec" id="crec" />
        </div>
        <div id="cc2">
          <div id="cc21">
            <div id="cc211">
              <span id="suddd">{title}</span> -{title2}
            </div>
            <div id="cc212">{des}</div>
          </div>
        </div>

        <div id="cc3">
          <Link
            to={"/courses/" + title}
            style={{ textDecoration: "none", color: "#848383" }}
            id="cc31"
          >
            <div id="cc311">View course</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Coursecard;
