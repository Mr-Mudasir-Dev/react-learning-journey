import { useState } from "react";

function App() {
  const [data, setdata] = useState(["Ali", "Khan", "Abdul", "mugal"]);
  const [input, setinput] = useState("");

  const handel = () => {
    setdata([...data, input]);
    setinput("");
  };
  const datachange = () => {
    data[data.length - 1] = input;
    setdata([...data]);
    setinput("");
  };
  return (
    <>
      <h1>This is App Comonent </h1>
      <input
        type="text"
        value={input}
        placeholder="any text here"
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={handel}>Add</button>

      <button onClick={datachange}>Last Change</button>

      {data.map((i, ind) => (
        <h3 key={ind}>{i}</h3>
      ))}
    </>
  );
}

export default App;
