import React from "react";
import "./UserList.css";
import { useState, useEffect } from "react";

const UserList = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((user) => {
        setBackendData(user);
      });
  });
  return (
    <>
      <section className="users-dashboard">
        <div className="dashboard-header">
          <a href="">
            <button>Add User</button>
          </a>
          <input className="input" type="text" placeholder="Search..." />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First-Name</th>
              <th>Last-Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Lucius</td>
              <td>Blake</td>
              <td>lucius.blake@gmail.com</td>
              <td>935684</td>
              <td>
                <box-icon color="#94a3b8" name="edit"></box-icon>
                <box-icon color="#94a3b8" name="x"></box-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {typeof backendData.users === "undefined" ? (
        <p>Loading ...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user.firstname}</p>)
      )}
    </>
  );
};

export default UserList;
