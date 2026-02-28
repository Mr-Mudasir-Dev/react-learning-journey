import { useState } from "react";

const Task = () => {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState("");

  const handel = () => {
    setusers([...users, user]);
  };

  let totaluser = users.length;
  let uniuser = [...new Set(users)].length;
  let uname = users.at(-1);

  return (
    <>
      <h1>Task Comonent</h1>
      <br />
      <br />
      <h2>Total User: {totaluser}</h2>
      <h2>Unique Users: {uniuser}</h2>
      <h2>Last User Name: {uname}</h2>

      <input
        type="text"
        onChange={(e) => setuser(e.target.value)}
        placeholder="enter any text"
      />
      <button onClick={handel}>Add</button>
      {users.map((item, ind) => (
        <h3 key={ind}>{item}</h3>
      ))}
    </>
  );
};

export default Task;
