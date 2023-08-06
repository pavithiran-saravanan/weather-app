// Format 24 hour time into 12 hours
function formatHours(time) {
  let res = "";
  if (time === "12") res = `12 PM`;
  else if (time === "00") res = `12 AM`;
  else if (time > 12) res = `${+time % 12} PM`;
  else res = `${+time} AM`;
  return res;
}

// Returns hourly data for the next 24 hours
export default function getHourlyData(data) {
  const localTime = data.location.localtime;
  const currentHour = localTime.split(" ")[1].split(":")[0];
  const date = localTime.split(" ")[0];

  const hourlyData = [
    ...data.forecast.forecastday[0].hour,
    ...data.forecast.forecastday[1].hour,
  ];
  const filteredData = hourlyData
    .filter((hourData) => {
      const currDate = hourData.time.split(" ")[0];
      const currTime = hourData.time.split(" ")[1].split(":")[0];
      if (date === currDate && +currTime > +currentHour) return true;
      if (date !== currDate && +currTime <= +currentHour) return true;
      return false;
    })
    .map((hourData) => {
      const { temp_c: tempC, temp_f: tempF, condition, time } = hourData;
      const hours = time.split(" ")[1].split(":")[0];
      return {
        tempC,
        tempF,
        weatherIcon: condition.icon,
        time: formatHours(hours),
      };
    });
  return filteredData;
}
