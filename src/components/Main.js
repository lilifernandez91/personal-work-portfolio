import "../styles/Main.scss";
import "../styles/Reset.scss";
import imagenPrincipal from "../images/imagen-principal.jpeg";

const Main = () => {
  return (
    <div className="box-container container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <p>
            Hello, my name is Lili and I have made this portfolio to tell you a
            little about my life and professional career. Hope you like.
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
