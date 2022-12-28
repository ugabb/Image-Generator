import "./Navbar.css";
import { RiHomeLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
//GiThreePointedShuriken

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to={"/"}>
          <RiHomeLine />
        </Link>
        <Link to={"create"}>Create!</Link>
        <Link to={"/"}>
          <FiGithub />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
