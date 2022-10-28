import "../styles/Projects.scss";
import "../styles/Reset.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";
import { projects } from "../services/projects";

const Projects = () => {
  return (
    <div>
      <>
        <header>
          <Menu />
          <Portfolio />
        </header>
        <div className="projects-container container">
          <div className="projects-1 row">
            {projects.map((p) => (
              <div className="project-box col-12 col-lg-6">
                <img
                  className="image-projects"
                  src={p.image}
                  alt="Foto de proyecto"
                />
                <div className="description">
                  <p>
                    <span>Descripción:</span> 
                    <span>{p.description}</span>
                  </p>
                  <p>
                    <span>Tecnologías:</span> 
                    <span>{p.technologies}</span>
                  </p>
                  <a rel="noreferrer" href={p.link} target="_blank">
                    Visite el sitio web
                  </a>
                </div>
              </div>
            ))}     
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Projects;
