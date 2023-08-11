import React, {useState} from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
          Download City Code
        | Developed by{" "}
          Rahul Sharma
        | Powered by{" "}
          Weather App
      </div>
    </React.Fragment>
  );
}
export default App;
