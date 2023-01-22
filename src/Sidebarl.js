import "./Sidebarl.css";
import React from "react";
import logo from "./logo.png";
import dul from "./images/dul.jpg";
import imgrbc from "./images/imgrbc.png";
import DashboardIcon from "@mui/icons-material/Dashboard";

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
        <div class="conrc">
          <div className="imgg">
            <img src={dul} alt="Dul" id="dul" />
            <div id="gdot">.</div>
            <div className="dult">Dulaj Perera</div>

            <div className="dult">dulajp@sltc.ac.lk</div>
          </div>
          <div className="dash">
            <ul id="dashlist">
              <li>
                <div className="dtt">
                  <span className="ddt">
                    <DashboardIcon fontSize="inherit" />
                  </span>
                  <span className="dt">Dashboard</span>
                </div>
                <div id="selected"></div>
              </li>
              <li>
                <div className="dtt">
                  <span className="ddt">
                    <DashboardIcon fontSize="inherit" />
                  </span>
                  <span className="dt">My Profile</span>
                </div>
              </li>
              <li>
                <div className="dtt">
                  <span className="ddt">
                    <DashboardIcon fontSize="inherit" />
                  </span>
                  <span className="dt">Messages</span>
                </div>
              </li>
              <li>
                <div className="dtt">
                  <span className="ddt">
                    <DashboardIcon fontSize="inherit" />
                  </span>
                  <span className="dt">Mail</span>
                </div>
              </li>
              <li>
                <div className="dtt">
                  <span className="ddt">
                    <DashboardIcon fontSize="inherit" />
                  </span>
                  <span className="dt">Attendence</span>
                </div>
              </li>
              <li>
                <div className="dtt">
                  <span className="ddt">
                    <DashboardIcon fontSize="inherit" />
                  </span>
                  <span className="dt">Settings</span>
                </div>
              </li>
              <li>
                <div className="dtt">
                  <span className="ddt">
                    <DashboardIcon fontSize="inherit" />
                  </span>
                  <span className="dt">Log out</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <img src={imgrbc} alt="imgrbc" id="imgrbc" />
      </div>
    </div>
  );
}

export default Sidebarl;
