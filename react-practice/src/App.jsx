import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Student from "./Student";
function App() {
  let name = "Ali Akbar";
  let obj = {
    name: "Ali",
    age: 21,
    city: "Karachi",
    email: "ali@gmail.com",
  };
  let arry = ["Ali", 21, "karachi", +923313213467];
  function prent(){
    console.log("Hello Child");
  }
  return (
    <>
    
      <Student variable={name} obj={obj} arr={arry} jsxsentext={<button>Hello child btn</button>} fun={prent()} />
    </>
  );
}

export default App;
