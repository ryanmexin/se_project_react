import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal__image" src={selectedCard.link}></img>
        <div className="modal__info">
          <div className="modal__title">{selectedCard.name}</div>
          <div className="modal__weather-type">
            Weather Type: {selectedCard.weather}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
