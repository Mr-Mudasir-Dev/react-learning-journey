import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Practice from "./Practice.jsx";
import Practice2 from "./Practice2.jsx";
import Object from "./Object.jsx";
import UserComp1 from "./UserComp1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserComp1 />
    {/* <App /> */}
    {/* <Practice /> */}
    {/* <Practice2 /> */}
    {/* <Object /> */}
  </StrictMode>,
);
