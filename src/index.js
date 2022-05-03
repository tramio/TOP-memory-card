import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./styles/clareset.css";
import "./styles/style.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
