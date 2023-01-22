//import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Sidebarl from "./Sidebarl";
import Sidebarr from "./Sidebarr";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebarl />
        <Header />
        <Sidebarr />
      </div>
    </BrowserRouter>
  );
}

export default App;
