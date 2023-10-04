

import {React, useContext} from "react";
import ItemCard from "../ItemCard/itemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./ClothesSection.css";

const ClothesSection = ({ onSelectCard, onCreateModal, clothingItems, onCardClick, isLoggedIn}) => {
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser._id;
  const serverCards = clothingItems.filter((item) => {
    return item.owner === userId;
  });
  
  return (
    <div className="clothes__section">
      <div className="clothes__section-title-wrapper">
        <p className="clothes__section-title">Your items</p>
        <button
          type="submit"
          className="clothes__section-button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothing__section-cards">
      {serverCards.map((item) => (
          <ItemCard
            key={item._id} // Use item.id as the key
            item={item}
            onSelectCard={onSelectCard}
            isLoggedIn={isLoggedIn}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;



