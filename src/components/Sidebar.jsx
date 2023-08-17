import React from "react";
import "./Sidebar.css";
import Logo from "./Logo";
import Widget from "./Widget";

const Sidebar = () => {
  return (
    <aside className="siderbar-container">
      <div className="content-sidebar">
        <Logo />
        <p className="p">
          React <span>App</span>
        </p>
        <ul className="widgets-container">
          <li>
            <Widget></Widget>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
