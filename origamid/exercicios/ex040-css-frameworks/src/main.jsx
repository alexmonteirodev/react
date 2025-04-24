import React from "react";
import { createRoot } from "react-dom/client";
import App1 from "./App1.jsx";
import App2 from "./App2.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App1 />
    <App2 />
  </React.StrictMode>
);
