import "./Header.css";
import React from "react";
import Myprofile from "./Dashboard/Myprofile";
import Dashboard from "./Dashboard/Dashboard";
import Mail from "./Dashboard/Mail";
import Messages from "./Dashboard/Messages";
import Settings from "./Dashboard/Settings";
import Attendance from "./Dashboard/Attendance";
import logo2 from "./logo2.png";
import { Route, Routes } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="c2">
        <div className="c6">
          <img src={logo2} alt="Logo2" id="logo2" />
          <div id="ww">WELCOME</div>
          <div id="we">SLTC RESEARCH UNIVERSITY LEARNING MANAGEMENT SYSTEM</div>
        </div>
        <div className="cc1">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/myprofile" element={<Myprofile />}></Route>
            <Route path="/mail" element={<Mail />}></Route>
            <Route path="/attendance" element={<Attendance />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Header;
