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
                  Maquetación: HTML5, CSS3, Flexbox, CSS Grid, diseño
                  responsive, SASS, Bootstrap.
                </p>
              </div>
              <div>
                <p>JavaScript (ES6) y servicios web (APIs) de terceros.</p>
              </div>
              <div>
                <p>Control de versiones con Git.</p>
              </div>
              <div>
                <p>Creación de SPAs sencillas con React.</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div>
                <p>
                  Conocimientos básicos de APIs y programación back:
                  Aplicaciones con Node JS, Express y SQL.
                </p>
              </div>
              <div>
                <p>
                  Manejo de Slack, GitHub, VS Code, Gulp, Terminal, Linter,
                  Zeplin.
                </p>
              </div>
              <div>
                <p>
                  Experiencia en el desarrollo de proyectos usando filosofía
                  Agile y marco de trabajo Scrum.
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
