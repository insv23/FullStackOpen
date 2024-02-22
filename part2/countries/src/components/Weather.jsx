import axios from "axios";
import { useState, useEffect } from "react";

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);

  const lat = country.capitalInfo.latlng[0];
  const lon = country.capitalInfo.latlng[1];

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        return <div>Unable to get weather in {country.capital}</div>;
      });
  }, []);

  if (!weather) {
    return null;
  }

  const tempK = weather.main.temp;
  const tempC = (tempK - 273.15).toFixed(2);
  const icon = weather.weather[0].icon;
  const windSpeed = weather.wind.speed;

  return (
    <div>
      <h3>Weather in {country.capital}</h3>
      <div>temperature {tempC} Celcius</div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png `}
          alt="weather icon"
        />
      </div>
      <div>wind {windSpeed} m/s</div>
    </div>
  );
};

export default Weather;
