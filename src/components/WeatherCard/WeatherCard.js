import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("weather card");
  const weatherOption = weatherOptions.filter((item) => {
    console.log(item);
    return item.day === day && item.type === type;
  });
  console.log(weatherOption);
  console.log(weatherOption[0].url);

  const imageSrcUrl = weatherOption[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} className="weather__image" alt="Sunny" />
    </section>
  );
};

export default WeatherCard;
