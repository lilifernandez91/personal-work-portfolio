import "../styles/Reset.scss";
import "../styles/Skills.scss";
import "../styles/Education.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";
import html from "../images/html5.png";
import css from "../images/css3.png";
import flexbox from "../images/flexbox.jpeg";
import grid from "../images/grid.jpeg";
import responsive from "../images/responsive.jpeg";
import sass from "../images/sass.png";
import bootstrap from "../images/bootstrap.jpeg";
import javascript from "../images/javascript.jpeg";
import api from "../images/api-rest.png";
import git from "../images/git.png";
import react from "../images/react.png";
import node from "../images/node-express.png";
import sql from "../images/sql.jpeg";
import slack from "../images/slack.png";
import github from "../images/github.png";
import vscode from "../images/vs-code.png";
import gulp from "../images/gulp.jpeg";
import terminal from "../images/terminal.jpeg";
import linter from "../images/eslint.png";
import zeplin from "../images/zeplin.png";
import scrum from "../images/agile-scrum.png";

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
          <div className="layout-container">
            <div className="space">
              <div>
                <h2>Layout</h2>
              </div>
              <div className="layout">
                <img
                  className="layout-img"
                  src={html}
                  alt="Imagen del logo html"
                  title="HTML5"
                />
                <img
                  className="layout-img"
                  src={css}
                  alt="Imagen del logo css"
                  title="CSS3"
                />
                <img
                  className="layout-img"
                  src={flexbox}
                  alt="Imagen del logo flexbox"
                  title="FLEXBOX"
                />
                <img
                  className="layout-img"
                  src={grid}
                  alt="Imagen del logo grid"
                  title="CSS GRID"
                />
                <img
                  className="layout-img"
                  src={responsive}
                  alt="Imagen del logo responsive"
                  title="RESPONSIVE DESIGN"
                />
                <img
                  className="layout-img"
                  src={sass}
                  alt="Imagen del logo sass"
                  title="SASS"
                />
                <img
                  className="layout-img"
                  src={bootstrap}
                  alt="Imagen del logo bootstrap"
                  title="BOOTSTRAP"
                />
              </div>
            </div>
            <div className="space">
              <div>
                <h2>Front End</h2>
              </div>
              <div className="layout">
                <img
                  className="layout-img"
                  src={javascript}
                  alt="Imagen del logo javascript"
                  title="JAVASCRIPT"
                />
                <img
                  className="layout-img"
                  src={react}
                  alt="Imagen del logo react"
                  title="REACT"
                />
                <img
                  className="layout-img"
                  src={api}
                  alt="Imagen del logo api"
                  title="API REST"
                />
              </div>
            </div>
            <div className="space">
              <div>
                <h2>Back End</h2>
              </div>
              <div className="layout">
                <img
                  className="layout-img"
                  src={node}
                  alt="Imagen del logo node"
                  title="NODE JS / EXPRESS JS"
                />
                <img
                  className="layout-img"
                  src={sql}
                  alt="Imagen del logo sql"
                  title="SQL"
                />
              </div>
            </div>
            <div className="space">
              <div>
                <h2>Communication</h2>
              </div>
              <div className="layout">
                <img
                  className="layout-img"
                  src={slack}
                  alt="Imagen del logo slack"
                  title="SLACK"
                />
                <img
                  className="layout-img"
                  src={scrum}
                  alt="Imagen del logo scrum"
                  title="SCRUM"
                />
              </div>
            </div>
            <div className="space">
              <div>
                <h2>Others</h2>
              </div>
              <div className="layout">
                <img
                  className="layout-img"
                  src={git}
                  alt="Imagen del logo git"
                  title="GIT"
                />
                <img
                  className="layout-img"
                  src={github}
                  alt="Imagen del logo github"
                  title="GITHUB"
                />
                <img
                  className="layout-img"
                  src={vscode}
                  alt="Imagen del logo vscode"
                  title="VS CODE"
                />
                <img
                  className="layout-img"
                  src={gulp}
                  alt="Imagen del logo gulp"
                  title="GULP"
                />
                <img
                  className="layout-img"
                  src={terminal}
                  alt="Imagen del logo terminal"
                  title="TERMINAL"
                />
                <img
                  className="layout-img"
                  src={linter}
                  alt="Imagen del logo linter"
                  title="ESLINT"
                />
                <img
                  className="layout-img"
                  src={zeplin}
                  alt="Imagen del logo zeplin"
                  title="ZEPLIN"
                />
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
