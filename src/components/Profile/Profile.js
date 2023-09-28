import React, {useState} from "react";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import EditProfileModal from "../EditProfileModal/EditProfileModal"

const Profile = ({ onSelectCard, onCreateModal, clothingItems, handleSubmit }) => {
  
  
const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  
const openEditProfileModal = () => {
  setIsEditProfileModalOpen(true);
};
  
const closeEditProfileModal = () => {
  setIsEditProfileModalOpen(false);
};
  
  
  return (
    <div className="profile">
      <SideBar 
      
      
      />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Profile;
