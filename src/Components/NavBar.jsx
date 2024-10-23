import { Link } from "react-router-dom";
import "../styles.css";
export default function NavBar() {
  return (
    <div className="nav-styl">
      <ul>
        <li>
          <Link to="/Home" className=" list-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className=" list-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/Skills" className=" list-item">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/Contact" className=" list-item">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
