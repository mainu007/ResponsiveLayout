//sidenav import
import { sidenavCloseNOpen } from "./sidenav.js";
sidenavCloseNOpen();
//sidenav code end

//topnav input
import { stickyTopnav } from "./stickyNav.js";
window.addEventListener("scroll", stickyTopnav);
window.addEventListener("resize", stickyTopnav);
//topnav end

//pricing monthly and annually start
let monthly = document.getElementById("monthly");
let annually = document.getElementById("annually");
function monthlyPrice() {
  let pricingContainer = document.querySelector(".pricing_container");
  let strong = pricingContainer.getElementsByTagName("strong");
  strong[0].textContent = "$0.00 USD";
  strong[1].textContent = "$75.80 USD";
  strong[2].textContent = "$175.00 USD";
  //button active
  monthly.classList.toggle("active");
  annually.classList.toggle("active");
}
function annuallyPrice() {
  let pricingContainer = document.querySelector(".pricing_container");
  let strong = pricingContainer.getElementsByTagName("strong");
  strong[0].textContent = "$0 USD";
  strong[1].textContent = "$612 USD";
  strong[2].textContent = "$1800 USD";
  //button active
  monthly.classList.toggle("active");
  annually.classList.toggle("active");
}
monthlyPrice();
monthly.addEventListener("click", monthlyPrice);
annually.addEventListener("click", annuallyPrice);
