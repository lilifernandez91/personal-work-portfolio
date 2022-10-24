import { useEffect, useState } from "react";
import "../styles/Menu.scss";
import "../styles/Reset.scss";
import { Link } from "react-router-dom";
import HamburguerMenu from "./HamburguerMenu";

const Menu = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = 992;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div>
      {width >= isMobile ? (
        <nav class="nav">
          <Link className="nav-link active" to="/">
            Inicio
          </Link>
          <Link className="nav-link" to="/about-me">
            About me
          </Link>
          <Link className="nav-link" to="/education">
            Education
          </Link>
          <Link className="nav-link" to="/experience">
            Experience
          </Link>
          <Link className="nav-link" to="/skills">
            Skills
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/collaborations">
            Collaborations
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </nav>
      ) : (
        <HamburguerMenu />
      )}
    </div>
  );
};

export default Menu;
