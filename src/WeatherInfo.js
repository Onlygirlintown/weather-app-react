import React from "react";

export default function WeatherInfo(props) {
  console.log(props);
  return (
    <div className="col-6 Current-Day-Info">
      <h1 className="text-capitalize">San Diego</h1>
      <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
      <span className="temperatureDegree">
        {Math.round(props.data.main.temp)}
      </span>
      <span className="degreeSymbol">°</span>
      <span>
        <a href="/" className="celsiusDegree">
          C
        </a>
      </span>
      <ul className="CurrentDayStats">
        <li>time</li>
        <li className="text-capitalize">{props.data.weather[0].description}</li>
        <li>Wind: {Math.round(props.data.wind.speed)}mph</li>
        <li>Humidty: {props.data.main.humidity}% </li>
      </ul>
    </div>
  );
}
