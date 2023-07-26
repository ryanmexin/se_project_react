import { Link } from "react-router-dom";
import "./Header.css";
import avatarImage from "../../images/avatar.svg";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/" >
          <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button className="nav__button" type="text" onClick={onCreateModal}>
            + Add Clothes
          </button>
        </div>
        <Link to= "/profile" className="nav__name">Ryan Mexin</Link>
        <div>
          <img src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
