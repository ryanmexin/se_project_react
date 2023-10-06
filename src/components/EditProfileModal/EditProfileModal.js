import React, { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


const EditProfileModal = ({ handleCloseModal, isOpen, onSubmit }) => {
  const currentUser = useContext(CurrentUserContext)
  const [nameValue, setNameValue] = useState(currentUser.name);
  const [avatarValue, setAvatarValue] = useState(currentUser.avatar);

  const handleNameChange = (evt) => setNameValue(evt.target.value);
  const handleAvatarChange = (evt) => setAvatarValue(evt.target.value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ name: nameValue, avatar: avatarValue });
  };

  
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <h2>Change Profile Data</h2>
      <label className="modal__label">
        Name
        <input
          className="modal__input-name"
          type="text"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={nameValue}
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
          value={avatarValue}
          onChange={handleAvatarChange}
        ></input>
      </label>
      <button
        className="modal__submit-button"
        type="submit"
        name="button"
        onClick={handleSubmit}
      >
        Submit Changes
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;