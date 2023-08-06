import comp from "./comp";
import iconLocation from "../images/location.svg";
import iconSearch from "../images/search.svg";
import iconThemeDark from "../images/theme-dark-2.svg";
import iconThemeLight from "../images/theme.svg";
import iconLeftArrow from "../images/left-arrow.svg";
import iconRightArrow from "../images/right-arrow.svg";

function getThemeToggle() {
  const themeToggle = comp("div", "theme-toggle dark");

  // themeToggle's children
  const themeToggleCircle = comp("div", "theme-toggle-circle");
  const themeIcon = comp("img", "theme-icon", { src: iconThemeDark });
  themeToggleCircle.append(themeIcon);
  const themeToggleTrack = comp("div", "theme-toggle-track");
  themeToggle.append(themeToggleCircle, themeToggleTrack);

  // Add event listener to themeToggle
  themeToggle.addEventListener("click", () => {
    if (themeToggle.classList.contains("dark")) {
      themeToggle.classList.remove("dark");
      themeToggle.classList.add("light");
      themeIcon.src = iconThemeLight;
    } else {
      themeToggle.classList.remove("light");
      themeToggle.classList.add("dark");
      themeIcon.src = iconThemeDark;
    }
  });
  return themeToggle;
}

function getUnitsContainer() {
  const unitsContainer = comp("div", "units-container");

  const celsiusButton = comp("button", "unit-btn celsius-btn active");
  celsiusButton.textContent = "Celsius";
  const fahrenheitButton = comp("button", "unit-btn fahrenheit-btn");
  fahrenheitButton.textContent = "Fahrenheit";
  unitsContainer.append(celsiusButton, fahrenheitButton);

  unitsContainer.addEventListener("click", (e) => {
    if (e.target === celsiusButton) {
      celsiusButton.classList.add("active");
      fahrenheitButton.classList.remove("active");
    } else if (e.target === fahrenheitButton) {
      fahrenheitButton.classList.add("active");
      celsiusButton.classList.remove("active");
    }
  });
  return unitsContainer;
}

// Add basic dom structure
export default function populateDom() {
  const content = document.querySelector(".content");
  console.log("dom");

  // content's children
  const header = comp("header", "header");
  const unitsSection = comp("div", "units-section");
  const currentContainer = comp("div", "currentContainer");
  const hourlyContainer = comp("div", "hourly-container");
  content.append(header, unitsSection, currentContainer, hourlyContainer);

  // header's children
  const locationButton = comp("button", "location-btn");
  const searchBar = comp("div", "search-bar");
  header.append(locationButton, searchBar, getThemeToggle());

  const locationIcon = comp("img", "location-icon", { src: iconLocation });
  locationButton.append(locationIcon);

  // searchbar's children
  const searchInput = comp(
    "input",
    "search-input",
    { type: "search" },
    { placeholder: "Search Location" }
  );
  const searchIcon = comp("img", "search-icon", { src: iconSearch });
  const error = comp("div", "error hidden");
  error.textContent = "Place Not Found";
  searchBar.append(searchIcon, searchInput, error);

  // unitsSection children
  unitsSection.append(getUnitsContainer());

  // Current Container's children
  const currentLeft = comp("div", "current-left");
  const currentCenter = comp("div", "current-center");
  const currentRight = comp("div", "current-right");
  currentContainer.append(currentLeft, currentCenter, currentRight);

  // current left, current center and current right children will be generated and added once weather data is fetched

  // hourlyContainer
  // hourlyContainerMain => Child elements will be dynamically generated and added
  const hourlyContainerMain = comp("div", "hourly-container-main");
  const hourlyContainerCarousal = comp("div", "hourly-container-carousal");
  hourlyContainer.append(hourlyContainerMain, hourlyContainerCarousal);

  // hourlyContainerCarousal
  const carousalMain = comp("div", "carousal-main");
  const leftArrow = comp("img", "left-arrow", { src: iconLeftArrow });
  const rightArrow = comp("img", "right-arrow", { src: iconRightArrow });
  const dots = comp("div", "dots");
  const dot1 = comp("div", "dot dot-1");
  const dot2 = comp("div", "dot dot-2");
  const dot3 = comp("div", "dot dot-3");
  dots.append(dot1, dot2, dot3);
  carousalMain.append(leftArrow, dots, rightArrow);
  hourlyContainerCarousal.append(carousalMain);
}
