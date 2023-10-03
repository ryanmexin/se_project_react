

import React from "react";
import ItemCard from "../ItemCard/itemCard";

import "./ClothesSection.css";

const ClothesSection = ({ onSelectCard, onCreateModal, clothingItems }, item, currentUser) => {
  const isOwn = item.owner?._id === currentUser?._id;
  const parsedCards = clothingItems.filter((item) => item.weather);
  
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
         {isOwn ? parsedCards.map((item) => (
          <ItemCard
            key={item._id} // Use item.id as the key
            item={item}
            onSelectCard={onSelectCard}
          />
        )):""}
      </div>
    </div>
  );
};

export default ClothesSection;



