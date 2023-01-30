import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import clubrec from "../images/clubrec.png";
import medialogo from "../images/medialogo.png";
import aieseclogo from "../images/aieseclogo.png";
import leologo from "../images/leologo.png";
import sedslogo from "../images/sedslogo.png";
import ieeelogo from "../images/ieeelogo.png";
import rotalogo from "../images/rotalogo.png";

function Clubs() {
  return (
    <div>
      <div className="lvl1">
        <div className="lvl1txt">Clubs</div>
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
        <div className="clubbx1">
          <div className="meetbx11">
            <div className="meetbx111">
              “Sometimes you can have the smallest role in the <br /> smallest
              production and still have a big impact”
            </div>
          </div>
          <img src={clubrec} alt="clubrec" className="clubrec" />
        </div>
        <div className="clubbx2">
          <div className="clubbx21">
            <span id="clubbx211">Popular events in this Month</span>
            {/*  */}
            <div className="clubbx212">
              <div className="clubbx2120">
                <div className="clubbx2121">moonland</div>
                <div className="clubbx2122">Coming soon</div>
              </div>
              <img src={medialogo} alt="medialogo" className="clublg1" />
            </div>
            {/*  */}
            <div className="clubbx212">
              <div className="clubbx2120">
                <div className="clubbx2121">DEV stack</div>
                <div className="clubbx2122">Coming soon</div>
              </div>
              <img src={ieeelogo} alt="medialogo" className="clublg1" />
            </div>
            {/*  */}
            <div className="clubbx212">
              <div className="clubbx2120">
                <div className="clubbx2121">diwali celebrations</div>
                <div className="clubbx2122">14th November</div>
              </div>
              <img src={medialogo} alt="medialogo" className="clublg1" />
            </div>
            {/*  */}
            <div className="clubbx212">
              <div className="clubbx2120">
                <div className="clubbx2121">zoo cleaning project</div>
                <div className="clubbx2122">20th November</div>
              </div>
              <img src={rotalogo} alt="medialogo" className="clublg1" />
            </div>
            {/*  */}
            <div className="clubbx212">
              <div className="clubbx2120">
                <div className="clubbx2121">leo day</div>
                <div className="clubbx2122">Coming soon</div>
              </div>
              <img src={leologo} alt="medialogo" className="clublg1" />
            </div>
          </div>
          <div className="clubbx22">
            <span id="clubbx221">Clubs in sltc</span>
            {/*  */}
            <div className="clubbx222">
              <img src={medialogo} alt="medialogo" className="clublg2" />
              <div className="clubbx2221">
                <div className="clubbx22211">Media unit of sltc</div>
                <div className="clubbx22212">50+ members</div>
              </div>
              <div className="clubbx2222">Read more {">"} </div>
            </div>
            {/*  */}
            <div className="clubbx222">
              <img src={leologo} alt="medialogo" className="clublg2" />
              <div className="clubbx2221">
                <div className="clubbx22211">leo club of sltc</div>
                <div className="clubbx22212">75+ members</div>
              </div>
              <div className="clubbx2222">Read more {">"} </div>
            </div>
            {/*  */}
            <div className="clubbx222">
              <img src={ieeelogo} alt="medialogo" className="clublg2" />
              <div className="clubbx2221">
                <div className="clubbx22211">IEEE chapter of sltc</div>
                <div className="clubbx22212">100+ members</div>
              </div>
              <div className="clubbx2222">Read more {">"} </div>
            </div>
            {/*  */}
            <div className="clubbx222">
              <img src={aieseclogo} alt="medialogo" className="clublg2" />
              <div className="clubbx2221">
                <div className="clubbx22211">AIESEC of sltc</div>
                <div className="clubbx22212">50+ members</div>
              </div>
              <div className="clubbx2222">Read more {">"} </div>
            </div>
            {/*  */}
            <div className="clubbx222">
              <img src={sedslogo} alt="medialogo" className="clublg2" />
              <div className="clubbx2221">
                <div className="clubbx22211">Seds of sltc</div>
                <div className="clubbx22212">30+ members</div>
              </div>
              <div className="clubbx2222">Read more {">"} </div>
            </div>
            {/*  */}
            <div className="clubbx222">
              <img src={rotalogo} alt="medialogo" className="clublg2" />
              <div className="clubbx2221">
                <div className="clubbx22211">Rotaract club of sltc</div>
                <div className="clubbx22212">30+ members</div>
              </div>
              <div className="clubbx2222">Read more {">"} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clubs;
