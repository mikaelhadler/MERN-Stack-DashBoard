import React, { useState, useEffect } from "react";
import api from "../../api/api";
import axios from "axios";

function Dashboard() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    api
      .get("api/Dashboard")
      .then((res) => {
        setBackendData(res.data.users);
      })
      .catch((error) => {
        console.error("Falha na conexão com a API", error);
      });
  }, []);

  return <div>{backendData}</div>;
}

export default Dashboard;
