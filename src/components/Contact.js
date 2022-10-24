import "../styles/Contact.scss";
import "../styles/Reset.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";
import contact from "../images/contacto.jpeg";

const Contact = () => {
  return (
    <div>
      <>
        <header>
          <Menu />
          <Portfolio />
        </header>
        <div className="container-contact container">
          <div className="row">
          <div className="container-icon col-12">
            <a href="tel://+34660942023">
              <i className="fa-solid fa-phone icon"></i>
            </a>
            <a
              href="mailto:lilibetfdez@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lilibet-fern%C3%A1ndez-mollinedo/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin icon"></i>
            </a>
            <a
              href="https://github.com/lilifernandez91"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-github icon"></i>
            </a>
            <a
              href="https://twitter.com/Lili_fdez_91"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter icon"></i>
            </a>
          </div>
          <div className="image-contact col-12">
          <img src={contact} alt=""/>
          </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Contact;
