import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import Addcon from "./Addcon";
import { useState, useEffect } from "react";
import db from "../firebase";

function Courseconcard({ name, iid, cid }) {
  const [conid, setConid] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    db.collection("courses")
      .doc(cid)
      .collection("content")
      .doc(iid)
      .onSnapshot((doc) => {
        const data = doc.data();
        setConid(data.tab);
      });
  });

  useEffect(() => {
    db.collection("courses")
      .doc(cid)
      .collection("content")
      .doc(iid)
      .collection("section")
      .orderBy("id")
      .onSnapshot((snapshot) =>
        setSections(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, [cid, iid]);

  const deleteRow = () => {
    db.collection("courses").doc(cid).collection("content").doc(iid).delete();
  };

  const updateRow = () => {
    const rowName = prompt("Enter new name:", "week ");
    if (rowName) {
      db.collection("courses")
        .doc(cid)
        .collection("content")
        .doc(iid)
        .update({ name: rowName });
    }
  };

  const createRow = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let min = newDate.getMinutes();
    let x = "";
    let y = "";
    if (hour >= 12) {
      x = "P.M";
    } else {
      x = "A.M";
    }
    if (min < 10) {
      y = "0" + min;
    } else {
      y = min;
    }
    const idd = conid + 1;
    db.collection("courses")
      .doc(cid)
      .collection("content")
      .doc(iid)
      .update({ tab: idd });

    db.collection("courses")
      .doc(cid)
      .collection("content")
      .doc(iid)
      .collection("section")
      .add({
        id: conid,
        name: "defaut name",
        date: date + "." + month + "." + year,
        time: hour + "." + y + " " + x,
      });
  };

  return (
    <div>
      <div className="cscontainer">
        <div className="cscontainer0">
          <div className="cscontainer1">
            <span className="csline2"></span> <span id="csname">{name}</span>
            <span className="csline2"></span>
          </div>
          <div className="csscbtncon">
            <div
              className="csscbtn"
              onClick={() => {
                deleteRow();
              }}
            >
              <DeleteForeverOutlinedIcon fontSize="inherit" />
            </div>
            <div
              className="csscbtn"
              onClick={() => {
                updateRow();
              }}
            >
              <ModeEditIcon fontSize="inherit" />
            </div>
            <div
              className="csscbtn"
              onClick={() => {
                createRow();
              }}
            >
              <AddIcon fontSize="inherit" />
            </div>
          </div>
        </div>
        {sections.map((section) => (
          <Addcon
            id={section.id}
            name={section.data.name}
            date={section.data.date}
            time={section.data.time}
            cid={cid}
            iid={iid}
          />
        ))}
      </div>
    </div>
  );
}

export default Courseconcard;
