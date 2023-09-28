import { Link } from "react-router-dom";
import "./UnAuthHeader.css";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const UnAuthHeader = ({ onClickSignUp, OnClickLogIn }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });



  
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={avatarImage} alt="logo" />
          </Link>
        </div>
        <div>{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
        <button className="nav__button" type="text" onClick={onClickSignUp}>
            Sign Up
          </button>
          <button className="nav__button" type="text" onClick={OnClickLogIn}>
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default UnAuthHeader;