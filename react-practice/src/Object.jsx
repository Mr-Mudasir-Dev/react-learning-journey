import { useState } from "react";

const Object = () => {
  const [obj, setobj] = useState({
    user: "Ali",
    age: 21,
    city: "Karachi",
    address: {
      house: "modasl square R117",
      gali: "Gali number 2",
    },
  });
  const handerl = (name) => {
    obj.user = name;
    console.log(obj);
    setobj({ ...obj });
  };
  const handerlage = (val) => {
    obj.age = val;
    console.log(obj);
    setobj({ ...obj });
  };
  const handerlhouse = (val) => {
    obj.address.house = val;
    console.log(obj);
    setobj({ ...obj });
  };
  const handerlgali = (val) => {
    obj.address.gali = val;
    console.log(obj);
    setobj({ ...obj });
  };
  return (
    <>
      <h1>Object Component</h1>
      <br />
      <input
        type="text"
        placeholder="Name Change"
        onChange={(e) => handerl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age change"
        onChange={(e) => handerlage(e.target.value)}
      />
      <input
        type="text"
        placeholder="House Change"
        onChange={(e) => handerlhouse(e.target.value)}
      />
      <input
        type="text"
        placeholder="Gali Change"
        onChange={(e) => handerlgali(e.target.value)}
      />
      <br />
      <br />
      <p>
        <strong>Name : </strong> {obj.user}
      </p>
      <p>
        <strong>age : </strong> {obj.age}
      </p>
      <p>
        <strong>Houser Num : </strong> {obj.address.house}
      </p>
      <p>
        <strong>gali : </strong> {obj.address.gali}
      </p>
      <br />
      <button>Changed Info</button>
    </>
  );
};

export default Object;
