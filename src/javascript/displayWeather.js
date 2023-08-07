import dataCache from "./cache";
import getCurrentData from "./getCurrentData";
import getCurrentItems from "./getCurrentItems";
import getHourlyData from "./getHourlyData";
import getHourlyItems from "./getHourlyItems";
import getWeatherData from "./getWeatherData";
import { startLoading, stopLoading } from "./loading";

// Display/Update current weather info. Takes in api response.
export function displayCurrentWeather(data) {
  const filteredData = getCurrentData(data);
  const currentItems = getCurrentItems(filteredData);

  const left = document.querySelector(".current-left");
  const center = document.querySelector(".current-center");
  const right = document.querySelector(".current-right");

  left.replaceChildren(...currentItems[0]);
  center.replaceChildren(...currentItems[1]);
  right.replaceChildren(...currentItems[2]);
}

// Display/Update hourly weather info. Takes in api response.
export function displayHourlyWeather(data) {
  const hourlyData = getHourlyData(data);
  const hourlyItems = getHourlyItems(hourlyData);

  const set1 = document.querySelector(".set-1");
  const set2 = document.querySelector(".set-2");
  const set3 = document.querySelector(".set-3");

  set1.replaceChildren(...hourlyItems.slice(0, 8));
  set2.replaceChildren(...hourlyItems.slice(8, 16));
  set3.replaceChildren(...hourlyItems.slice(16, 24));
}

// Stop Loading

export default function displayWeather(src) {
  startLoading();
  // Response from API
  const myWeather = getWeatherData(src);

  // Get current data and display
  myWeather
    .then((data) => {
      if (!data) return;
      dataCache(data);
      displayCurrentWeather(data);
    })
    .catch((err) => console.log(err));

  // Get hourly data and display
  myWeather
    .then((data) => {
      if (!data) return;
      displayHourlyWeather(data);
      stopLoading();
    })
    .catch((err) => console.log(err));
}
