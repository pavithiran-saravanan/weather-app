import comp from "./comp";
import iconSearch from "../images/search.svg";
import displayWeather from "./displayWeather";
import getUrl from "./getUrl";

export default function getSearchBar() {
  const searchBar = comp("div", "search-bar");

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

  // Handle search
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && searchInput.value) {
      displayWeather(getUrl(searchInput.value));
    }
    if (!document.querySelector(".error").classList.contains("hidden"))
      document.querySelector(".error").classList.add("hidden");
  });

  return searchBar;
}
