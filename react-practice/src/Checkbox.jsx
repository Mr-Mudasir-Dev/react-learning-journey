import { useState } from "react";

function Checkbox() {
  const [gender, setgender] = useState([]);

  function chkbox(e) {
  if (e.target.checked) {
    setgender([...gender, e.target.value]);
  } else {
    setgender(gender.filter((i) => i != e.target.value));
  }
}

  return (
    <>
      <div>
        <h1>hello checkbox component</h1>
        <p>this work</p>
        <input onChange={chkbox} type="Checkbox" value="PHP" id="php" />
        <label htmlFor="php">PHP</label>
        <br />
        <input onChange={chkbox} type="Checkbox" value="C#" id="c#" />
        <label htmlFor="c#">C#</label>
        <br />
        <input onChange={chkbox} type="Checkbox" value="SQL" id="sql" />
        <label htmlFor="sql">SQL</label>
        <br />
        <input onChange={chkbox} type="Checkbox" value="API" id="api" />
        <label htmlFor="api">API</label>

        <h1>{gender}</h1>
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* <div>
        <input type="radio" name="gender" id="main" />
        <label htmlFor="main">mail</label>
        <br />
        <input
          type="radio"
          onChange={() => setgender()}
          name="gender"
          id="femail"
        />
        <label htmlFor="femail">femail</label>
      </div> */}

      <div></div>
    </>
  );
}

export default Checkbox;
