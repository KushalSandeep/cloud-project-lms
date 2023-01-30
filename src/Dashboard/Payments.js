import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import payrec from "../images/payrec.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Payments() {
  const [selects, setSelects] = React.useState("");

  const handleChange = (event) => {
    setSelects(event.target.value);
  };
  return (
    <div>
      <div className="lvl1">
        <div className="lvl1txt">Payments</div>
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
        <div className="meetbx1">
          <div className="meetbx11">
            <img src={payrec} alt="payrec" id="payrec" />
            <div className="meetbx111">Get started today and pay here</div>
          </div>
          <div className="paybx12">
            <FormControl fullWidth fontSize="inherit">
              <InputLabel>Select</InputLabel>
              <Select value={selects} label="Category" onChange={handleChange}>
                <MenuItem value={10}>Semester Payment</MenuItem>
                <MenuItem value={20}>Repeat Payment</MenuItem>
                <MenuItem value={30}>Hostel payment</MenuItem>
                <MenuItem value={40}>other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
