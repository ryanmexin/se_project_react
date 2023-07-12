const weatherOptions = [
  {
    url: require("../../images/day/Sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/day/Fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    url: require("../../images/day/Rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../../images/day/Snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../images/day/Storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../../images/night/clearsky.svg").default,
    day: false,
    type: "Clear sky",
  },
  {
    url: require("../../images/night/Cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../../images/night/Fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../../images/night/Rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../../images/night/Snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../../images/night/Storm.svg").default,
    day: false,
    type: "storm",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("weather card");
  const imageScr = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
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
