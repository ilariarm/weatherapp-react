import React, { useState } from "react";
import "./Weather.css";
import "./LocationDate.css";

import LocationDate from "./LocationDate";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div class="weather-app">
        <form class="search-form">
          <div class="row">
            <div class="col-4">
              <input
                type="search"
                placeholder="Enter your city..."
                class="form-control"
                autoComplete="off"
                autoFocus="on"
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
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city} </h1>
        <LocationDate date={weatherData.date} />

        <div className="Temperature">
          <div class="row">
            <div class="col-6">
              <span class="current-temperature-box">
                <img
                  src={weatherData.iconUrl}
                  class="float-left"
                  alt={weatherData.description}
                />
                <span class="current-temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span class="units">
                  °{" "}
                  <a href="/" class="active">
                    C
                  </a>{" "}
                  |<a href="/">F</a>
                </span>
              </span>
            </div>
            <div class="col-6">
              <ul>
                <li class="text-capitalize">
                  <span class="description"></span>
                  {weatherData.description}
                </li>
                <li>
                  Humidity:
                  <span class="humidity">
                    {" "}
                    {Math.round(weatherData.humidity)}%
                  </span>
                </li>
                <li>
                  Wind: <span class="wind"></span>
                  {Math.round(weatherData.wind)} km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7d7f0db622e0aaac041c916319ba774a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
