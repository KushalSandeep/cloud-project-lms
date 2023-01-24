import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Coursecard from "./Coursecard";

function Courses() {
  return (
    <div>
      <div className="lvl1">
        <div className="lvl1txt">Courses</div>
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
        <Coursecard
          title="CCS355-Cyber Terrorism and Information Warfare (3E)"
          des="Fri 9.30 A.M - 11.30 A.M | Tue 9.30 A.M - 11.30 A.M"
        />
        <Coursecard
          title="CCS318-Digital Forensics (3C)"
          des="Mon 4.00 P.M - 5.30 P.M"
        />
        <Coursecard
          title="CCS317-Advanced Cryptography (3C)"
          des="Mon 9.30 A.M - 11.30 P.M"
        />
        <Coursecard
          title="CCS354-Tensors and Graphs (with programming) (3E)"
          des="Mon 11.30 A.M - 12.30 P.M"
        />
        <Coursecard
          title="CCS312-Cloud Application Development (3C/E)"
          des="Wed 12.30 P.M - 1.30 P.M"
        />
        <Coursecard
          title="CCS390-Capstone Project (5C)"
          des="Thu 9.30 A.M - 10.30 A.M"
        />
      </div>
    </div>
  );
}

export default Courses;
