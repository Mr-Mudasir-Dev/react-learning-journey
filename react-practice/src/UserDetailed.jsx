import { useParams } from "react-router";

function UserDetailed() {
  const parms = useParams();
  return (
    <>
      <h1>UserDetailed page</h1>
      <h3>User In is: {parms.id}</h3>
    </>
  );
}

export default UserDetailed;
