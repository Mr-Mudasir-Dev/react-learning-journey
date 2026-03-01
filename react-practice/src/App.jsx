import Task from "./Task";
import Practice from "./Practice";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  const [later, setlater] = useState("");

  return (
    <>
      <h1>This is App Comonent </h1>
      <Task setcount={setcount} setlater={setlater} />
      <Practice count={count} later={later} />
    </>
  );
}

export default App;
