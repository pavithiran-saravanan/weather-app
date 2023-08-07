import comp from "./comp";

// Start Loading
export function startLoading() {
  document.querySelector(".loading-component").classList.remove("hidden");

  document.querySelector(".current-container").classList.add("loading");
  document.querySelector(".hourly-container").classList.add("loading");
  document.querySelector(".units-container").classList.add("loading");
}

// Stop Loading
export function stopLoading() {
  document.querySelector(".loading-component").classList.add("hidden");

  document.querySelector(".current-container").classList.remove("loading");
  document.querySelector(".hourly-container").classList.remove("loading");
  document.querySelector(".units-container").classList.remove("loading");
}

export default function loading() {
  const loadingComponent = comp("div", "loading-component hidden");
  const loadingCircle = comp("div", "loading-circle");
  loadingComponent.append(loadingCircle);
  return loadingComponent;
}
