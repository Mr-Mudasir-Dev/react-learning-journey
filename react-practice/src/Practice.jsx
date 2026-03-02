import { useState } from "react";

const Practice = () => {
  const [input, setinput] = useState("");
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Ali Khan",
      age: 20,
      education: {
        class: "BS Computer Science",
        subject: "Data Structures",
      },
    },
    {
      id: 2,
      name: "Sara Ahmed",
      age: 22,
      education: {
        class: "BBA",
        subject: "Marketing",
      },
    },
    {
      id: 3,
      name: "Usman Tariq",
      age: 19,
      education: {
        class: "Intermediate",
        subject: "Pre-Engineering",
      },
    },
    {
      id: 4,
      name: "Ayesha Malik",
      age: 21,
      education: {
        class: "BS Mathematics",
        subject: "Linear Algebra",
      },
    },
    {
      id: 5,
      name: "Hamza Noor",
      age: 23,
      education: {
        class: "MBA",
        subject: "Finance",
      },
    },
  ]);

  const handel = () => {
    data[data.length - 1].education.subject = input;
    setdata([...data]);
    setinput("");
  };
  return (
    <>
      <h1>Array of Object Handel</h1>
      <input
        type="text"
        placeholder="Subject change"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={handel}>change</button>
      <br />
      <br />
      {data.map((item, index) => (
        <p key={index}>
          <strong>name:</strong> {item.name},<strong> age: </strong> {item.age},
          <strong> Class: </strong> {item.education.class},
          <strong> Subject: </strong> {item.education.subject}
        </p>
      ))}
    </>
  );
};

export default Practice;
