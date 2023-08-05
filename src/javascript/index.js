import key from "../../key";
import "../stylesheet/style.css";

const content = document.querySelector(".content");

// Search container
const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");

// Create a input field to get
const input = document.createElement("input");
input.type = "search";
input.classList.add("search-bar");
input.placeholder = "City, State or Country";
searchContainer.append(input);

// Create an error message
const error = document.createElement("div");
error.classList.add("error", "hidden");
error.textContent = "Place Not Found";

// Create a loading message
const loading = document.createElement("div");
loading.classList.add("loading", "hidden");
loading.textContent = "loading";

// Search Button
const button = document.createElement("button");
button.classList.add("search-button");
button.textContent = "S";
searchContainer.append(button, loading, error);

// Create current title and current container and add to content
const currentContainer = document.createElement("div");
currentContainer.classList.add("current-container");
const currentTitle = document.createElement("div");
currentTitle.classList.add("current-title");
currentTitle.textContent = "Current Weather";

// Create an icon container
const currentWeatherIcon = document.createElement("img");
currentWeatherIcon.classList.add("current-weather-icon");
currentTitle.append(currentWeatherIcon);

// Create hourly container and hourly title and add to content
const hourlyContainer = document.createElement("div");
hourlyContainer.classList.add("hourly-container");
const hourlyTitle = document.createElement("div");
hourlyTitle.classList.add("hourly-title");
hourlyTitle.textContent = "Hourly Weather";

// Append all data to content
content.append(
  searchContainer,
  currentTitle,
  currentContainer,
  hourlyTitle,
  hourlyContainer
);

function getURL(city) {
  const apiKey = key;
  return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=2`;
}
const city = "Salem";
const urlCurrent = getURL(city);

// Returns an array of elements which represent current weather and location info
function getCurrentItems(obj) {
  const weatherItems = [];
  Object.keys(obj).forEach((objKey) => {
    if (objKey === "weatherIcon") return;
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
function getCurrentData(data) {
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
  const { daily_chance_of_rain: dailyChanceOfRain } =
    data.forecast.forecastday[0].day;
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
    dailyChanceOfRain,
    weatherIcon: condition.icon,

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
      if (date === currDate && +currTime > +currentHour) return true;
      if (date !== currDate && +currTime <= +currentHour) return true;
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

async function getWeatherData(src) {
  try {
    const response = await fetch(src, { mode: "cors" });
    if (!response.ok) throw new Error("Invalid Request");
    const json = await response.json();
    return json;
  } catch (err) {
    error.classList.remove("hidden");
    loading.classList.add("hidden");
    console.log(err);
  }
  return undefined;
}

function displayWeather(src) {
  loading.classList.remove("hidden");
  error.classList.add("hidden");
  // Response from API
  const myWeather = getWeatherData(src);

  // Get current data and display
  myWeather
    .then((data) => {
      if (!data) return;
      currentWeatherIcon.src = data.current.condition.icon;
      const filteredData = getCurrentData(data);
      currentContainer.textContent = "";
      getCurrentItems(filteredData).forEach((item) =>
        currentContainer.append(item)
      );
    })
    .catch((err) => console.log(err));

  // Get hourly data and display
  myWeather
    .then((data) => {
      if (!data) return;
      console.log(data);
      const todaysData = getHourlyData(data);
      hourlyContainer.textContent = "";
      loading.classList.add("hidden");

      getHourlyItems(todaysData).forEach((item) => {
        hourlyContainer.append(item);
      });
    })
    .catch((err) => console.log(err));
}

displayWeather(urlCurrent);

// Add event listener to search bar and button
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value) {
    displayWeather(getURL(input.value));
  }
});
button.addEventListener("click", () => {
  if (input.value) {
    displayWeather(getURL(input.value));
  }
});
