import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import Bestproduct from "./SubCompo/Bestproduct";
import Vegetable from "./SubCompo/Vegetable";
import TrendingProducts from "./SubCompo/TrendingProducts";

const About = () => {
  return (
    <div className="main-container">
      <div className="about-container">
        <div className="img-container"> </div>
        <div className="text-container">
          <div>
            <img className="leaf1" src="src/assets/leaf.png" alt="leaf" />
          </div>
          <h4 style={{ marginBottom: "1rem" }}>Best Quality Products </h4>
          <h1 style={{ fontSize: "60px", marginBottom: "1.5rem" }}>
            Join the Orgainc Movement !{" "}
          </h1>
          <p style={{ lineHeight: "28x" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            quisquam provident voluptatibus veniam. Pariatur similique sunt.
          </p>
          <div>
            <button className="icon-button">
              <FontAwesomeIcon icon={faCoffee} />
              <span>SHOP NOW</span>
            </button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="feature-item">
          <div className="item">
            <h2> Free Shipping</h2>
            <h3>Above $5 Only </h3>
          </div>
        </div>
        <div className="feature-item">
          <div className="item">
            <h2> Free Shipping</h2>
            <h3>Above $5 Only </h3>
          </div>
        </div>
        <div className="feature-item">
          <div className="item">
            <h2> Free Shipping</h2>
            <h3>Above $5 Only </h3>
          </div>
        </div>
        <div className="feature-item">
          <div className="item">
            <h2> Free Shipping</h2>
            <h3>Above $5 Only </h3>
          </div>
        </div>
      </div>
      <Bestproduct></Bestproduct>
      <Vegetable></Vegetable>
      <TrendingProducts></TrendingProducts>
    </div>
  );
};

export default About;
