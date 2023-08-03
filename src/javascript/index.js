import key from "../../key";
import "../stylesheet/style.css";

const content = document.querySelector(".content");
content.textContent = "Hello World";

const apiKey = key;
const city = "salem";
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

async function getWeather(src) {
  const response = await fetch(src, { mode: "cors" });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error("Invalid Request");
}

// sync function calling an async func
function displayWeather(src) {
  const myWeather = getWeather(src);
  myWeather
    .then((data) => {
      if (data) console.log(data.current);
    })
    .catch((err) => console.log(err));
}

displayWeather(url); 
