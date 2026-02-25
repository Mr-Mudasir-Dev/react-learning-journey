import { useRef } from "react";

const Practice = () => {
  const unam = useRef();
  const upass = useRef();

  function dqsinputref(e) {
    e.preventDefault();
    console.log(unam.current.value, upass.current.value);
  }

  const dqsinput = (event) => {
    event.preventDefault();
    console.log(document.querySelector("#unam").value);
    console.log(document.querySelector("#upass").value);
  };

  return (
    <>
      <hr />
      <h1>Input Practice Component</h1>
      <h3>UnControlled Comonent with the help of document.qureeselector</h3>
      <br />
      <br />
      <form action="" onSubmit={dqsinput}>
        <input type="text" id="unam" />
        <br />
        <br />
        <input type="password" id="upass" />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <br />
      <br />
      <h3>UnControlled Comonent with the help of Use Ref</h3>
      <br />
      <br />
      <form action="" onSubmit={dqsinputref}>
        <input type="text" ref={unam} />
        <br />
        <br />
        <input type="password" ref={upass} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Practice;
