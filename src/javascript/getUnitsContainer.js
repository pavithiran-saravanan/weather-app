import dataCache from "./cache";
import comp from "./comp";
import { displayCurrentWeather, displayHourlyWeather } from "./displayWeather";

export default function getUnitsContainer() {
  const unitsContainer = comp("div", "units-container");

  // Construct Component
  const celsiusButton = comp("button", "unit-btn celsius-btn active");
  celsiusButton.textContent = "Celsius";
  const fahrenheitButton = comp("button", "unit-btn fahrenheit-btn");
  fahrenheitButton.textContent = "Fahrenheit";
  unitsContainer.append(celsiusButton, fahrenheitButton);

  // Handle Click Events
  unitsContainer.addEventListener("click", (e) => {
    if (e.target === celsiusButton) {
      celsiusButton.classList.add("active");
      fahrenheitButton.classList.remove("active");
    } else if (e.target === fahrenheitButton) {
      fahrenheitButton.classList.add("active");
      celsiusButton.classList.remove("active");
    }
    // Re-render current weather info and hourly weather info
    const data = dataCache();
    if (data) {
      displayCurrentWeather(data);
      displayHourlyWeather(data);
    }
  });
  return unitsContainer;
}
