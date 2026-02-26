const Practice = ({ btnref, fun }) => {
  return (
    <>
      <input ref={btnref} type="text" />
      <br />
      <br />
      <button onClick={fun}>Submit</button>
    </>
  );
};

export default Practice;
