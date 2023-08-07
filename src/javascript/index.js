import "../stylesheet/style.css";
import populateDom from "./dom";
import displayWeather from "./displayWeather";
import getUrl from "./getUrl";

populateDom();
displayWeather(getUrl());
