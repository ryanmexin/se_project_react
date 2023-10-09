import React, {useState} from "react";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import EditProfileModal from "../EditProfileModal/EditProfileModal"

const Profile = ({ onSelectCard, onCreateModal, clothingItems, onSignOut, onOpenEditProfileModal, onCardClick, isLoggedIn }) => {
  

  // const userAvatar = userData && userData.avatar ? userData.avatar : getDefaultAvatar(userData);

  // Function to get the default avatar (initial letter)
  // const getDefaultAvatar = (userData) => {
  //   if (userData && userData.name) {
  //     const initials = userData.name.charAt(0).toUpperCase();
  //     return (
  //       <div className="default-avatar">
  //         <span>{initials}</span>
  //       </div>
  //     );
  //   }
  //   return null; // Return null if there's no user data or name
  // };
  
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
        isLoggedIn={isLoggedIn}
      />
      
    </div>
  );
};

export default Profile;
