import { useState } from "react";
import UserComp2 from "./UserComp2";
import { UserContext } from "./ContextApi";

function UserComp1() {
  const [user, setuser] = useState("Ali");
  return (
    <>
      <div style={{ backgroundColor: "Red", padding: "20px" }}>
        <h1>User Component 1</h1>
        <select onChange={(e) => setuser(e.target.value)}>
          <option value="Ali">Ali</option>
          <option value="Khan">Khan</option>
          <option value="Mugal">Mugal</option>
          <option value="kamran">kamran</option>
          <option value="asif">asif</option>
        </select>

        <UserContext.Provider value={user}>
          <UserComp2 />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default UserComp1;
