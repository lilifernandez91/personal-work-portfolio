import images from "../images/estudios.jpeg";
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
          <div>
            <h1>Education</h1>
            <ul>
              <li>
                Adalab: Digital programming school for women. Front End
                development intensive course. Year: 2022.
              </li>
              <li>
                Faculty of Medicine of the University of the Republic,
                Montevideo, Uruguay. Approval of the Bachelor's degree in Speech
                Therapy. Year: 2018.
              </li>
              <li>
                Villa Clara University of Medical Sciences, Cuba. Degree in
                speech therapy. Year: 2010-2015.
              </li>
            </ul>
          </div>
          <div>
            <img  src={images} alt="" />
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Education;
