import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import { register } from "../../utils/auth"

const RegisterModal = ({ handleCloseModal, isOpen, OnClickLogIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setUrl] = useState("");

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register({ email, password, name, avatar });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    return <Redirect to="/login" />;
  };
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <h2>Sign up</h2>
      <label className="modal__label">
        Email*
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
        Password*
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
      <label className="modal__label">
        Name
        <input
          className="modal__input-name"
          type="text"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>
      <label className="modal__label">
        Avatar
        <input
          className="modal__input-link"
          type="url"
          name="avatar"
          placeholder="Image URL"
          minLength="1"
          maxLength="300"
          value={avatar}
          onChange={handleUrlChange}
        ></input>
      </label>
      <div className="button-container">
        <button
          className="modal__submit-button"
          type="submit"
          name="button"
          onChange={handleSubmit}
        >
          Next
        </button>
        <button
          className= "modal__form-button"
          type="button"
          name="button"
          onChange={handleLogin}
          onClick={OnClickLogIn}
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
