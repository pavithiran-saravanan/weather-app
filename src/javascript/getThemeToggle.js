import iconThemeDark from "../images/theme-dark-2.svg";
import iconThemeLight from "../images/theme.svg";
import comp from "./comp";

export default function getThemeToggle() {
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
      document.body.classList.add("light");
    } else {
      themeToggle.classList.remove("light");
      themeToggle.classList.add("dark");
      themeIcon.src = iconThemeDark;
      document.body.classList.remove("light");
    }
  });
  return themeToggle;
}
