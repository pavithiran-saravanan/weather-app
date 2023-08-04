import key from "../../key";
import "../stylesheet/style.css";

const content = document.querySelector(".content");
content.textContent = "Hello World";

const apiKey = key;
const city = "delhi";
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

async function getWeather(src) {
  const response = await fetch(src, { mode: "cors" });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error("Invalid Request");
}

function display(obj) {
  Object.keys(obj).forEach((key) => {
    const title = document.createElement("h3");
    title.textContent = key;
    const value = document.createElement("p");
    value.textContent = obj[key];
    content.append(title, value);
  });
}

function filterData(data) {
  const {
    temp_c: tempC,
    temp_f: tempF,
    is_day: isDay,
    condition,
    wind_mph: windMph,
    wind_kph: windKph,
    humidity,
    feelslike_c: feelsLikeC,
    feelslike_f: feelsLikeF,
  } = data.current;
  const { name, region, country, localtime } = data.location;
  return {
    tempC,
    tempF,
    isDay,
    condition,
    windMph,
    windKph,
    humidity,
    feelsLikeC,
    feelsLikeF,
    name,
    region,
    country,
    localtime,
  };
}

function displayWeather(src) {
  const myWeather = getWeather(src);
  myWeather
    .then((data) => {
      const filteredData = filterData(data);
      display(filteredData);
    })
    .catch((err) => console.log(err));
}

displayWeather(url);
