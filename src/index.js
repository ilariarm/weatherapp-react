import { StrictMode } from "react";
import ReactDOM from "react-dom";

import WeatherApp from "./WeatherApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>,
  rootElement
);
