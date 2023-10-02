import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import avatarImage from "../../images/avatar.svg";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const history = useHistory();
  const currentUser = useContext(CurrentUserContext);
  const Avatar = currentUser ? currentUser.avatar : "";
  const Name = currentUser ? currentUser.name : "";
  const showAvatar = Avatar !== "" ? true : false;

 const redirectToProfile = () => {
    // Redirect to the Profile page
    history.push("/profile");
  };


  
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
            + Add Clothes
          </button>
        </div>
        <Link to="/profile" className="nav__name" onClick={redirectToProfile}>
          {Name}
        </Link>
        <div>
        {showAvatar ? (
                      <img className="sidebar__avatar-picture " src={Avatar} alt="avatar" />
                    ) : (
                      <p className="sidebar__avatar-placeholder">{Name[0]?.toUpperCase()}</p>
                    )}
        </div>
      </div>
    </header>
  );
};

export default Header;
