import { Link } from "react-router-dom";
import "../styles/Reset.scss";

const HamburguerMenu = () => {
  return (
    <div className="hamburguer-menu-container">
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <nav class="nav">
              <Link className="nav-link active" to="/">
                Portfolio
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
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default HamburguerMenu;
