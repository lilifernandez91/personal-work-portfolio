import images from "../images/IMG-6006.jpg";
import "../styles/AboutMe.scss";
import "../styles/Reset.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";

const AboutMe = () => {
  return (
    <div>
      <>
        <header>
          <Menu />
          <Portfolio />
        </header>
        <div className="container about-me-container">
          <h1 className="title">Sobre mí</h1>
          <div className="row">
            <div className="col-12 col-lg-8">
              <p className="description">
                Estudié Licenciatura en Fonoaudiología en la Universidad de
                Ciencias Médicas de Villa Clara, Cuba. Un año después de
                terminar mi carrera me fui a vivir a otro país, Uruguay. Por
                casi 6 años ejercí mi profesión y atendí a niños y adultos con
                dificultades auditivas y del lenguaje. Aunque profesionalmente
                me sentía realizada, mi sueño era vivir en España. Dada la
                oportunidad de residir en España, no lo pensé dos veces y me
                aventé, pero como nada es perfecto me encontré con un sinfín de
                obstáculos para poder ejercer mi profesión. Como resultado de
                esto, busqué otras oportunidades de desarrollo profesional y por
                amistades que están vinculadas al sector IT nació la curiosidad y me animé a cursar un bootcamp de "Programación Front-End ",
                en el que he descubierto un mundo apasionante que ha despertado
                mi interés por la tecnología y la necesidad de asumir nuevos
                retos y estar en constante aprendizaje.
              </p>
            </div>
            <div className="col-12 col-lg-4 container-image-about-me">
              <img className="image-about-me" src={images} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default AboutMe;
