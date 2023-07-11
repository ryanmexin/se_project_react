import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card">
      <span className="card_name">{item.name}</span>
        <img
          src={item.link}
          className="card_image"
          alt={item.name}
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
