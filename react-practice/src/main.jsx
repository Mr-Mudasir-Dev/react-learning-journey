import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Practice from "./Practice.jsx";
import Practice2 from "./Practice2.jsx";
import Object from "./Object.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practice /> */}
    <Practice2 />
    {/* <Object /> */}
  </StrictMode>,
);
