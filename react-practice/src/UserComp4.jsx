import { useContext } from "react";
import { UserContext } from "./ContextApi";

function UserComp4() {
  const User = useContext(UserContext);
  return (
    <>
      <div style={{ backgroundColor: "orange", padding: "20px" }}>
        <h1>User Component 4</h1>
        <h1>User Name : {User}</h1>
      </div>
    </>
  );
}

export default UserComp4;
