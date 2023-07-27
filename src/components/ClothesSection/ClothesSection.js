import React from "react";
import ItemCard from "../ItemCard/itemCard";
import "./ClothesSection.css";

const ClothesSection = ({ onSelectCard, onCreateModal, clothingItems }) => {
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
        {clothingItems.map((item) => {
          console.log(clothingItems);
          return (
            <ItemCard
              key={item?._id || item?.id}
              item={item}
              onSelectCard={onSelectCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
