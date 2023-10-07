import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";


const LoginModal = ({ handleCloseModal, isOpen, onClickSignUp, handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    //e.preventDefault();
    handleLogin( email, password );
  };
  const handleRegister = (e) => {
    e.preventDefault();
    return <Redirect to="/signup" />;
  };
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
      <button
        className="modal__submit-button"
        type="submit"
        name="button"
        onChange={handleSubmit}
      >
       Log In
      </button>
      <button
        className="modal__submit-register-button"
        type="button"
        name="button"
        onChange={handleRegister}
        onClick={onClickSignUp}
      >
        or Register
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
