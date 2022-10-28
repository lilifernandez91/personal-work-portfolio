import "../styles/Main.scss";
import "../styles/Reset.scss";
import imagenPrincipal from "../images/imagen-principal.jpeg";

const Main = () => {
  return (
    <div className="box-container container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <p>
            Hola, mi nombre es Lili y he realizado este portafolio para contarles
            un poco sobre mi vida y carrera profesional. Espero que les guste.
          </p>
        </div>
        <div className="col-12 col-lg-4 container-imagen-main">
          <img className="imagen-main" src={imagenPrincipal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
