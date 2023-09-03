import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    axios
      .get("Dashboard")
      .then((res) => {
        setBackendData(res.data.users);
      })
      .catch((error) => {
        console.error("Falha na conexão com a API", error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {backendData.map((users) => (
          <li key={users._id}>
            <strong>Nome:</strong> {users.firstname}
            <br />
            <strong>Email:</strong> {users.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
