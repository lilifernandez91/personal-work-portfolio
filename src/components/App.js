import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Main from "./Main";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Collaborations from "./Collaborations";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <header>
                <Menu />
                <Portfolio />
              </header>
              <Main />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/about-me"
          element={
            <>
              <AboutMe />
            </>
          }
        ></Route>

        <Route
          path="/education"
          element={
            <>
              <Education />
            </>
          }
        ></Route>

        <Route
          path="/experience"
          element={
            <>
              <Experience />
            </>
          }
        ></Route>

        <Route
          path="/skills"
          element={
            <>
              <Skills />
            </>
          }
        ></Route>

        <Route
          path="/projects"
          element={
            <>
              <Projects />
            </>
          }
        ></Route>

        <Route
          path="/collaborations"
          element={
            <>
              <Collaborations />
            </>
          }
        ></Route>

        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
