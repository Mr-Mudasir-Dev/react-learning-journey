import { Link, NavLink } from "react-router";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Contect from "./Contect";
import Feedback, { Answeer, Detailed, Question } from "./Feedback";
import Page404 from "./Page404";
import UserDetailed from "./UserDetailed";
import Practice from "./Practice";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/user/detailed/:id" element={<UserDetailed />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
        </Route>
        <Route path="/feedback" element={<Feedback />}>
          <Route index element={<Question />} />
          <Route path="answer" element={<Answeer />} />
          <Route path="detailed" element={<Detailed />} />
        </Route>

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
