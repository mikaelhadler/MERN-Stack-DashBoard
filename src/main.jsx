import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserList from "./components/pages/UserList.jsx";
import "boxicons";
import "./index.css";

const router = createBrowserRouter([
  // Correção da função
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
