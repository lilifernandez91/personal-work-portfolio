import "../styles/Education.scss";
import "../styles/Reset.scss";
import images from "../images/estudios.jpeg";
import imageOne from "../images/logo-adalab.svg";
import imageTwo from "../images/Logotipo-UDELAR.png";
import imageThree from "../images/images.jpeg";
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
           <div className="row">
           <div className="col-12 col-lg-8">
              <h1 className="title">Education</h1>
              <ul className="list-container">
                <div>
                  <li className="list">
                    <img className="image" src={imageOne} alt="" />
                    <p>Adalab, digital programming school for women. Front End
                    development intensive course. Year: 2022.</p>
                  </li>
                </div>
                <div>
                  <li className="list">
                    <img className="image" src={imageTwo} alt="" />
                    <p>Faculty of Medicine of the University of the Republic,
                    Montevideo, Uruguay. Approval of the Bachelor's degree in
                    Speech Therapy. Year: 2018.</p>
                  </li>
                </div>
                <div>
                  <li className="list">
                    <img className="image" src={imageThree} alt="" />
                    <p>Villa Clara University of Medical Sciences, Cuba. Degree in
                    speech therapy. Year: 2010-2015.</p>
                  </li>
                </div>
              </ul>
            </div>
            <div className="col-12 col-lg-4 image-education-container">
              <img className="image-education" src={images} alt="" />
            </div>
           </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Education;
