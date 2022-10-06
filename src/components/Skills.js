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
        <div className="container-1">
          <h1 className="title">Skills</h1>
          <ul className="list">
            <li>
              Layout: HTML5, CSS3, Flexbox, CSS Grid, responsive design, SASS,
              Bootstrap.
            </li>
            <li>JavaScript (ES6) and third-party web services (APIs).</li>
            <li>Version control with Git.</li>
            <li>Creating simple SPAs with React.</li>
            <li>
              Basic knowledge of APIs and back programming: Applications with
              Node JS, Express y SQL.
            </li>
            <li>
              Management of Slack, GitHub, VS Code, Gulp, Terminal, Linter,
              Zeplin.
            </li>
            <li>
              Experience in project development using filosofía Agile philosophy
              and Scrum framework.
            </li>
          </ul>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Skills;
