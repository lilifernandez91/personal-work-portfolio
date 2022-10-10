import "../styles/Projects.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";
import equipo from "../images/presentacion-equipo.png"
import tarjeta from "../images/tarjeta-personal.png"

const Collaborations = () => {
    return (
      <div>
        <>
          <header>
            <Menu />
            <Portfolio />
          </header>
          <div className="collaborations-container">
          <img className="image-projects" src={equipo} alt="Foto de proyecto" />
          <img className="image-projects" src={tarjeta} alt="Foto de proyecto" />
          </div>
          <Footer />
        </>
      </div>
    );
  };
  
  export default Collaborations;
  