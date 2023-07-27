import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWIthForm";

const AddItemModal = ({ handleCloseModal, handleAddItemSubmit, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeatherType] = useState("");
  const handleWeatherType = (e) => {
    console.log(e.target.value);
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemSubmit({ name, link, weather });
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__form">
        <label className="modal__label">
          Name
          <input
            className="modal__input-name"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="modal__label">
          Image
          <input
            className="modal__input-name"
            type="url"
            name="link"
            minLength="1"
            placeholder="Image URL"
            value={link}
            onChange={handleUrlChange}
          />
        </label>
      </div>
      <div>
        <p className="modal__label">Select the Weather Type</p>
        <div className="weather__selections">
          <div>
            {" "}
            <input className="form__input" 
            type="radio" 
            id="hot" 
            value="hot"
            name="weatherType"
            onChange={handleWeatherType}
            />
            <label>
              <span>Hot</span>
            </label>
          </div>
          <div>
            {" "}
            <input
              className="form__input"
              type="radio"
              id="warm"
              value="warm"
              name="weatherType"
              onChange={handleWeatherType}
            />
            <label>Warm</label>
          </div>
          <div>
            {" "}
            <input
              className="form__input"
              type="radio"
              id="cold"
              value="cold"
              name="weatherType"
              onChange={handleWeatherType}
            />
            <label>Cold</label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
