import "../stylesheet/style.css";
import loadingGif from "../images/loading.gif";
import populateDom from "./dom";
import displayWeather from "./displayWeather";
import getUrl from "./getUrl";

// Add a loading Gif
const loading = document.createElement("div");
const loadingIcon = document.createElement("img");
loadingIcon.classList.add("loading-gif");
loadingIcon.src = loadingGif;
loading.classList.add("loading-container", "hidden");
loading.append(loadingIcon);
document.body.append(loading);

populateDom();
displayWeather(getUrl());
