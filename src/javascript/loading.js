import comp from "./comp";

// Start Loading
export function startLoading() {
  document.querySelector(".loading-component").classList.remove("hidden");
}

// Stop Loading
export function stopLoading() {
  document.querySelector(".loading-component").classList.add("hidden");
}

export default function loading() {
  const loadingComponent = comp("div", "loading-component hidden");
  const loadingCircle = comp("div", "loading-circle");
  loadingComponent.append(loadingCircle);
  return loadingComponent;
}
