import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Courseconcard from "./Courseconcard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import srec from "../images/srec.png";

function Coursecon() {
  const [contents, setContents] = useState([]);
  const [name, setName] = useState([]);
  const [tab, setTab] = useState([]);
  const { courseId } = useParams();

  useEffect(() => {
    db.collection("courses")
      .doc(courseId)
      .onSnapshot((doc) => {
        const data = doc.data();
        setName(data.name);
        setTab(data.tab);
      });
    db.collection("courses")
      .doc(courseId)
      .collection("content")
      .orderBy("id")
      .onSnapshot((snapshot) =>
        setContents(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, [courseId]);

  const createRow = () => {
    const rowName = prompt("Enter name for section", "week ");
    console.log(rowName);
    if (rowName) {
      const iid = tab + 1;
      db.collection("courses").doc(courseId).update({ tab: iid });

      db.collection("courses").doc(courseId).collection("content").add({
        id: tab,
        name: rowName,
      });
    }
  };

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
        <div id="cscon2">
          <img src={srec} alt="srec" id="srec" />
          <span id="cscon21">{courseId} </span> - {name}
        </div>
        <div id="csbtn" onClick={() => createRow()}>
          Add New
        </div>
        {contents.map((content) => (
          <Courseconcard
            name={content.data.name}
            iid={content.id}
            cid={courseId}
          />
        ))}
      </div>
    </div>
  );
}

export default Coursecon;
