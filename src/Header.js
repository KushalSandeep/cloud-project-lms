import "./Header.css";
import React from "react";
import Myprofile from "./Dashboard/Myprofile";
import Dashboard from "./Dashboard/Dashboard";
import Mail from "./Dashboard/Mail";
import Messages from "./Dashboard/Messages";
import Settings from "./Dashboard/Settings";
import Attendance from "./Dashboard/Attendance";
import Courses from "./Dashboard/Courses";
import Coursecon from "./Dashboard/Coursecon";
import Challenges from "./Dashboard/Challenges";
import Clubs from "./Dashboard/Clubs";
import Documents from "./Dashboard/Documents";
import Forums from "./Dashboard/Forums";
import Library from "./Dashboard/Library";
import Meetings from "./Dashboard/Meetings";
import Payments from "./Dashboard/Payments";
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
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/courses/:courseId" element={<Coursecon />}></Route>
            <Route path="/challenges" element={<Challenges />}></Route>
            <Route path="/clubs" element={<Clubs />}></Route>
            <Route path="/documents" element={<Documents />}></Route>
            <Route path="/forums" element={<Forums />}></Route>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/meetings" element={<Meetings />}></Route>
            <Route path="/payments" element={<Payments />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Header;
