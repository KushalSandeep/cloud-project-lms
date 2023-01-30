import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import dul from "../images/dul.jpg";

function Myprofile() {
  return (
    <div>
      <div className="lvl1">
        <div className="lvl1txt">My profile</div>
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
        <div className="prof0">
          <div className="prof1">
            <div className="profimgg">
              <img src={dul} alt="profimg" id="profimg" />
            </div>
            <div className="prof11">
              <div id="prof111">Dulaj Perera</div>
              <div id="prof112">dulajp@sltc.ac.lk</div>
            </div>
          </div>
          <div className="prof2">
            <div className="prof21">
              <div className="prof211">
                <div className="prof2111">
                  <div>Name</div>
                  <div>Birth Date</div>
                  <div>NIC</div>
                  <div>Gender</div>
                  <div>Registration Number</div>
                  <div>Personal Mail</div>
                </div>
                <div className="prof2112">
                  <div>B Dulaj Perera</div>
                  <div>2000.10.11</div>
                  <div>200010324</div>
                  <div>Male</div>
                  <div>AA 1809</div>
                  <div>dulajperera67@gmail.com</div>
                </div>
              </div>
              <div className="prof212">
                <div className="prof2111">
                  <div>Degree programme</div>
                  <div>Batch</div>
                </div>
                <div className="prof2112">
                  <div>Bsc(hons) cyber security</div>
                  <div>2024</div>
                </div>
              </div>
            </div>
            <div className="prof22">
              <div className="prof221"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myprofile;
