
import React, { useContext } from "react";
import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  console.log("item modal");

  const { currentUser } = useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current clothing item
  const isOwn = selectedCard.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const modalDeleteClass = `modal__button-delete ${isOwn ? 'modal__button-delete_visible' : 'modal__button-delete_hidden'}`;

  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.link}
          alt={selectedCard.name}
        ></img>
        <div className="modal__info">
          <div className="modal__title">{selectedCard.name}</div>
          <div className="modal__weather-type">
            Weather Type: {selectedCard.weather}
          </div>
          <button
            className={modalDeleteClass}
            type="button"
            onClick={() => handleDeleteCard(selectedCard.id)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
