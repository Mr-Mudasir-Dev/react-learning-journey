import { Link, NavLink } from "react-router";
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
import Feedback, { Answeer, Detailed, Question } from "./Feedback";
import Page404 from "./Page404";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contect">
                  Contect
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/feedback">
                  FeedBack
                </NavLink>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />

        <Route path="/feedback" element={<Feedback />} >
        <Route path="question" element={<Question />} />
        <Route path="answer" element={<Answeer />} />
        <Route path="detailed" element={<Detailed />} />
        </Route>

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
