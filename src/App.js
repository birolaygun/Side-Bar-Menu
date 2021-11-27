import "./App.css";
import mercedes from "./galery/mercedes.gif";
import { menu } from "./data.js";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="logo">
          <Link to="/">
            <img src={mercedes} alt="mercedes" />
          </Link>
        </div>
        <div className="menu">

          <div className="main">
            <Menu clss="main" />
          </div>

          <h1>CUSTOM</h1>
          <Menu clss="custom" />

          <h1>LAYOUT</h1>
          <Menu clss="layout" />

          <h1>CRUD</h1>
          <Menu clss="crud" />

          <h1>FEATURES</h1>
          <Menu clss="features" />

        </div>
      </div>
    </div>
  );
}

export default App;
