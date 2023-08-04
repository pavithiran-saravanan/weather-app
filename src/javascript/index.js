import key from "../../key";
import "../stylesheet/style.css";

const content = document.querySelector(".content");

// Create current title and current container and add to content
const currentContainer = document.createElement("div");
currentContainer.classList.add("current-container");
const currentTitle = document.createElement("div");
currentTitle.classList.add("current-title");
currentTitle.textContent = "Current Weather";
content.append(currentTitle, currentContainer);

// Create hourly container and hourly title and add to content
const hourlyContainer = document.createElement("div");
hourlyContainer.classList.add("hourly-container");
const hourlyTitle = document.createElement("div");
hourlyTitle.classList.add("hourly-title");
hourlyTitle.textContent = "Hourly Weather";
content.append(hourlyTitle, hourlyContainer);

const apiKey = key;
const city = "Mawsynram";
const urlCurrent = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=2`;

async function getCurrentWeather(src) {
  const response = await fetch(src, { mode: "cors" });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error("Invalid Request");
}

// Returns an array of elements which represent current weather and location info
function getWeatherItems(obj) {
  const weatherItems = [];
  Object.keys(obj).forEach((objKey) => {
    const div = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = objKey;
    const value = document.createElement("p");
    value.textContent = obj[objKey];
    div.append(title, value);
    weatherItems.push(div);
  });
  return weatherItems;
}

// Returns an obj containing current weather info filtered from the api response
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

// Return an array of dom elements where each element contains an hour's weather info
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

// Format 24 hour time into 12 hours
function formatHours(time) {
  let res = "";
  if (time === "12") res = `12 PM`;
  else if (time === "00") res = `12 AM`;
  else if (time > 12) res = `${time % 12} PM`;
  else res = `${time} AM`;
  return res;
}

// Returns hourly data for the next 24 hours
function getHourlyData(data) {
  const localTime = data.location.localtime;
  const currentHour = localTime.split(" ")[1].split(":")[0];
  const date = localTime.split(" ")[0];

  const hourlyData = [
    ...data.forecast.forecastday[0].hour,
    ...data.forecast.forecastday[1].hour,
  ];
  const filteredData = hourlyData
    .filter((hourData) => {
      const currDate = hourData.time.split(" ")[0];
      const currTime = hourData.time.split(" ")[1].split(":")[0];
      if (date === currDate && currTime > currentHour) return true;
      if (date !== currDate && currTime <= currentHour) return true;
      return false;
    })
    .map((hourData) => {
      const { temp_c: tempC, temp_f: tempF, condition, time } = hourData;
      const hours = time.split(" ")[1].split(":")[0];
      return {
        tempC,
        tempF,
        condition: condition.text,
        time: formatHours(hours),
      };
    });
  return filteredData;
}

function displayCurrentWeather(src) {
  const myWeather = getCurrentWeather(src);

  myWeather
    .then((data) => {
      console.log(data);
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
  });
}

displayCurrentWeather(urlCurrent);

// We need hourly time, temperature and condition
