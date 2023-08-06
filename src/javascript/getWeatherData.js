export default async function getWeatherData(src) {
  try {
    const response = await fetch(src, { mode: "cors" });
    if (!response.ok) throw new Error("Invalid Request");
    const json = await response.json();
    return json;
  } catch (err) {
    // error.classList.remove("hidden");
    // loading.classList.add("hidden");
    console.log(err);
  }
  return undefined;
}
