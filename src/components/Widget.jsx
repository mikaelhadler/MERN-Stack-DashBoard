import React from "react";
import "./Widget.css";

const Widget = ({ title, children }) => {
  return (
    <>
      <section className="widget-container">
        <div className="widget-items">
          <box-icon
            color="#61dbfb"
            type="solid"
            name="dashboard"
            size="md"
          ></box-icon>
          <p>Dashboard</p>
        </div>
      </section>
    </>
  );
};
export default Widget;
