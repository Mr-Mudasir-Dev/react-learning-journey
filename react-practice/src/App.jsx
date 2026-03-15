import { Route, Routes } from "react-router";
import Create from "./Create";
import Header from "./Header";
import Show from "./Show";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Show />} />
        </Route>

        <Route path="/*" element={<h1>Page 404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
