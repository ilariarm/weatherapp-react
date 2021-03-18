import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecasts.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

//http://api.openweathermap.org/data/2.5/forecast?q=berlin&appid=7d7f0db622e0aaac041c916319ba774a&units=metric

export default function WeatherForecasts(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
        <WeatherForecastPreview data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "7d7f0db622e0aaac041c916319ba774a";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
