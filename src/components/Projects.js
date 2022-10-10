import "../styles/Projects.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";
import creando from "../images/disfruta-creando-espacios.png";
import aleatorio from "../images/numero-aleatorio.png";
import mokepon from "../images/mokepon.png";
import frases from "../images/frases-friends.png";
import anime from "../images/series-anime.png";
import red from "../images/red-social.png";
import personajes from "../images/personajes-harry-potter.png";

const Projects = () => {
  return (
    <div>
      <>
        <header>
          <Menu />
          <Portfolio />
        </header>
        <div className="projects-container container">
          <div className="projects-1">
            <img
              className="image-projects"
              src={creando}
              alt="Foto de proyecto"
            />
            <img
              className="image-projects"
              src={aleatorio}
              alt="Foto de proyecto"
            />
            <img
              className="image-projects"
              src={mokepon}
              alt="Foto de proyecto"
            />
            <img
              className="image-projects"
              src={frases}
              alt="Foto de proyecto"
            />
          </div>
          <div className="projects-1">
            <img
              className="image-projects"
              src={anime}
              alt="Foto de proyecto"
            />
            <img className="image-projects" src={red} alt="Foto de proyecto" />
            <img
              className="image-projects"
              src={personajes}
              alt="Foto de proyecto"
            />
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Projects;
