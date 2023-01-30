import React from "react";
import docs from "../images/Docs.png";
import DownloadIcon from "@mui/icons-material/Download";

function Addcon({ id, name, date, time }) {
  return (
    <div className="Addcon1">
      <div className="Addcon11">
        <img src={docs} alt="docs" className="Addcon111" />
        {name}
      </div>
      <div className="Addcon12">
        {date} |{" " + time}
      </div>
      <div className="Addcon13">
        <span id="addicn0">
          Download
          <span id="addicn">
            <DownloadIcon fontSize="inherit" />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Addcon;
