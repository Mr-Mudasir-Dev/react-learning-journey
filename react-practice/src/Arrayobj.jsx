import UserApi from "./UserApi";
import PropsApi from "./PropsApi";

const Arrayobj = () => {
  let userApi = [
    { id: 1, name: "Ali", age: 21, email: "ali@gmail.com", password: "1234" },
    {
      id: 2,
      name: "Ahmed",
      age: 23,
      email: "ahmed@gmail.com",
      password: "1234",
    },
    {
      id: 3,
      name: "Usman",
      age: 20,
      email: "usman@gmail.com",
      password: "1234",
    },
    {
      id: 4,
      name: "Hassan",
      age: 24,
      email: "hassan@gmail.com",
      password: "1234",
    },
    {
      id: 5,
      name: "Bilal",
      age: 22,
      email: "bilal@gmail.com",
      password: "1234",
    },
    {
      id: 6,
      name: "Zain",
      age: 25,
      email: "zain@gmail.com",
      password: "1234",
    },
    { id: 7, name: "Saad", age: 19, email: "saad@gmail.com", password: "1234" },
    {
      id: 8,
      name: "Tariq",
      age: 26,
      email: "tariq@gmail.com",
      password: "1234",
    },
    {
      id: 9,
      name: "Imran",
      age: 28,
      email: "imran@gmail.com",
      password: "1234",
    },
    {
      id: 10,
      name: "Fahad",
      age: 27,
      email: "fahad@gmail.com",
      password: "1234",
    },
  ];

  return (
    <>
      <h1>Array Obj Data Show on Map Function Basic</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {userApi.map((i) => (
            <tr>
              <th scope="row">{i.id}</th>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />

      <h1>Data Show On Other Component In Props Help </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {userApi.map((i) => (
            <UserApi data={i} />
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />

      <h1>props help data recive</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <PropsApi Api={userApi} />
        </tbody>
      </table>
    </>
  );
};

export default Arrayobj;
