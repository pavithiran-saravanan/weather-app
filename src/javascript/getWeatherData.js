import { stopLoading } from "./loading";

export default async function getWeatherData(src) {
  try {
    const response = await fetch(src, { mode: "cors" });
    if (!response.ok) throw new Error("Invalid Request");
    const json = await response.json();
    return json;
  } catch (err) {
    stopLoading();
    document.querySelector(".error").classList.remove("hidden");
  }
  return undefined;
}
