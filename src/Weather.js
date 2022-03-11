import React from "react";
import axios from "axios";
import bootstrap from "bootstrap";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div class="container">
      <div class="weather">
        <form id="search-form" class="mb-3">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                class="form-control mb-2 mr-sm-2 search-input"
                id="inlineFormInputName2"
                autofocus="on"
                autocomplete="off"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                class="form-control btn btn-outline-light shadow-sm w-100"
                value="Search"
                id="search"
              />
            </div>
          </div>
        </form>
        <h1 id="city"></h1>
        <ul>
          <li>
            last updated : <span id="date"></span>
          </li>
          <li></li>
          <li id="description"></li>
        </ul>
        <div class="row">
          <div class="col-6 clearfix">
            <img id="icon" class="float-left" />
            <span id="temperature" class="temperature"></span>
            <span class="units">
              <a id="celsius-link" class="active" href="#">
                {" "}
                °C{" "}
              </a>
              |
              <a id="fahrenheit-link" href="#">
                °F
              </a>
            </span>
          </div>
          <div class="col-6">
            <ul>
              <li>
                Wind: <strong id="wind"></strong>
              </li>
              <li>
                Humidity: <strong id="humidity"></strong>
              </li>
            </ul>
          </div>
        </div>
        <div class="weather-forecast" id="forecast"></div>
        <footer>
          This project was coded by Shabnam and is
          <a href="https://github.com/shebadi/weather-react" target="_blank">
            Open-sourced on GitHub
          </a>
          and
          <a href="https://laughing-tesla-b02d66.netlify.app/" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
