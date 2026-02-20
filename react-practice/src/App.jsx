import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Arrayobj from "./Arrayobj";

function App() {
  let userApi = [
    {
      id: 1,
      name: "Ali",
      age: 21,
      email: "ali@gmail.com",
      password: "1234",
      education: [
        { semester: 1, english: 78, urdu: 82, math: 90 },
        { semester: 2, english: 80, urdu: 75, math: 88 },
        { semester: 3, english: 85, urdu: 79, math: 92 },
      ],
    },
    {
      id: 2,
      name: "Ahmed",
      age: 23,
      email: "ahmed@gmail.com",
      password: "1234",
      education: [
        { semester: 1, english: 70, urdu: 68, math: 74 },
        { semester: 2, english: 73, urdu: 72, math: 79 },
        { semester: 3, english: 76, urdu: 75, math: 81 },
      ],
    },
    {
      id: 3,
      name: "Usman",
      age: 22,
      email: "usman@gmail.com",
      password: "1234",
      education: [
        { semester: 1, english: 88, urdu: 84, math: 91 },
        { semester: 2, english: 86, urdu: 80, math: 89 },
        { semester: 3, english: 90, urdu: 85, math: 94 },
      ],
    },
    {
      id: 4,
      name: "Hassan",
      age: 24,
      email: "hassan@gmail.com",
      password: "1234",
      education: [
        { semester: 1, english: 65, urdu: 70, math: 72 },
        { semester: 2, english: 68, urdu: 74, math: 76 },
        { semester: 3, english: 71, urdu: 77, math: 80 },
      ],
    },
    {
      id: 5,
      name: "Bilal",
      age: 20,
      email: "bilal@gmail.com",
      password: "1234",
      education: [
        { semester: 1, english: 92, urdu: 88, math: 95 },
        { semester: 2, english: 89, urdu: 85, math: 93 },
        { semester: 3, english: 94, urdu: 90, math: 97 },
      ],
    },
  ];
  return (
    <>
      <ul className="list-group">
        <h5>User Info</h5>
        {userApi.map((i) => (
          <li className="list-group-item">
            <p>
              <strong>Id:</strong> {i.id}
            </p>
            <p>
              <strong>Name:</strong> {i.name}
            </p>
            <p>
              <strong>Age:</strong> {i.age}
            </p>
            <p>
              <strong>Email:</strong> {i.email}
            </p>

            <ul className="list-group mt-2">
              <li className="list-group-item active">
                <strong>{i.name}: </strong> Education Exam
              </li>
              {i.education.map((e) => (
                <Arrayobj edu={e} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
