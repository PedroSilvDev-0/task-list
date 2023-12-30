import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import Tasks from "./view/Tasks/Tasks";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Tasks />
  </React.StrictMode>
);
