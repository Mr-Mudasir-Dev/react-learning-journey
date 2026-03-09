import { Link } from "react-router";

const Practice = () => {
  let userdata = [
    { id: 2, name: "Ali" },
    { id: 3, name: "s" },
    { id: 4, name: "sas" },
    { id: 5, name: "Ali" },
    { id: 6, name: "Ali" },
  ];
  return (
    <>
      <h1>Practice Component</h1>
      {userdata.map((user, ind) => (
        <h3 key={ind}>
          <Link to={"/user/detailed/" + user.id}>{user.name}</Link>
        </h3>
      ))}
    </>
  );
};

export default Practice;
