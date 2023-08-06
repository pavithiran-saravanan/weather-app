import displayWeather from "./displayWeather";
import getUrl from "./getUrl";

const locationSuccess = (position) => {
  const q = `${position.coords.latitude},${position.coords.longitude}`;
  displayWeather(getUrl(q));
};
const locationError = (err) => {
  console.log(err);
};

// Display Local Weather
export default function displayLocalWeather() {
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {
    enableHighAccuracy: true,
  });
}
