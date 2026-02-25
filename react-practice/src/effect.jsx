import { useRef, useState } from "react";

const Effect = () => {
  const [text, settext] = useState();
  const [inc, setinc] = useState();
  const inputref = useRef();
  const incree = useRef();

  const sub = () => {
    settext(inputref.current.value);
    inputref.current.focus();
    inputref.current.value = "";
  };
  function incr() {
    setinc(Number(incree.current.value) + 1);
  }

  return (
    <>
      <h1>Lesson Use Ref (This is Effect Component)</h1>
      <input ref={inputref} type="text" />
      <button onClick={sub}>Btn</button>
      <h2>{text}</h2>
      <br />
      <br />
      <input ref={incree} type="number" />
      <button onClick={incr}>+1 increment</button>
      <h2>{inc}</h2>
    </>
  );
};

export default Effect;
