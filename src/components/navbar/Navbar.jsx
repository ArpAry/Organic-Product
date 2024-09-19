import Modal from "../../modules/modal/Modal";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import data from "../../assets/data";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="left-container">
        <Link to="/">
          <img src={data[0]} alt="organic-store" className="i1" />{" "}
        </Link>
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <li className="nav-li">Everything </li>
        </Link>

        <Link to="/shop" style={{ textDecoration: "none" }}>
          <li className="nav-li">Grocery</li>
        </Link>

        <Link to="/shop" style={{ textDecoration: "none" }}>
          <li className="nav-li">Juice </li>
        </Link>
      </div>
      <div className="right-container">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li className="nav-li">About</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li className="nav-li">Contact</li>
        </Link>
        <li className="nav-li" style={{ display: "flex" }}>
          <Modal></Modal>
          <FaBasketShopping></FaBasketShopping>
        </li>
        <li className="nav-li">
          <IoPerson></IoPerson>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
