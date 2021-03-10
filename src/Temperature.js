import React, { useState } from "react";
import "./Temperature.css";

import axios from "axios";

export default function Temperature() {
  let temperatureData = {
    temperature: 1,
    humidity: 60,
    wind: 10,
    img: "http://openweathermap.org/img/wn/01d@2x.png",
  };
  return (
    <div className="Temperature">
      <div class="row">
        <div class="col-6">
          <span class="current-temperature-box">
            <img src={temperatureData.img} class="float-left" alt="" />
            <span class="current-temperature">
              {temperatureData.temperature}
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
            <li>
              Humidity:
              <span class="humidity"> {temperatureData.humidity}%</span>
            </li>
            <li>
              Wind: <span class="wind"></span>
              {temperatureData.wind} km/h
            </li>
            <li>
              Precipitation: <span class="wind"></span>
              {""} %
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
