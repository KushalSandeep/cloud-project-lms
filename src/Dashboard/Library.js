import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import b1 from "../images/b1.png";
import b2 from "../images/b2.png";
import b3 from "../images/b3.png";
import b4 from "../images/b4.png";
import b5 from "../images/b5.png";
import b6 from "../images/b6.png";
import banner2 from "../images/banner2.png";
import sticky from "../images/sticky.png";

function Library() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <div className="lvl1">
        <div className="lvl1txt">Library</div>
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
        <div className="lib1">
          <div className="lib11">
            <input placeholder="Type book name or author..." />
            <SearchOutlinedIcon fontSize="inherit" id="inph" />
          </div>
          <div className="lib12">
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={10}>Adventure stories</MenuItem>
                <MenuItem value={20}>Classics</MenuItem>
                <MenuItem value={30}>Crime</MenuItem>
                <MenuItem value={40}>Fairy tales</MenuItem>
                <MenuItem value={50}>fables</MenuItem>
                <MenuItem value={60}>folk tales</MenuItem>
                <MenuItem value={70}>Fantasy</MenuItem>
                <MenuItem value={80}>Historical fiction</MenuItem>
                <MenuItem value={90}>Horror</MenuItem>
                <MenuItem value={100}>Humour and satire</MenuItem>
                <MenuItem value={110}>News</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="lib13">All books</div>
        </div>
        <div className="lib2">
          <div className="lib21">
            <div className="lib211">Recommended</div>
            <div className="lib212">
              <div className="lib2b">
                <img src={b1} alt="b1" className="book" />
                Book name <br />
                Author <br /> Category
              </div>
              <div className="lib2b">
                <img src={b2} alt="b2" className="book" />
                Book name <br />
                Author <br /> Category
              </div>
              <div className="lib2b">
                <img src={b3} alt="b3" className="book" />
                Book name <br />
                Author <br /> Category
              </div>
            </div>
          </div>
          <div className="lib22">
            <div className="lib211">Last Added</div>
            <div className="lib212">
              <div className="lib2b">
                <img src={b4} alt="b4" className="book" />
                Insight <br />
                SLTC Media Unit <br /> News
              </div>
              <div className="lib2b">
                <img src={b5} alt="b5" className="book" />
                Book name <br />
                Author <br /> Category
              </div>
              <div className="lib2b">
                <img src={b6} alt="b6" className="book" />
                Book name <br />
                Author <br /> Category
              </div>
            </div>
          </div>
        </div>
        <a href="https://digilib.sltc.ac.lk/login">
          <div className="lib3">
            <img src={banner2} alt="banner2" className="banner2" />
          </div>
        </a>
        <div className="lib4">
          <div className="lib41">
            <div className="lib411">
              <div id="lib4111">My Library</div>
              <div id="lib4112">More..</div>
            </div>
          </div>
          <div className="lib42">
            <div className="lib421">
              <div className="lib4211">
                <div className="libextra">
                  <img src={b1} alt="b1" className="book2" />
                  <div className="lib42111">
                    <div id="libnm">Book name</div>
                    <div id="libnm2">
                      Author name <br />
                      Category
                    </div>
                  </div>
                  <div className="lib42112">4.5</div>
                </div>
              </div>
              <div className="lib4211">
                <div className="libextra">
                  <img src={b1} alt="b1" className="book2" />
                  <div className="lib42111">
                    <div id="libnm">Book name</div>
                    <div id="libnm2">
                      Author name <br />
                      Category
                    </div>
                  </div>
                  <div className="lib42112">4.5</div>
                </div>
              </div>
              <div className="lib4211">
                <div className="libextra">
                  <img src={b1} alt="b1" className="book2" />
                  <div className="lib42111">
                    <div id="libnm">Book name</div>
                    <div id="libnm2">
                      Author name <br />
                      Category
                    </div>
                  </div>
                  <div className="lib42112">4.5</div>
                </div>
              </div>
              <div className="lib4211">
                <div id="libnm">Add Books +</div>
              </div>
            </div>
            <div className="lib422">
              <div className="lib4221">
                <div className="libst">
                  <img src={sticky} alt="sticky" className="sticky" />
                  12 Past <br />
                  papers available
                </div>
              </div>
              <div className="lib4221">
                <div className="libst">
                  <img src={sticky} alt="sticky" className="sticky" />
                  02 Model <br /> papers available
                </div>
              </div>
              <div className="lib4221">
                <div className="libst">
                  <img src={sticky} alt="sticky" className="sticky" />
                  No Research <br />
                  papers available <br />
                  at the momemnt
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
