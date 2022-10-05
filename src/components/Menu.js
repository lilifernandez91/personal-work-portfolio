import "../styles/Menu.scss"

const Menu = () => {
  return (
    <div>
      <nav class="nav">
        <a class="nav-link active" aria-current="page" href="#">
          Portfolio
        </a>
        <a class="nav-link" href="#">
          About me
        </a>
        <a class="nav-link" href="#">
          Education
        </a>
        <a class="nav-link" href="#">
          Experience
        </a>
        <a class="nav-link" href="#">
          Skills
        </a>
        <a class="nav-link" href="#">
          Projects
        </a>
        <a class="nav-link" href="#">
          Collaborations
        </a>
        <a class="nav-link" href="#">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Menu;
