import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("weather card");
  const imageScr = weatherOptions.filter((item) => {
    console.log(item);
    return item.day === day && item.type === type;
  });
  console.log(imageScr);
  console.log(imageScr[0].url);

  const imageSrcUrl = imageScr[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} className="weather__image" alt="Sunny" />
    </section>
  );
};

export default WeatherCard;
