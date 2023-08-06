import "../stylesheet/style.css";
import loadingGif from "../images/loading.gif";
import populateDom from "./dom";
import displayWeather from "./displayWeather";
import getUrl from "./getUrl";
import displayLocalWeather from "./displayLocalWeather";

const content = document.querySelector(".content");

populateDom();

// Add a loading Gif
const loading = document.createElement("div");
const loadingIcon = document.createElement("img");
loadingIcon.classList.add("loading-gif");
loadingIcon.src = loadingGif;
loading.classList.add("loading", "hidden");
loading.append(loadingIcon);
document.querySelector(".current-container").append(loading);

displayWeather(getUrl());
displayLocalWeather();
