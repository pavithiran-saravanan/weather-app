import getCurrentData from "./getCurrentData";
import getCurrentItems from "./getCurrentItems";
import getHourlyData from "./getHourlyData";
import getHourlyItems from "./getHourlyItems";
import getWeatherData from "./getWeatherData";

export default function displayWeather(src) {
  // Start of loading
  // loading.classList.remove("hidden");
  // currentContainer.classList.add("inactive");
  // hourlyContainer.classList.add("inactive");
  // error.classList.add("hidden");

  // Response from API
  const myWeather = getWeatherData(src);

  // Get current data and display
  myWeather
    .then((data) => {
      if (!data) return;
      const filteredData = getCurrentData(data);
      const currentItems = getCurrentItems(filteredData);
      console.log(filteredData, currentItems);
      // currentWeatherIcon.src = filteredData.weatherIcon;
      // windDirectionIcon.style.rotate = `${filteredData.windDegree}deg`;
      // currentContainer.textContent = "";
      // getCurrentItems(filteredData).forEach((item) =>
      //   currentContainer.append(item)
      // );
    })
    .catch((err) => console.log(err));

  // Get hourly data and display
  myWeather
    .then((data) => {
      if (!data) return;
      const hourlyData = getHourlyData(data);
      const hourlyItems = getHourlyItems(hourlyData);
      console.log(hourlyData, hourlyItems);

      const set1 = document.querySelector(".set-1");
      const set2 = document.querySelector(".set-2");
      const set3 = document.querySelector(".set-3");

      set1.replaceChildren(...hourlyItems.slice(0, 8));
      set2.replaceChildren(...hourlyItems.slice(8, 16));
      set3.replaceChildren(...hourlyItems.slice(16, 24));

      // End of loading
      // loading.classList.add("hidden");
      // currentContainer.classList.remove("inactive");
      // hourlyContainer.classList.remove("inactive");
    })
    .catch((err) => console.log(err));
}
