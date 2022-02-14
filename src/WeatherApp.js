import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  function displayWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ff603b4615415a7ed5f7b26e07b59db6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="formInput"
          placeholder="type in a city here!"
          onChange={updateCity}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <div className="row">
        <div className="col-6 CurrentDayInfo">
          <h1>Monday</h1>
          <img src={icon} />
          <span>{temperature}F/C</span>
          <ul className="CurrentDayStats">
            <li>12:00pm</li>
            <li className="text-capitalize">{description}</li>
            <li>Wind: {wind} mph</li>
            <li>Humidty: {humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
