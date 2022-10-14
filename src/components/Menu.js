import "../styles/Menu.scss";
import "../styles/Reset.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav class="nav">
        <Link className="nav-link active" to="/">Portfolio</Link>
        <Link className="nav-link" to="/about-me">About me</Link>
        <Link className="nav-link" to="/education">Education</Link>
        <Link className="nav-link" to="/experience">Experience</Link>
        <Link className="nav-link" to="/skills">Skills</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/collaborations">Collaborations</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Menu;
