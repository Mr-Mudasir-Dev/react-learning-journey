import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Effect from "./effect";

function App() {
  const [count, setcount] = useState(0);

  // useEffect(() => {
  //   console.log("Useeffect function called sirf ek dafa chalyga");
  // }, []);

  // useEffect(() => {
  //   once();
  // }, []); // ya sirf ek bar chalyga jab ya component open hoga

  // useEffect(() => {
  //   console.log("Count k sat bar bar call");
  // }, [count]); // ya sirf count state k sat he chalyga ga bar bar

  const once = () => {
    console.log("Once Function called");
  };

  return (
    <>
      <h1>Use-Effect Learn</h1>
      <Effect prop={count} fun={once} />
      <button onClick={() => setcount((pre) => pre + 1)}>Incriment</button>
    </>
  );
}

export default App;
