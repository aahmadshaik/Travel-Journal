import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; // Correct import for free version

const Header = () => {
  return (
    <header>
      <nav>
        <p>
          <span className="logo">
            <FontAwesomeIcon
              icon={faGlobe}
              size="21"
              style={{ marginRight: "10px" }}
            />
          </span>
          My Travel Journal.
        </p>
      </nav>
    </header>
  );
};

export default Header;
