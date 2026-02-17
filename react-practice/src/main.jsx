import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Checkbox from "./Checkbox.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Checkbox />
  </StrictMode>,
);
