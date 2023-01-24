//import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Sidebarl from "./Sidebarl";
import Sidebarr from "./Sidebarr";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/dashboard" element={<Sidebarl />}></Route>
          <Route path="/myprofile" element={<Sidebarl />}></Route>
          <Route path="/mail" element={<Sidebarl />}></Route>
          <Route path="/attendance" element={<Sidebarl />}></Route>
          <Route path="/settings" element={<Sidebarl />}></Route>
          <Route path="/messages" element={<Sidebarl />}></Route>
          <Route path="*" element={<Sidebarl />}></Route>
        </Routes>
        <Header />
        <Sidebarr />
      </div>
    </BrowserRouter>
  );
}

export default App;
