import React from "react";
import "./Temperature.css";

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
          </ul>
        </div>
        <div class="card text-center">
          <div class="row">
            <div class="col">
              <h2>Sat</h2>
              <img src={temperatureData.img} class="float-left" alt="" />
              <h3>4° | -2°</h3>
            </div>
            <div class="col">
              <h2>Sun</h2>
              <img src={temperatureData.img} class="float-left" alt="" />
              <h3>2° | 0°</h3>
            </div>
            <div class="col">
              <h2>Mon</h2>
              <img src={temperatureData.img} class="float-left" alt="" />
              <h3>3° | -1°</h3>
            </div>
            <div class="col">
              <h2>Tue</h2>
              <img src={temperatureData.img} class="float-left" alt="" />
              <h3>1° | -3°</h3>
            </div>
            <div class="col">
              <h2>Tue</h2>
              <img src={temperatureData.img} class="float-left" alt="" />
              <h3>1° | -3°</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
