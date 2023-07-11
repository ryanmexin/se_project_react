import "./Main.css";
import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/itemCard";

function Main({ weatherTemp, onSelectCard }) {
  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        <span className="weather__suggest">Today is {weatherTemp} / You may want to wear: </span>
        <div className="card_items">
          {defaultClothingItems.map((item) => (
            <ItemCard key= {item?.id || item?._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
