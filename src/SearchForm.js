import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function SearchForm() {
  const [weatherData, setWeatherData] = useState(null);

  function handleResponse(response) {
    setWeatherData(response.data);
  }

  function handleSearch(event) {
    event.preventDefault();

    let city = "london";
    let apiKey = "ff603b4615415a7ed5f7b26e07b59db6";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
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
      <WeatherInfo data={weatherData} />
    </div>
  );
}
