import React from "react";
import Addcon from "./Addcon";
import { useState, useEffect } from "react";
import db from "../firebase";

function Courseconcard({ name, iid, cid }) {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    db.collection("courses")
      .doc(cid)
      .collection("content")
      .doc(iid)
      .collection("section")
      .onSnapshot((snapshot) =>
        setSections(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, [cid, iid]);
  return (
    <div>
      <div className="cscontainer">
        <div className="cscontainer1">
          <span className="csline"></span> <span id="csname">{name}</span>
          <span className="csline"></span>
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
        <Addcon />
      </div>
    </div>
  );
}

export default Courseconcard;
