import { Routes, Route } from "react-router";
import UsersPage from "./components/crud/Student";
import Create from "./components/crud/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
