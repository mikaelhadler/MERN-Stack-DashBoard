import React from "react";
import "./Widget.css";

const Widget = ({ title, children }) => {
  return (
    <>
      <section className="widget-container">
        <div className="widget-items">
          <div className="widget-dashboard">
            <a href="/dashboard"></a>
            <box-icon
              color="#61dbfb"
              type="solid"
              name="dashboard"
              size="md"
            ></box-icon>
            <p>Dashboard</p>
          </div>
          <div className="widget-users">
            <a href="/"></a>
            <box-icon size="md" color="#61dbfb" name="user"></box-icon>
            <p>Users List</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Widget;
