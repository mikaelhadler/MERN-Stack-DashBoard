import React from "react";
import "./Widget.css";

const Widget = ({ title, children }) => {
  return (
    <>
      <section className="widget-container">
        <div className="widget-items">
          <div className="widget-dashboard">
            <box-icon
              color="#61dbfb"
              type="solid"
              name="dashboard"
              size="md"
            ></box-icon>
            <a href="Dashboard">Dashboard</a>
          </div>
          <div className="widget-users">
            <box-icon size="md" color="#61dbfb" name="user"></box-icon>
            <a href="/">Users List</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Widget;
