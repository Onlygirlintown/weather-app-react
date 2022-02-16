import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function displayWeather(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      city: response.data.name,
      date: "Monday 12:00pm",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (ready) {
    return (
      <div className="container">
        <form>
          <input
            type="search"
            className="formInput"
            placeholder="type in a city here!"
            autoFocus="on"
          />
          <button type="submit" className="btn btn-primary">
            🔎
          </button>
        </form>
        <div className="row">
          <div className="col-6 CurrentDayInfo">
            <h1 className="text-capitalize">{weatherData.city}</h1>
            <img src={weatherData.iconUrl} />
            <span className="temperatureDegree">{weatherData.temperature}</span>
            <span className="degreeSymbol">°</span>
            <span>
              <a href="/" className="celsiusDegree">
                C
              </a>
            </span>
            <ul className="CurrentDayStats">
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Wind: {weatherData.wind} mph</li>
              <li>Humidty: {weatherData.humidity} %</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Miami";
    let apiKey = "ff603b4615415a7ed5f7b26e07b59db6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(displayWeather);

    return "Loading!";
  }
}
