import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Recentbox from "./Recentbox.js";
import banner from "../images/banner.png";
import Dashcard from "./Dashcard.js";
import dimg1 from "../images/dimg1.png";
import dimg2 from "../images/dimg2.png";
import dimg3 from "../images/dimg3.png";
import dimg4 from "../images/dimg4.png";
import dimg5 from "../images/dimg5.png";
import dimg6 from "../images/dimg6.png";
import dimg7 from "../images/dimg7.png";
import dimg8 from "../images/dimg8.png";
import dimg9 from "../images/dimg9.png";

function Dashboard() {
  return (
    <div>
      <div className="lvl1">
        <div className="lvl1txt">Dashboard</div>
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
        <div className="lvl3">
          <div className="lvl3txt">Recently clicked</div>
          <div className="lvl3box">
            <Recentbox name="Cyber terrorism & warfare" code="CCS 355" />
            <Recentbox name="Digital Forensics" code="CCS 318" />
            <Recentbox name="Cloud App Development" code="CCS 330" />
          </div>
        </div>
        <div className="lvl4">
          <img src={banner} alt="banner" id="banner" />
        </div>
        <div className="lvl5">
          <Dashcard
            title="courses"
            dimg={dimg1}
            info={
              <>
                Course Modules
                <br />
                Lecture Materials
                <br />
                Lecture Recordings
              </>
            }
          />
          <Dashcard
            title="Documents"
            dimg={dimg2}
            info={
              <>
                Organize notes
                <br />
                Create / Edit docs
                <br />
                Create / Edit sheets
              </>
            }
          />
          <Dashcard
            title="Library"
            dimg={dimg3}
            info={
              <>
                Past papers
                <br />
                Model papers
                <br />
                Online books
                <br />
                Research papers
              </>
            }
          />
          <Dashcard
            title="Meetings"
            dimg={dimg4}
            info={
              <>
                Create meetings
                <br />
                Join meeting
                <br />
                Schedule meeting
              </>
            }
          />
          <Dashcard
            title="Payments"
            dimg={dimg5}
            info={
              <>
                Semester payments
                <br />
                Repeat payments
              </>
            }
          />
          <Dashcard
            title="Clubs"
            dimg={dimg6}
            info={
              <>
                Club activities
                <br />
                Announcements
              </>
            }
          />
          <Dashcard
            title="Forums"
            dimg={dimg7}
            info={
              <>
                Social platform
                <br />
                Knowledge sharing
              </>
            }
          />
          <Dashcard
            title="Challenges"
            dimg={dimg8}
            info={
              <>
                Quizes
                <br />
                Activities
                <br />
                Games
              </>
            }
          />
          <Dashcard
            title="Exams"
            dimg={dimg9}
            info={
              <>
                Semester results
                <br />
                Module results
              </>
            }
          />
          <Dashcard title="courses" />
          <Dashcard title="courses" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
