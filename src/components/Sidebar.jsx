import React from "react";
import "./Sidebar.css";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <aside className="siderbar-container">
      <div className="content-sidebar">
        <Logo />
        <p className="p">
          React <span>App</span>
        </p>
        <nav className="actions"></nav>
      </div>
    </aside>
  );
};

export default Sidebar;
