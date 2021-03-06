import React, { useState } from "react";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import WeatherForecasts from "./WeatherForecasts";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "7d7f0db622e0aaac041c916319ba774a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // search a city
    search();
  }

  function handleCityChange(event) {
    //update the city
    setCity(event.target.value);
  }

  function searchLocation(position) {
    const apiKey = "7d7f0db622e0aaac041c916319ba774a";
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
    return (
      <div class="weather-app">
        <form class="search-form" onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-4">
              <input
                type="search"
                placeholder="Enter your city..."
                class="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="form-control btn btn-primary"
              />
            </div>
            <div class="col-2">
              <input
                class="btn btn-outline-primary"
                type="submit"
                value="📍"
                id="pin"
                onClick={getCurrentPosition}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecasts city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
