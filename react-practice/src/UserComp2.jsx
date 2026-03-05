import UserComp3 from "./UserComp3";

function UserComp2() {
  return (
    <>
      <div style={{ backgroundColor: "green", padding: "20px" }}>
        <h1>User Component 2</h1>
        <UserComp3 />
      </div>
    </>
  );
}

export default UserComp2;
