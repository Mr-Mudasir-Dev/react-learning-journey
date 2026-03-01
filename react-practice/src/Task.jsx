const Task = ({ setcount, setlater }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Any Text here"
        onChange={(e) => setlater(e.target.value)}
      />
      <br /><br />
      <button onClick={() => setcount((prev) => prev + 1)}>Incress</button>
    </>
  );
};

export default Task;
