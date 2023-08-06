import comp from "./comp";

// Return an array of dom elements where each element contains an hour's weather info
export default function getHourlyItems(data) {
  const hourlyItems = [];
  data.forEach((hourData) => {
    const time = comp("div", "hourly-time");
    time.textContent = hourData.time;

    const temp = comp("div", "hourly-temp");
    if (document.querySelector(".celsius-btn").classList.contains("active"))
      temp.textContent = `${Math.round(hourData.tempC)} °C`;
    else temp.textContent = `${Math.round(hourData.tempF)} °F`;

    const icon = comp("img", "hourly-icon");
    icon.src = hourData.weatherIcon;

    const hourlyCard = comp("div", "hourly-card");
    hourlyCard.append(time, temp, icon);
    hourlyItems.push(hourlyCard);
  });
  return hourlyItems;
}
