import "../styles/Home.css";
import Data from "../Data/Data.js";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; // Correct import for free version

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <section>
      {Data.map((info, index) => {
        return (
          <div key={index} className="container">
            <div className="Img-box">
              <img src={info.image} alt="Image" />
            </div>

            <div className="data-box">
              <p className="location">
                <span className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                {info.location}
                <span className="link">
                  <a href={info.link}>View on google map</a>
                </span>
              </p>
              <p className="name">{info.name}</p>
              <p className="date">{info.date}</p>
              <p className="text">{info.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Home;
