import { useEffect, useState } from "react";

function App() {
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    getapi();
  }, []);

  const getapi = async () => {
    let url = "http://localhost:5126/api/Student";
    let respons = await fetch(url);
    let data = await respons.json();
    setuserdata(data);
  };

  return (
    <>
      <h1 className="mb-5">Get Api Call In React.Js</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((user, ind) => (
            <tr key={ind}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
