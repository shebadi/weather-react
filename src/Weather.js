import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The ${response.data.main.temp}`);
  }
  let apiKey = "7a088f73941e6a828a29489663c7f3f7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <h1>
      Hello Weather
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </h1>
  );
}
