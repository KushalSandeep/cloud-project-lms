import "./Sidebarl.css";
import React from "react";
import logo from "./logo.png";
import imgrbc from "./images/imgrbc.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link } from "react-router-dom";
import Sidebarlrow from "./Sidebarlrow";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./app/userSlice";

function Sidebarl({ dul, nam }) {
  const user = useSelector(selectUser);
  function sada(str) {
    if (window.location.pathname === str) {
      return 1;
    } else {
      return 0;
    }
  }
  return (
    <div className="sidebarl">
      <div className="c1">
        <div className="c5">
          <img src={logo} alt="Logo" id="logo" />
        </div>
      </div>
      <div className="c7">
        <div className="conrc">
          <div className="imgg">
            <img src={dul} alt="Dul" id="dul" />
            <div id="gdot">.</div>
            <div className="dult">{nam}</div>

            <div className="dult">{user.email}</div>
          </div>
          <div className="dash">
            <ul id="dashlist">
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "#848383" }}
              >
                <Sidebarlrow
                  selected={sada("/dashboard")}
                  icon={<DashboardIcon fontSize="inherit" />}
                  txt={"Dashboard"}
                />
              </Link>
              <Link
                to="/myprofile"
                style={{ textDecoration: "none", color: "#848383" }}
              >
                <Sidebarlrow
                  selected={sada("/myprofile")}
                  icon={<PersonOutlineOutlinedIcon fontSize="inherit" />}
                  txt="My Profile"
                />
              </Link>
              <Link
                to="/messages"
                style={{ textDecoration: "none", color: "#848383" }}
              >
                <Sidebarlrow
                  selected={sada("/messages")}
                  icon={<SendOutlinedIcon fontSize="inherit" />}
                  txt="Messages"
                />
              </Link>
              <Link
                to="/mail"
                style={{ textDecoration: "none", color: "#848383" }}
              >
                <Sidebarlrow
                  selected={sada("/mail")}
                  icon={<EmailOutlinedIcon fontSize="inherit" />}
                  txt="Mail"
                />
              </Link>
              <Link
                to="/attendance"
                style={{ textDecoration: "none", color: "#848383" }}
              >
                <Sidebarlrow
                  selected={sada("/attendance")}
                  icon={<TaskAltOutlinedIcon fontSize="inherit" />}
                  txt="Attendence"
                />
              </Link>
              <Link
                to="/settings"
                style={{ textDecoration: "none", color: "#848383" }}
              >
                <Sidebarlrow
                  selected={sada("/settings")}
                  icon={<SettingsOutlinedIcon fontSize="inherit" />}
                  txt="Settings"
                />
              </Link>

              <li>
                <div className="dtt" onClick={() => auth.signOut()}>
                  <span className="ddt">
                    <LoginOutlinedIcon fontSize="inherit" />
                  </span>
                  <span className="dt">Log out</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <img src={imgrbc} alt="imgrbc" id="imgrbc" />
      </div>
    </div>
  );
}

export default Sidebarl;
