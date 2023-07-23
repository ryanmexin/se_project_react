//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

import { latitude } from "./constants";
import { longitude } from "./constants";
import { APIkey } from "./constants";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getForcastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then(processServerResponse)
    .catch((error) => {
      console.log(error);
    });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  // console.log(main);
  const temperature = main && main.temp;
  const weather = {temperature: {F: Math.round(temperature), C: Math.round((temperature -32) * 5/9)}}
  console.log(weather);
  return weather;
};

// weather.temperature.F = `${Math.round(data.main.temp)}°F`;
// weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`; 