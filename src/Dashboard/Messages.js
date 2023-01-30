import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import SendIcon from "@mui/icons-material/Send";

function Messages() {
  return (
    <div>
      <div className="lvl1">
        <div className="lvl1txt">Messages</div>
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
        <div className="messbx1">
          <div className="messbx11">
            <input placeholder="Search" />
            <SearchOutlinedIcon fontSize="inherit" id="inph" />
          </div>
        </div>
        <div className="messbx2">
          <div className="messbx21">
            <div className="messbx211"></div>
            <div className="messbx211"></div>
            <div className="messbx211"></div>
            <div className="messbx211"></div>
            <div className="messbx211"></div>
            <div className="messbx211"></div>
            <div className="messbx211"></div>
            <div className="messbx211"></div>
            <div className="messbx211"></div>
          </div>
          <div className="messbx22"></div>
          <div className="messbx3">
            <input placeholder="Search" />
            <span className="messbx31">
              <AttachFileIcon fontSize="inherit" className="messbx311" />
              <CameraEnhanceIcon fontSize="inherit" className="messbx312" />
            </span>
          </div>
          <div className="messbx4">
            <SendIcon fontSize="inherit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
