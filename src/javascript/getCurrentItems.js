import comp from "./comp";
import iconCloudiness from "../images/cloudiness.svg";
import iconUv from "../images/uv.svg";
import iconVisibility from "../images/visibility.svg";
import iconWindDirection from "../images/wind-direction.svg";
import iconFeelsLike from "../images/feels-like.svg";
import iconHumidity from "../images/humidity.svg";
import iconChanceOfRain from "../images/chance-of-rain.svg";
import iconWindSpeed from "../images/wind-speed.svg";

function getCurrentCard(label, value, icon) {
  const currentCard = comp("div", "current-card");

  const currentLabel = comp("div", "current-card-label");
  currentLabel.textContent = label;
  const currentValue = comp("div", "current-card-value");
  currentValue.textContent = value;
  const currentIcon = comp("img", "current-card-icon");
  currentIcon.src = icon;

  currentCard.append(currentIcon, currentValue, currentLabel);
  return currentCard;
}

function getCurrentCenterMain(obj) {
  const main = comp("div", "current-center-main");

  // Is the current unit celsius?
  const isC = document
    .querySelector(".celsius-btn")
    .classList.contains("active");

  const icon = comp("img", "current-center-icon");
  icon.src = obj.weatherIcon;

  const body = comp("div", "current-center-body");
  const currentTemp = comp("div", "current-temp");
  currentTemp.textContent = isC ? `${obj.tempC}°C` : `${obj.tempF}°F`;
  const currentCondition = comp("div", "current-condition");
  currentCondition.textContent = obj.condition;
  const currentLocation = comp("div", "current-location");
  currentLocation.textContent = `${obj.name}, ${obj.country}`;
  body.append(currentTemp, currentCondition, currentLocation);

  main.append(icon, body);
  return main;
}

export default function getCurrentItems(obj) {
  const currentItemsLeft = [];

  // Is the current unit celsius?
  const isC = document
    .querySelector(".celsius-btn")
    .classList.contains("active");

  // Left items
  const cloudiness = getCurrentCard("Cloudiness", obj.cloud, iconCloudiness);
  const uv = getCurrentCard("UV Index", obj.uv, iconUv);
  const visibility = getCurrentCard(
    "Visibility",
    isC ? obj.visKm : obj.visMiles,
    iconVisibility
  );
  const windDirection = getCurrentCard(
    "Wind Direction",
    obj.windDir,
    iconWindDirection
  );
  currentItemsLeft.push(cloudiness, uv, visibility, windDirection);

  // Right items
  const currentItemsRight = [];
  const feelsLike = getCurrentCard(
    "Feels Like",
    isC ? obj.feelsLikeC : obj.feelsLikeF,
    iconFeelsLike
  );
  const humidity = getCurrentCard("Humidity", obj.humidity, iconHumidity);
  const chanceOfRain = getCurrentCard(
    "Chance Of Rain",
    obj.dailyChanceOfRain,
    iconChanceOfRain
  );
  const windSpeed = getCurrentCard(
    "Wind Speed",
    isC ? obj.windKph : obj.windMph,
    iconWindSpeed
  );
  currentItemsRight.push(feelsLike, humidity, chanceOfRain, windSpeed);

  // Center Items
  const currentCenterDatetime = comp("div", "current-center-datetime");
  currentCenterDatetime.textContent = obj.localtime;
  const currentItemsCenter = [getCurrentCenterMain(obj), currentCenterDatetime];

  return [currentItemsLeft, currentItemsCenter, currentItemsRight];
}
