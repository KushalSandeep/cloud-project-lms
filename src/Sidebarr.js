import "./Sidebarr.css";
import React from "react";
import card1 from "./images/add1.png";
import card2 from "./images/add2.png";
import card3 from "./images/add3.png";

function Sidebarr() {
  return (
    <div>
      <div class="c3">
        <div class="c8">
          <div class="marquee">
            <div class="b1">
              <img src={card1} alt="card1" id="card1" />
            </div>
            <div class="b1">
              <img src={card2} alt="card2" id="card2" />
            </div>
            <div class="b1">
              <img src={card3} alt="card3" id="card3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebarr;
