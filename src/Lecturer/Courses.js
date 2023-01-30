import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Coursecard from "./Coursecard";
import db from "../firebase";
import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    db.collection("courses").onSnapshot((snapshot) =>
      setCourses(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

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
        {courses.map((course) => (
          <Coursecard
            title={course.id}
            title2={course.data.name}
            des={course.data.des}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
