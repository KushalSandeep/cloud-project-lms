import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import meetrec from "../images/meetrec.png";
import meetl from "../images/dul.jpg";

function Meetings() {
  return (
    <div>
      <div className="lvl1">
        <div className="lvl1txt">Meetings</div>
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
        <div className="meetbx1">
          <div className="meetbx11">
            <img src={meetrec} alt="meetrec" id="meetrec" />
            <div className="meetbx111">
              “You have a meeting to make a decision,
              <br /> not to decide on the question”
            </div>
          </div>
          <div className="meetbx12">New meeting +</div>
        </div>
        <div className="meetbx2">Upcoming</div>
        <div className="meetbx3">
          <div className="meetbx30">
            <div className="meetbx31"></div>
            <div className="meetbx32">Today</div>
            <div className="meetbx33">
              <img src={meetl} alt="meetl" id="meetl" />
              Prabath Ekenayke <br /> prabathe@sltc.ac.lk
            </div>
            <div className="meetbx34">
              1.30 P.M <br /> 1 hour
            </div>
          </div>
          <div className="meetbx35">Attend</div>
        </div>

        <div className="meetbx3">
          <div className="meetbx30">
            <div className="meetbx31"></div>
            <div className="meetbx32">Today</div>
            <div className="meetbx33">
              <img src={meetl} alt="meetl" id="meetl" />
              Prabath Ekenayke <br /> prabathe@sltc.ac.lk
            </div>
            <div className="meetbx34">
              9.30 A.M <br /> 45 minutes
            </div>
          </div>
          <div className="meetbx35">Attend</div>
        </div>

        <div className="meetbx2">Missed</div>

        <div className="meetbx4">
          <div className="meetbx40">
            <div className="meetbx41"></div>
            <div className="meetbx32">Today</div>
            <div className="meetbx33">
              <img src={meetl} alt="meetl" id="meetl" />
              Prabath Ekenayke <br /> prabathe@sltc.ac.lk
            </div>
            <div className="meetbx34">
              9.30 A.M <br /> 45 minutes
            </div>
          </div>
          <div className="meetbx45">Attend</div>
        </div>
      </div>
    </div>
  );
}

export default Meetings;
