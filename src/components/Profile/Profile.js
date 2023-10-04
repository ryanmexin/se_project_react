import React, {useState} from "react";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import EditProfileModal from "../EditProfileModal/EditProfileModal"

const Profile = ({ onSelectCard, onCreateModal, clothingItems, onSignOut, onOpenEditProfileModal, onCardClick }) => {
  
  
  return (
    <div className="profile">
      <SideBar 
      onSignOut={onSignOut}  onOpenEditProfileModal={onOpenEditProfileModal}
      />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onCardClick={onCardClick}
      />
      
    </div>
  );
};

export default Profile;
