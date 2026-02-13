import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const photo =
    "https://cdn.imgupscaler.ai/userspace/imgupscaler/image/photo-enhancer/feature_05_enhancer.webp";

  let name = "Ali";

  let user = {
    name: "Khan",
    age: 17,
    email: "khan@gmail.com",
    city: "karachi",
  };

  let arrowfun = () => {
    alert("Arrow Function Triger");
  };

  return (
    <>
      <h1 className="mt-1">Hello World</h1>
      <h1 className="mt-1">{name}</h1>
      <h1 className="mt-1">{user.email}</h1>
      <button onClick={arrowfun}>Arrow Click</button>
      <br />
      <img src={photo} alt={photo} width="100px" className="mt-3" />
    </>
  );
}

export function Card() {
  return (
    <>
      <h3>i am card</h3>

      <button
        onClick={function () {
          alert("btn clicked");
        }}
      >
        Clicked
      </button>
    </>
  );
}

export default App;
