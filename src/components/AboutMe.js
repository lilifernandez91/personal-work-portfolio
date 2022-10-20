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
          <div className="row">
            <div className="col-12 col-lg-8">
              <h1 className="title">About me</h1>
              <p className="description">
                I studied a degree in speech therapy at the University of
                Sciences Doctors from Villa Clara, Cuba. A year after finishing
                my degree I went to live to another country, Uruguay. For almost
                6 years I practiced my profession and attended children and
                adults with speech and hearing difficulties. A Although
                professionally I felt fulfilled, my dream was to live in Spain.
                Given the opportunity to reside in Spain, he did not I thought
                twice and jumped in, but since nothing is perfect I found myself
                with endless obstacles to exercise. As a result of this, I
                searched other opportunities for professional development and
                for friendships that are linked to the IT sector and the
                testimony of a former adalaber was born curiosity and Adalab
                appeared with a very interesting proposal and this story is
                starting now.... I have attended a bootcamp of "Front-End
                Programming", in which I have discovered an exciting world that
                has sparked my interest in technology and the need to take on
                new challenges and be constantly learning.
              </p>
            </div>
            <div className="col-12 col-lg-4 image-about-me-container">
              <img className="image-about-me" src={images} alt=""/>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default AboutMe;
