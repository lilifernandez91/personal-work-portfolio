import "../styles/Main.scss";
import "../styles/Reset.scss";
import aboutme from "../images/about-me.png";
import education from "../images/education.png";
import experience from "../images/experience.png";
import skills from "../images/skills.png";
import projects from "../images/projects.png";
import collaboration from "../images/collaborations.png";
import contact from "../images/contact.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="box-container container">
      <div className="box-1 row">
        <div className="col-12 col-lg-6">
          <Link className="container-image" to="/about-me">
            <img className="image-main" src={aboutme} alt="" />
          </Link>
          <Link className="container-image" to="/education">
            <img className="image-main" src={education} alt="" />
          </Link>
          <Link className="container-image" to="/experience">
            <img className="image-main" src={experience} alt="" />
          </Link>
        </div>
        <div className="col-12 col-lg-6">
          <Link className="container-image" to="/skills">
            <img className="image-main" src={skills} alt="" />
          </Link>
          <Link className="container-image" to="/projects">
            <img className="image-main" src={projects} alt="" />
          </Link>
          <Link className="container-image" to="/collaborations">
            <img className="image-main" src={collaboration} alt="" />
          </Link>
        </div>
        <div className="col-12">
            <Link className="container-image" to="/contact">
              <img className="image-main" src={contact} alt="" />
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Main;
