import comp from "./comp";
import iconLocation from "../images/location.svg";
import getSearchBar from "./getSearchBar";
import getThemeToggle from "./getThemeToggle";
import getUnitsContainer from "./getUnitsContainer";
import getCarousalMain from "./getCarousalMain";
import displayLocalWeather from "./displayLocalWeather";

function getLocationButton() {
  const locationButton = comp("button", "location-btn");

  const locationIcon = comp("img", "location-icon", { src: iconLocation });
  locationButton.append(locationIcon);

  locationButton.addEventListener("click", () => {
    displayLocalWeather();
  });
  return locationButton;
}

// Add basic dom structure
export default function populateDom() {
  const content = document.querySelector(".content");

  // content's children
  const header = comp("header", "header");
  const unitsSection = comp("div", "units-section");
  const currentContainer = comp("div", "current-container");
  const hourlyContainer = comp("div", "hourly-container");
  content.append(header, unitsSection, currentContainer, hourlyContainer);

  // header's children
  header.append(getLocationButton(), getSearchBar(), getThemeToggle());

  // unitsSection children
  unitsSection.append(getUnitsContainer());

  // Current Container's children
  const currentLeft = comp("div", "current-left");
  const currentCenter = comp("div", "current-center");
  const currentRight = comp("div", "current-right");
  currentContainer.append(currentLeft, currentCenter, currentRight);

  // current left, current center and current right children will be generated and added once weather data is fetched

  // hourlyContainerMain => Child elements will be dynamically generated and added
  const hourlyContainerMain = comp("div", "hourly-container-main");
  const hourlyContainerCarousal = comp("div", "hourly-container-carousal");
  const set1 = comp("div", "set set-1 active");
  const set2 = comp("div", "set set-2");
  const set3 = comp("div", "set set-3");
  hourlyContainerMain.append(set1, set2, set3);
  hourlyContainer.append(hourlyContainerMain, hourlyContainerCarousal);

  // hourlyContainerCarousal
  hourlyContainerCarousal.append(getCarousalMain());
}
