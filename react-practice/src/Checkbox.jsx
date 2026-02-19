import { useState } from "react";

function Checkbox() {
  const [gender, setgender] = useState("male");
  const [opt, setopt] = useState("java");

  return (
    <>
      <div>
        <h1>{gender}</h1>
        <input
          type="radio"
          onChange={(e) => setgender(e.target.value)}
          name="gender"
          id="male"
          value="male"
          checked={gender !== "female"}
        />
        <label htmlFor="male">male </label>

        <br />

        <input
          type="radio"
          onChange={(e) => setgender(e.target.value)}
          name="gender"
          id="femail"
          value="female"
          checked={gender !== "male"}
        />
        <label htmlFor="femail"> femail</label>
      </div>

      <br />
      <br />
      <br />

      <div>
        <select onChange={(e) => setopt(e.target.value)} defaultValue={"java"}>
          <option value="php">php</option>
          <option value="java">java</option>
          <option value="react">react</option>
        </select>
      </div>
      <h1>{opt}</h1>
    </>
  );
}

export default Checkbox;
