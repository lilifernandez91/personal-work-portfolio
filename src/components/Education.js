import images from "../images/estudios.jpeg";
import imageOne from "../images/logo-adalab.svg";
import imageTwo from "../images/Logotipo-UDELAR.png";
import imageThree from "../images/images.jpeg";
import "../styles/Education.scss";
import Footer from "./Footer";
import Menu from "./Menu";
import Portfolio from "./Portfolio";

const Education = () => {
  return (
    <div>
      <>
        <header>
          <Menu />
          <Portfolio />
        </header>
        <div>
          <div className="education-container container">
            <div className="col-12 col-lg-8">
              <h1 className="title">Education</h1>
              <ul className="list-container">
                <div>
                  <li className="list">
                    <img className="image" src={imageOne} alt="" />
                    Adalab, digital programming school for women. Front End
                    development intensive course. Year: 2022.
                  </li>
                </div>
                <div>
                  <li className="list">
                    <img className="image" src={imageTwo} alt="" />
                    Faculty of Medicine of the University of the Republic,
                    Montevideo, Uruguay. Approval of the Bachelor's degree in
                    Speech Therapy. Year: 2018.
                  </li>
                </div>
                <div>
                  <li className="list">
                    <img className="image" src={imageThree} alt="" />
                    Villa Clara University of Medical Sciences, Cuba. Degree in
                    speech therapy. Year: 2010-2015.
                  </li>
                </div>
              </ul>
            </div>
            <div className="col-12 col-lg-4">
              <img className="img" src={images} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Education;
