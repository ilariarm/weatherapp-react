import React from "react";

import "./LocationDate.css";

import LocationDate from "./LocationDate";

import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city} </h1>
      <LocationDate date={props.data.date} />

      <div className="Temperature">
        <div class="row">
          <div class="col-6">
            <span class="current-temperature-box">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
              </div>
              <WeatherTemperature celsius={props.data.temperature} />
            </span>
          </div>
          <div class="col-6">
            <ul>
              <li class="text-capitalize">
                <span class="description"></span>
                {props.data.description}
              </li>
              <li>
                Humidity:
                <span class="humidity">
                  {" "}
                  {Math.round(props.data.humidity)}%
                </span>
              </li>
              <li>
                Wind: <span class="wind"></span>
                {Math.round(props.data.wind)} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
