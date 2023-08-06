// Returns an obj containing current weather info filtered from the api response
export default function getCurrentData(data) {
  const {
    cloud,
    temp_c: tempC,
    temp_f: tempF,
    is_day: isDay,
    condition,
    wind_mph: windMph,
    wind_kph: windKph,
    wind_degree: windDegree,
    wind_dir: windDir,
    humidity,
    feelslike_c: feelsLikeC,
    feelslike_f: feelsLikeF,
    uv,
    vis_km: visKm,
    vis_miles: visMiles,
  } = data.current;
  const { name, region, country, localtime } = data.location;
  const { daily_chance_of_rain: dailyChanceOfRain } =
    data.forecast.forecastday[0].day;
  return {
    cloud,
    isDay,
    condition: condition.text,
    tempC,
    tempF,
    feelsLikeC,
    feelsLikeF,
    humidity,
    windMph,
    windKph,
    windDegree,
    windDir,
    uv,
    visKm,
    visMiles,
    dailyChanceOfRain,
    weatherIcon: condition.icon,

    name,
    region,
    country,
    localtime,
  };
}
