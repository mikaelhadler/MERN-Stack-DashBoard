import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app-container">
        <div>
          <Sidebar />
        </div>
        <div className="content">
          <Header></Header>
        </div>
          <main className="main-content">
            <h1>oi</h1>
          </main>
      </div>
    </>
  );
}

export default App;
