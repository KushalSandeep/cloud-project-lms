import "./Sidebarr.css";
import React from "react";
import card1 from "./images/add1.png";
import card2 from "./images/add2.png";
import card3 from "./images/add3.png";
import Colcard from "./Colcard";

function Sidebarr() {
  return (
    <div>
      <div className="c3">
        <div className="c8">
          <div className="marquee">
            <div className="b1">
              <img src={card1} alt="card1" id="card1" />
            </div>
            <div className="b1">
              <img src={card2} alt="card2" id="card2" />
            </div>
            <div className="b1">
              <img src={card3} alt="card3" id="card3" />
            </div>
          </div>
        </div>
        <div className="c9">
          <Colcard
            title="Cloud application development"
            top1="New lecture"
            top2="Updated"
          />
          <Colcard
            title="Cyber terrorism & warfare"
            top1={
              <div>
                tomorrow <br />
                9.00 A.M
              </div>
            }
            top2="Quiz 01"
          />
          <Colcard
            title="Cyber terrorism & warfare"
            top1="Lecture today"
            top2="8.30 A.M"
          />
          <Colcard
            title="Cloud application development"
            top1={
              <div>
                Assignment 01 <br />
                Today
              </div>
            }
            top2="2.00 P.M"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebarr;
