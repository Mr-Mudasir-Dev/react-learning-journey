import { Routes, Route } from "react-router";
import UsersPage from "./components/crud/Student";
import Create from "./components/crud/Create";
import Edit from "./components/crud/Edit";
import RegisterForm from "./components/UserAuth/RegisterForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/auth/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
