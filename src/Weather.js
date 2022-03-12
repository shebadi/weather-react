import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div>
      <WeatherSearch />
      <footer>
        This project was coded by Shabnam and is{" "}
        <a
          href="https://github.com/shebadi/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://laughing-tesla-b02d66.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
