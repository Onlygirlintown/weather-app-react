import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherApp.css";

export default function WeatherApp() {
  function handleResponse(response) {
    alert(response.data.main);
  }

  let city = "New York";
  let apiKey = "ff603b4615415a7ed5f7b26e07b59db6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="container">
      <form>
        <input
          type="search"
          className="formInput"
          placeholder="type in a city here!"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <div className="row">
        <div className="col-6 CurrentDayInfo">
          <h1>Monday!!!!</h1>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <span>70°F</span>
          <ul className="CurrentDayStats">
            <li>12:00pm</li>
            <li>Clear Skies!!!</li>
            <li>Wind= 10mph</li>
            <li>Humidty: 10%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
