import { Route, Routes } from "react-router";
import Create from "./Create";
import Header from "./Header";
import Show from "./Show";
import UserEdit from "./UserEdit";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Show />} />
          <Route path="/create" element={<Create />} />
          <Route path="/useredit/:id" element={<UserEdit />} />
        </Route>

        <Route path="/*" element={<h1>Page 404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
