// Start Loading
export function startLoading() {
  document.querySelector(".loading-container").classList.remove("hidden");

  document.querySelector(".current-container").classList.add("loading");
  document.querySelector(".hourly-container").classList.add("loading");
  document.querySelector(".units-container").classList.add("loading");
}

// Stop Loading
export function stopLoading() {
  document.querySelector(".loading-container").classList.add("hidden");

  document.querySelector(".current-container").classList.remove("loading");
  document.querySelector(".hourly-container").classList.remove("loading");
  document.querySelector(".units-container").classList.remove("loading");
}
