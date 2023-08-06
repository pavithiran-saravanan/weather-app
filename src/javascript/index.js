import "../stylesheet/style.css";
import loadingGif from "../images/loading.gif";
import populateDom from "./dom";
import displayWeather from "./displayWeather";
import getUrl from "./getUrl";
import displayLocalWeather from "./displayLocalWeather";

const content = document.querySelector(".content");

// Add a loading Gif
const loading = document.createElement("div");
const loadingIcon = document.createElement("img");
loadingIcon.classList.add("loading-gif");
loadingIcon.src = loadingGif;
loading.classList.add("loading", "hidden");
loading.append(loadingIcon);
content.append(loading);

populateDom();
displayWeather(getUrl());
displayLocalWeather();
