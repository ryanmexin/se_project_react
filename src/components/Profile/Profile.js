import React, {useState} from "react";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import EditProfileModal from "../EditProfileModal/EditProfileModal"

const Profile = ({ onSelectCard, onCreateModal, clothingItems, onSignOut, onOpenEditProfileModal, handleLikeClick }) => {
  
  
  return (
    <div className="profile">
      <SideBar 
      onSignOut={onSignOut}  onOpenEditProfileModal={onOpenEditProfileModal}
      />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        handleLikeClick={handleLikeClick}
      />
      
    </div>
  );
};

export default Profile;
