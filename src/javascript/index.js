import key from "../../key";
import "../stylesheet/style.css";

const content = document.querySelector(".content");

// Create current container and add to content
const currentContainer = document.createElement("div");
currentContainer.classList.add("current-container");
const currentTitle = document.createElement("div");
currentTitle.classList.add("current-title");
currentTitle.textContent = "Current Weather";
content.append(currentTitle, currentContainer);

// Create current title and add to current container
const hourlyContainer = document.createElement("div");
hourlyContainer.classList.add("hourly-container");
const hourlyTitle = document.createElement("div");
hourlyTitle.classList.add("hourly-title");
hourlyTitle.textContent = "Hourly Weather";
content.append(hourlyTitle, hourlyContainer);

const apiKey = key;
const city = "salem";
const urlCurrent = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=2`;
// const urlForecast = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;

async function getCurrentWeather(src) {
  const response = await fetch(src, { mode: "cors" });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error("Invalid Request");
}

function getWeatherItems(obj) {
  const weatherItems = [];
  Object.keys(obj).forEach((key) => {
    const div = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = key;
    const value = document.createElement("p");
    value.textContent = obj[key];
    div.append(title, value);
    weatherItems.push(div);
  });
  return weatherItems;
}

function getFilteredData(data) {
  const {
    cloud,
    temp_c: tempC,
    temp_f: tempF,
    is_day: isDay,
    condition,
    wind_mph: windMph,
    wind_kph: windKph,
    wind_dir: windDir,
    humidity,
    feelslike_c: feelsLikeC,
    feelslike_f: feelsLikeF,
    uv,
    vis_km: visKm,
    vis_miles: visMiles,
  } = data.current;
  const { name, region, country, localtime } = data.location;
  return {
    cloud,
    isDay,
    condition: condition.text,
    tempC,
    tempF,
    feelsLikeC,
    feelsLikeF,
    humidity,
    windMph,
    windKph,
    windDir,
    uv,
    visKm,
    visMiles,

    name,
    region,
    country,
    localtime,
  };
}

function getHourlyItems(data) {
  const hourlyItems = [];
  data.forEach((hourData) => {
    const time = document.createElement("div");
    time.textContent = hourData.time;
    time.classList.add("hourly-time");

    const temp = document.createElement("div");
    temp.textContent = hourData.tempC;
    temp.classList.add("hourly-temp");

    const condition = document.createElement("div");
    condition.textContent = hourData.condition;
    condition.classList.add("hourly-condition");

    const div = document.createElement("div");
    div.append(time, temp, condition);
    hourlyItems.push(div);
  });
  return hourlyItems;
}

function getHourlyData(data, day = 0) {
  const hourlyData = data.forecast.forecastday[day].hour;
  const filteredData = hourlyData.map((hourData) => {
    const { temp_c: tempC, temp_f: tempF, condition, time } = hourData;
    return {
      tempC,
      tempF,
      condition: condition.text,
      time: time.split(" ")[1],
    };
  });
  return filteredData;
}

function displayCurrentWeather(src) {
  const myWeather = getCurrentWeather(src);

  myWeather
    .then((data) => {
      const filteredData = getFilteredData(data);
      getWeatherItems(filteredData).forEach((item) =>
        currentContainer.append(item)
      );
    })
    .catch((err) => console.log(err));

  myWeather.then((data) => {
    const todaysData = getHourlyData(data);
    getHourlyItems(todaysData).forEach((item) => {
      hourlyContainer.append(item);
    });

    const tomorrowData = getHourlyData(data, 1);
    getHourlyItems(tomorrowData).forEach((item) => {
      hourlyContainer.append(item);
    });
  });
}

displayCurrentWeather(urlCurrent);

// We need hourly time, temperature and condition
