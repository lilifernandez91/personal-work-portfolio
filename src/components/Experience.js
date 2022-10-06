import images from "../images/experiencia laboral.jpeg";
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
        <div>
        <div>
        <h1>Experience</h1>
       <ul>
        <p>Bachelor of Speech Therapy in:</p>
        <li>Peñarol Clinic and Centro Oeste Clinic. Montevideo, Uruguay. Year 2019- 2021.</li>
        <li>Ciprés Clinic and "Franklin Delano Roosevelt" school. Montevideo, Uruguay. Year 2017-2019.</li>
        <li>Provincial Polyclinic "Chiqui Gómez". Villa Clara, Cuba. Year 2015-2017.</li>
       </ul>
       <ul>
        <p>Competencies:</p>
        <li>Prevention, evaluation, diagnosis and treatment in children and adults with communication disorders.</li>
        <li>Rehabilitation of children and adults with cochlear implants. auditory-verbal therapy.</li>
        <li>Rehabilitation of children with neurological pathologies. Swallowing therapy. Alternative and augmentative communication systems.</li>
       </ul>
        </div>
        <div>
        <img
          className="img"
          src={images}
          alt=""
        />
        </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Experience;
