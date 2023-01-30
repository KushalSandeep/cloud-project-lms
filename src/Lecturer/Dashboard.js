import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import banner from "../images/banner.png";
import Dashcard from "./Dashcard.js";
import dimg1 from "../images/dimg1.png";
import dimg2 from "../images/dimg2.png";
import dimg3 from "../images/dimg3.png";
import dimg4 from "../images/dimg4.png";
import dimg6 from "../images/dimg6.png";
import dimg7 from "../images/dimg7.png";
import dimg8 from "../images/dimg8.png";
import dimg9 from "../images/dimg9.png";
import { Link } from "react-router-dom";

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
        <div className="lvl4">
          <img src={banner} alt="banner" id="banner" />
        </div>
        <div className="lvl5">
          <Link
            to="/courses"
            style={{ textDecoration: "none", color: "#848383" }}
          >
            <Dashcard
              title="add courses"
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
          </Link>
          <Link
            to="/documents"
            style={{ textDecoration: "none", color: "#848383" }}
          >
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
          </Link>
          <Link
            to="/library"
            style={{ textDecoration: "none", color: "#848383" }}
          >
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
          </Link>
          <Link
            to="/meetings"
            style={{ textDecoration: "none", color: "#848383" }}
          >
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
          </Link>

          <Link to="/club" style={{ textDecoration: "none", color: "#848383" }}>
            <Dashcard
              title="Clubs review"
              dimg={dimg6}
              info={
                <>
                  Club activities
                  <br />
                  Announcements
                </>
              }
            />
          </Link>
          <Link
            to="/forums"
            style={{ textDecoration: "none", color: "#848383" }}
          >
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
          </Link>
          <Link
            to="/challenges"
            style={{ textDecoration: "none", color: "#848383" }}
          >
            <Dashcard
              title="add Challenges"
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
          </Link>
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
