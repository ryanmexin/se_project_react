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
          <img src={logo} alt="logo" />
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
        <div className="nav__name">Name</div>
        <div>
          <img src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
