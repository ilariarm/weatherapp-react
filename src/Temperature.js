import React, { useState } from "react";
import "./Temperature.css";

import axios from "axios";

export default function Temperature(props) {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
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
    );
  } else {
    const apiKey = "7d7f0db622e0aaac041c916319ba774a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
