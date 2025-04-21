import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStorage } from "./Globalcontext";

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <GlobalStorage>
    <App />
  </GlobalStorage>
  // </React.StrictMode>
);
