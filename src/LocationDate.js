import React from "react";
import "./LocationDate.css";

export default function LocationDate() {
  let locationData = {
    city: "Berlin",
    date: "Friday, 12th February",
    hour: "11:00",
    description: "Sunny",
  };
  return (
    <div className="LocationDate">
      <h1>{locationData.city}</h1>
      <ul>
        <li>{locationData.date}</li>
        <li>{locationData.hour}</li>
        <li>
          <span class="weather-description">{locationData.description}</span>
        </li>
      </ul>
    </div>
  );
}
