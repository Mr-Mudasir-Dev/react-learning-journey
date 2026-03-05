import useToggle from "./Toogle";

const Practice2 = () => {
  const [val, setval] = useToggle();

  return (
    <>
      <button onClick={setval}>toggle heading</button>
      <button onClick={() => setval(true)}>Show heading</button>
      <button onClick={() => setval(false)}>Hide heading</button>
      {val ? <h1>practice 2 </h1> : null}
    </>
  );
};

export default Practice2;
