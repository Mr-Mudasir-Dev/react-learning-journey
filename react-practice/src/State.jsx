import { useState } from "react";
import Student from "./Student";

function State() {
  const [show, setshow] = useState(true);
  const [count, setcount] = useState(0);

  return (
    <>
      <hr />

      <h1>State page</h1>
      <button onClick={() => setcount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setcount((prev) => prev - 1)}>Decriment</button>
      <p>
        Count: <strong>{count}</strong>
      </p>

      <br />

      {show ? (
        <button onClick={() => setshow((prev) => !prev)}>
          Hide Std Comp...
        </button>
      ) : (
        <button onClick={() => setshow((prev) => !prev)}>
          Show Std Comp...
        </button>
      )}

      <hr />

      {show && <Student />}
    </>
  );
}

export default State;
