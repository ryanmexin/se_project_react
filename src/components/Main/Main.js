import "./Main.css";
import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/itemCard";

function Main({ weatherTemp, onSelectCard }) {
  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
