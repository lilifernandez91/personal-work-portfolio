import "../styles/Reset.scss";
import "../styles/Skills.scss";
import "../styles/Education.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";

const Skills = () => {
  return (
    <div>
      <>
        <header>
          <Menu />
          <Portfolio />
        </header>
        <div className="container-1 container">
          <div>
            <h1 className="title">Skills</h1>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div>
                <p>
                  Layout: HTML5, CSS3, Flexbox, CSS Grid, design responsive,
                  SASS, Bootstrap.
                </p>
              </div>
              <div>
                <p>JavaScript (ES6) and third-party web services (APIs).</p>
              </div>
              <div>
                <p>Version control with Git.</p>
              </div>
              <div>
                <p>Creating simple SPAs with React.</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div>
                <p>
                  Basic knowledge of APIs and back programming: Applications
                  with Node JS, Express and SQL.
                </p>
              </div>
              <div>
                <p>
                  Management of Slack, GitHub, VS Code, Gulp, Terminal, Linter,
                  Zeplin.
                </p>
              </div>
              <div>
                <p>
                  Experience in project development using philosophy Agile and
                  Scrum framework.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Skills;
