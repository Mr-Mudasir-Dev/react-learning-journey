import { useEffect, useState } from "react";

const Effect = ({ prop, fun }) => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    fun();
  }, [prop]);

  return (
    <>
      <h1>Effect Component Count: {prop}</h1>
      <button onClick={() => setcount((pre) => pre + 1)}>effect: {count}</button>
    </>
  );
};

export default Effect;
