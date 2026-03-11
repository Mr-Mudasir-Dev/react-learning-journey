import { Routes, Route } from "react-router";
import Header from "./Header";
import Home from "./Home";
import Page404 from "./Page404";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
