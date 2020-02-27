//sidenav import
import { sidenavCloseNOpen } from "./sidenav.js";
sidenavCloseNOpen();
//sidenav code end

//topnav input
import { stickyTopnavHome } from "./stickyNav.js";
window.addEventListener("scroll", stickyTopnavHome);
window.addEventListener("resize", stickyTopnavHome);
//topnav end

//topnav code start
function navbarChange() {
  let topnav = document.querySelector(".topnav");
  if (window.scrollY > 0) {
    if (!topnav.classList.contains("active")) {
      topnav.className += " active";
    }
  }
  if (window.scrollY === 0) {
    topnav.className = "topnav";
  }
}
window.addEventListener("scroll", navbarChange);
//topnav code end

//guest and room count code start
//guest and room container code
document.getElementById("roomGuestBarBtn").addEventListener("click", () => {
  let container = document.getElementsByClassName("room_and_guest_container");
  container[0].classList.toggle("active");
});
window.addEventListener("click", e => {
  let button = document.getElementById("roomGuestBarBtn");
  if (e.target !== button) {
    let container = document.getElementsByClassName("room_and_guest_container");
    let div = container[0];
    if (
      e.target !== div &&
      e.target.parentNode !== div &&
      e.target.parentNode.parentNode !== div &&
      e.target.parentNode.parentNode.parentNode !== div &&
      e.target.parentNode.parentNode.parentNode.parentNode !== div
    ) {
      div.classList.remove("active");
    }
  }
});

//import personPlus function
import { personPlus, guestPlus } from "./counts.js";
document.getElementById("increasePersonbtn").addEventListener("click", () => {
  personPlus(1);
});
document.getElementById("decreasePersonbtn").addEventListener("click", () => {
  personPlus(-1);
});
document.getElementById("increaseGuestbtn").addEventListener("click", () => {
  guestPlus(1);
});
document.getElementById("decreaseGuestbtn").addEventListener("click", () => {
  guestPlus(-1);
});

//guest and room count code end

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
