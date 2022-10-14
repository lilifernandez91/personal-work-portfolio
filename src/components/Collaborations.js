import "../styles/Projects.scss";
import "../styles/Reset.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";
import { collaborations } from "../services/collaborations";

const Collaborations = () => {
    return (
      <div>
      <>
        <header>
          <Menu />
          <Portfolio />
        </header>
        <div className="projects-container container">
          <div className="projects-1">
            {collaborations.map((p) => (
              <div className="project-box">
                <img
                  className="image-projects"
                  src={p.image}
                  alt="Foto de proyecto"
                />
                <div className="description">
                  <p>
                    <span>Description:</span> 
                    <span>{p.description}</span>
                  </p>
                  <p>
                    <span>Technologies:</span> 
                    <span>{p.technologies}</span>
                  </p>
                  <a rel="noreferrer" href={p.link} target="_blank">
                    Visit website
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
  
  export default Collaborations;
  