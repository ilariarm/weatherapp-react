import "./WeatherApp.css";
import "./LocationDate.css";
import "./Temperature.css";
import "./Footer.css";
import "./Comingdays.css";

import LocationDate from "./LocationDate";
import Temperature from "./Temperature";
import Footer from "./Footer";
import ComingdaysTemp from "./Comingdays";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div class="container">
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

          <LocationDate />

          <Temperature defaultCity="Berlin" />

          <ComingdaysTemp />
        </div>
        <Footer />
      </div>
    </div>
  );
}
