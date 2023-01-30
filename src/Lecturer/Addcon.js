import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import docs from "../images/Docs.png";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import db from "../firebase";

function Addcon({ id, name, date, time, cid, iid }) {
  const deleteRow = () => {
    db.collection("courses")
      .doc(cid)
      .collection("content")
      .doc(iid)
      .collection("section")
      .doc(id)
      .delete();
  };
  return (
    <div className="Addcon1">
      <div className="Addcon11">
        <img src={docs} alt="docs" className="Addcon111" />
        {name}
      </div>
      <div className="Addcon12">
        {time} | {date}
      </div>
      <div className="Addcon13">
        <span id="addicn0">
          upload
          <span id="addicn">
            <FileUploadIcon fontSize="inherit" />
          </span>
        </span>
        <span
          id="addicn2"
          onClick={() => {
            deleteRow();
          }}
        >
          <DeleteForeverOutlinedIcon fontSize="inherit" />
        </span>
      </div>
    </div>
  );
}

export default Addcon;
