//sidenav import
import { sidenavCloseNOpen } from "./sidenav.js";
sidenavCloseNOpen();
//sidenav code end

//topnav input
import { stickyTopnav } from "./stickyNav.js";
window.addEventListener("scroll", stickyTopnav);
window.addEventListener("resize", stickyTopnav);
//topnav end

//slider wrapper import and code
import { wrapperImageNext, wrapperImagePrev } from "./imageWrapperSlider.js";
let imageSliderBtnNext = document.querySelectorAll(".imageNextBtn");
let imageSliderBtnPrev = document.querySelectorAll(".imagePrevBtn");
imageSliderBtnNext.forEach(element => {
  element.addEventListener("click", () => {
    wrapperImageNext(1);
  });
});
imageSliderBtnPrev.forEach(element => {
  element.addEventListener("click", () => {
    wrapperImagePrev(-1);
  });
});
//slider wrapper import and code end

//favorite button import
import { favoriteButton } from "./favoritebutton.js";
favoriteButton();
//favorite button end

//contact checkbox import
import { checkboxMark } from "./checkbox.js";
checkboxMark(".save_email", ".checkbox-input");
