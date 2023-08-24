import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const root = document.getElementById("root");
if (root == null) {
  throw new Error("Could not find element by id 'root'");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <p>Hello</p>
  </React.StrictMode>
);
