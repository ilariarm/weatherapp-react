import "./App.css";
import "./Weather.css";
import "./Footer.css";

import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="Berlin" />
        <Footer />
      </div>
    </div>
  );
}
