import React from "react";
import axios from "axios";

export default function WeatherApp(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp} degrees.`
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7d7f0db622e0aaac041c916319ba774a&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
