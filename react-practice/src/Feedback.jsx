import { NavLink, Outlet } from "react-router";

function Feedback() {
  return (
    <>
      <h1>Feedback page</h1>
      <br />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/feedback">
            Question
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="answer">
            Answer
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="detailed">
            Detailed
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Back To Home
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export function Question() {
  return (
    <>
      <h1>Question page</h1>
    </>
  );
}

export function Answeer() {
  return (
    <>
      <h1>Answeer page</h1>
    </>
  );
}

export function Detailed() {
  return (
    <>
      <h1>Detailed page</h1>
    </>
  );
}

export default Feedback;
