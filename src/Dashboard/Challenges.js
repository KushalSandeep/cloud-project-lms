import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import chalb from "../images/chalb.png";
import tshirt from "../images/tshirt.png";
import coin from "../images/coin.png";

function Challenges() {
  return (
    <div>
      <div className="lvl1">
        <div className="lvl1txt">Challenges</div>
        <div className="lvl1cont">
          <div className="iconset">
            <NotificationsOutlinedIcon fontSize="inherit" />
            <SettingsOutlinedIcon fontSize="inherit" />
            <CalendarMonthOutlinedIcon fontSize="inherit" />
          </div>
          <span className="lvl1ssc">
            <SearchOutlinedIcon fontSize="inherit" />
            <input placeholder="search" />
          </span>
        </div>
      </div>
      <div className="lvl2">
        <div className="chalbar1">
          <div className="chalbar">
            <div className="chalbart1">SIGN UP AND GET</div>
            <div className="chalbart2">100% WELCOME BONUS</div>
          </div>
          <img src={chalb} alt="chalb" id="chalb" />
        </div>
        <div className="chalbar2">
          <div className="chalbar21">
            School of IT <br />& Computing
          </div>
          <div className="chalbar21">School of Engineering</div>
          <div className="chalbar21">School of Technology</div>
          <div className="chalbar21">
            School of <br /> Music
          </div>
          <div className="chalbar21">School of Business</div>
          <div className="chalbar21">
            School of <br />
            Science
          </div>
        </div>
        <div className="chalbar3">
          <div className="chalbar31">
            <img src={tshirt} alt="tshirt" id="tshirt" />;
          </div>
          <div className="chalbar32">
            <div className="chalbar321">
              <div className="chalbar3211">
                <div className="chalbar32111">YOUR TOTAL ERANED COINS</div>
                <div className="chalbar32112"> 45</div>
              </div>
            </div>
            <div className="chalbar322">
              <img src={coin} alt="coin" id="coin" />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
