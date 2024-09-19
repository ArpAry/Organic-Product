import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./Button.css";
const Button = () => {
  return (
    <div>
      <button className="icon-button">
        <FontAwesomeIcon icon={faCoffee} />
        <span>SHOP NOW</span>
      </button>
    </div>
  );
};
export default Button;
