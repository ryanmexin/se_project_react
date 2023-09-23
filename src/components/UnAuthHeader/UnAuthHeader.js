import { Link } from "react-router-dom";
import "./UnAuthHeader.css";
import avatarImage from "../../images/avatar.svg";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const UnAuthHeader = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });



  
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
        <button className="nav__button" type="text" onClick={onCreateModal}>
            Sign Up
          </button>
          <button className="nav__button" type="text" onClick={onCreateModal}>
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default UnAuthHeader;