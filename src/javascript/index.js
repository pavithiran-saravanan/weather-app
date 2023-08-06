import "../stylesheet/style.css";
import arrowIcon from "../images/arrow.svg";
import searchIcon from "../images/search.svg";
import loadingGif from "../images/loading.gif";
import populateDom from "./dom";
import displayWeather from "./displayWeather";
import getUrl from "./getUrl";

const content = document.querySelector(".content");

// Search container
const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");

// Create a input field to get
const input = document.createElement("input");
input.type = "search";
input.classList.add("search-bar");
input.placeholder = "City, State or Country";

// Create an error message
const error = document.createElement("div");
error.classList.add("error", "hidden");
error.textContent = "Place Not Found";

// Add a loading Gif
const loading = document.createElement("div");
const loadingIcon = document.createElement("img");
loadingIcon.classList.add("loading-gif");
loadingIcon.src = loadingGif;
loading.classList.add("loading", "hidden");
loading.append(loadingIcon);
content.append(loading);

// Search Button
const button = document.createElement("button");
button.classList.add("search-button");
const search = document.createElement("img");
search.classList.add("search-icon");
search.src = searchIcon;
button.append(search);
searchContainer.append(input, button, error);

// Create current title and current container and add to content
const currentContainer = document.createElement("div");
currentContainer.classList.add("current-container");
const currentTitle = document.createElement("div");
currentTitle.classList.add("current-title");
currentTitle.textContent = "Current Weather";

// Weather icon container
const currentWeatherIcon = document.createElement("img");
currentWeatherIcon.classList.add("current-weather-icon");
currentTitle.append(currentWeatherIcon);

// Wind direction icon container
const windDirectionIcon = document.createElement("img");
windDirectionIcon.classList.add("wind-direction-icon");
windDirectionIcon.src = arrowIcon;
currentTitle.append(windDirectionIcon);

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

displayWeather(getUrl());

// Get users location
const locationSuccess = (position) => {
  const q = `${position.coords.latitude},${position.coords.longitude}`;
  displayWeather(getUrl(q));
};
const locationError = () => {
  // console.log(err);
};
navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {
  enableHighAccuracy: true,
});

// Add event listener to search bar and button
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value) {
    displayWeather(getUrl(input.value));
  }
});
button.addEventListener("click", () => {
  if (input.value) {
    displayWeather(getUrl(input.value));
  }
});

populateDom();
