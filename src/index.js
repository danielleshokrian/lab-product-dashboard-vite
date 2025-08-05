import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Update existing header element
const dashboardTitle = document.getElementById("header");
dashboardTitle.textContent = "Product Dashboard";

// Render App
const root = createRoot(document.getElementById("root"));
root.render(<App />);