import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import { register } from "../../utils/auth"

const RegisterModal = ({ handleCloseModal, isOpen, onClickLogIn, handleRegistration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setUrl] = useState("");
  const history = useHistory();

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
    handleRegistration( email, password, name, avatar );
  };
  const handleLogin = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={"Next"}
      hasRedirectButton={true}
      redirectButtonText="or Log in"
      redirectButtonClick={onClickLogIn}
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
          required
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
    </ModalWithForm>
  );
};

export default RegisterModal;