import images from "../images/experiencia laboral.jpeg";
import "../styles/Experience.scss";
import "../styles/Reset.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";

const Experience = () => {
  return (
    <div>
      <>
        <header>
          <Menu />
          <Portfolio />
        </header>
        <div className="experience-container container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h1 className="title">Experiencia</h1>
              <ul className="list">
                <p className="paragraph">Licenciada en Fonoaudiología en:</p>
                <li>
                  Clínica Peñarol y Clínica Centro Oeste. Montevideo, Uruguay.
                  Año 2019- 2021.
                </li>
                <li>
                  Clínica Ciprés y Escuela "Franklin Delano Roosevelt".
                  Montevideo, Uruguay. Año 2017-2019.
                </li>
                <li>
                  Policlínica Provincial "Chiqui Gómez". Villa Clara, Cuba. Año
                  2015-2017.
                </li>
              </ul>
              <ul className="list">
                <p className="paragraph">Competencias:</p>
                <li>
                  Prevención, evaluación, diagnóstico y tratamiento en niños y
                  adultos con dificultades en la comunicación.
                </li>
                <li>
                  Rehabilitación de niños y adultos con implante coclear.
                  Terapia auditivo-verbal.
                </li>
                <li>
                  Rehabilitación de niños con patologías neurológicas. Terapia
                  de deglución. Sistema de comunicación alternativa y/o
                  aumentativa.
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-4 image-experience-container">
              <img className="imgage-experience" src={images} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Experience;
