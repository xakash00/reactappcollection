import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Weather.css";
import Cards from "./Cards";
import Form from "./Form";

const WeatherApi = () => {
  const [city, setCity] = useState("");
  const [cityFromClick, setCityFromClick] = useState("goa");
  const [temp, setTemp] = useState({
    name: "",
    country: "",
    region: "",
    icon: "",
    text: "",
    temperature: "",
    feels: "",
    time: "",
    humidity: "",
    timezone: "",
    wind:"",
  });

  let { REACT_APP_API_KEY } = process.env;

  const getWeather = async () => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${REACT_APP_API_KEY}&q=${cityFromClick}&aqi=no`
    );
    setTemp({
      name: response.data.location.name,
      region: response.data.location.region,
      country: response.data.location.country,
      text: response.data.current.condition.text,
      icon: response.data.current.condition.icon,
      temperature: response.data.current.temp_c,
      feels: response.data.current.feelslike_c,
      time: response.data.location.localtime,
      humidity: response.data.current.humidity,
      wind:response.data.current.wind_mph,
      timezone: response.data.location.tz_id,
    });
  };

  useEffect(() => {
     /* eslint-disable */
    getWeather();
  }, [cityFromClick]);

  const handleClick = () => {
    setCityFromClick(city);
  };

  return (
    <>
      <div className="Main container">
        <div>
          <Form handleClick={handleClick} city={city} setCity={setCity} />
        </div>
        <Header
          icon={temp.icon}
          name={temp.name}
          text={temp.text}
          temperature={temp.temperature}
          country={temp.country}
          region={temp.region}
          time={temp.time}
        />
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Cards
            feels={temp.feels}
            humidity={temp.humidity}
            wind={temp.wind}
            timezone={temp.timezone}
          />
        </div>
      </div>
    </>
  );
};

export default WeatherApi;
