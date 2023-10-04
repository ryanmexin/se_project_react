import { React, useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const cardId = item._id;
  console.log(item._id)
  const userId = currentUser ? currentUser._id : "";
  const isLiked = item.likes.some((id) => id === currentUser?._id);
  const likeButtonClass = isLiked
    ? "card__like-button"
    : "card__like-button card__like-button-inactive";

  const handleLikeClick = () => {
    onCardLike({ _id: cardId, isLiked: isLiked, user: userId });
    console.log(cardId, isLiked, userId);
  };

  return (
    <div className="card">
      <div className="card_info">
        <span className="card_name">{item.name}</span>
        {isLoggedIn ? (
          <button
            className={likeButtonClass}
            type="button"
            onClick={handleLikeClick}
          />
        ) : (
          <button className="card__like-button-hidden" />
        )}
      </div>
      <img
        src={item.imageUrl}
        className="card_image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
