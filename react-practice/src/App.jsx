import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Student from "./Student";
function App() {
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  const [email, setemail] = useState("");
  // const [val, setval] = useState("Empty Field");
  return (
    <>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter name"
      />
      <br /> <br />
      <input
        type="text"
        value={city}
        onChange={(e) => setcity(e.target.value)}
        placeholder="Enter city"
      />
      <br /> <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Enter email"
      />
      <br /> <br />
      <button>submit</button>
      <button onClick={()=> {setname("");setcity("");setemail("")}}>Clear</button>
      <br />
      <p>
        <strong>{name}</strong>
      </p>
      <p>
        <strong>{city}</strong>
      </p>
      <p>
        <strong>{email}</strong>
      </p>
      {/* <h1>Input Filde Value Get task</h1>
      <label htmlFor="">
        <strong>AnyText :</strong>
      </label>
      <input
        type="text"
        placeholder="text heare"
        onChange={(e) => setval(e.target.value)}
      />
      <h3>{val}</h3> */}
      <Student />
    </>
  );
}

export default App;
