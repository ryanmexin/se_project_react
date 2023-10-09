import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";


const LoginModal = ({ handleCloseModal, isOpen, onClickSignUp, handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin( email, password );
  };
  const handleRegister = (e) => {
    e.preventDefault();
    history.push("/signup");
  };
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={"Log In"}
      hasRedirectButton={true}
      redirectButtonText="or Register"
      redirectButtonClick={onClickSignUp}
    >
      <h2>Log in</h2>
      <label className="modal__label">
        Email
        <input
          className="modal__email"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__password"
          type="text"
          name="password"
          placeholder="Password"
          minLength="1"
          maxLength="8"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </label>
      <div className="button-container">

      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
