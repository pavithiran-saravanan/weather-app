import key from "../../key";

export default function getUrl(place) {
  const apiKey = key;
  const def = "New York";
  if (place)
    return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=2`;
  return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${def}&days=2`;
}
