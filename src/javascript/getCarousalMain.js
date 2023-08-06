import comp from "./comp";
import iconLeftArrow from "../images/left-arrow.svg";
import iconRightArrow from "../images/right-arrow.svg";

export default function getCarousalMain() {
  const carousalMain = comp("div", "carousal-main");

  // Construct component
  const leftArrow = comp("img", "left-arrow", { src: iconLeftArrow });
  const rightArrow = comp("img", "right-arrow", { src: iconRightArrow });
  const dots = comp("div", "dots");
  const dot1 = comp("div", "dot dot-1 active");
  const dot2 = comp("div", "dot dot-2");
  const dot3 = comp("div", "dot dot-3");
  dots.append(dot1, dot2, dot3);
  carousalMain.append(leftArrow, dots, rightArrow);

  // Handle Click Events
  carousalMain.addEventListener("click", (e) => {
    const dotsArr = [dot1, dot2, dot3];
    const curr = dots.querySelector(".active");
    const currIndex = dotsArr.indexOf(curr);
    const nextIndex = currIndex + 1 > 2 ? 0 : currIndex + 1;
    const prevIndex = currIndex - 1 < 0 ? 2 : currIndex - 1;

    if (e.target === dot1 || e.target === dot2 || e.target === dot3) {
      curr.classList.remove("active");
      e.target.classList.add("active");
    }
    if (e.target === rightArrow) {
      curr.classList.remove("active");
      dotsArr[nextIndex].classList.add("active");
    }
    if (e.target === leftArrow) {
      curr.classList.remove("active");
      dotsArr[prevIndex].classList.add("active");
    }

    const selectedDot = dots.querySelector(".active");
    const indexOfSelectedDot = dotsArr.indexOf(selectedDot);
    const sets = document.querySelectorAll(".set");
    sets.forEach((set) => {
      set.classList.remove("active");
    });
    document
      .querySelector(`.set-${indexOfSelectedDot + 1}`)
      .classList.add("active");
  });
  return carousalMain;
}
