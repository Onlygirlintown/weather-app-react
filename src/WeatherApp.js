import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherApp.css";
import SearchForm from "./SearchForm";

export default function WeatherApp() {
  return (
    <div className="container">
      <SearchForm />
    </div>
  );
}
