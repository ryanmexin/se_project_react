

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ onCreateModal, onClickSignUp, onClickLogIn, isLoggedIn }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const history = useHistory();
  const currentUser = useContext(CurrentUserContext);
  const avatar = currentUser ? currentUser.avatar : "";
  const name = currentUser ? currentUser.name : "";
  const showAvatar = avatar !== "" ? true : false;

  const redirectToProfile = () => {
    // Redirect to the Profile page
    history.push("/profile");
    console.log("moved to profile");
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
        <div className="header__nav">
          {isLoggedIn ? (
            <>
              <button className="nav__button" type="text" onClick={onCreateModal}>
                + Add Clothes
              </button>
              <Link to="/profile" className="nav__name" >
                {name}
              </Link>
              <div>
                {showAvatar ? (
                  <img className="sidebar__avatar-picture " src={avatar} alt="avatar" />
                ) : (
                  <p className="sidebar__avatar-placeholder">{name[0]?.toUpperCase()}</p>
                )}
              </div>
            </>
          ) : (
            <>
              <button className="nav__button" type="text" onClick={onClickSignUp}>
                Sign Up
              </button>
              <button className="nav__button" type="text" onClick={onClickLogIn}>
                Log In
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;





