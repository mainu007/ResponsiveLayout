//sidenav import
import { sidenavCloseNOpen } from "./sidenav.js";
sidenavCloseNOpen();
//sidenav code end

//topnav input
import { stickyTopnav } from "./stickyNav.js";
window.addEventListener("scroll", stickyTopnav);
window.addEventListener("resize", stickyTopnav);
//topnav end

//contact checkbox import
import { checkboxMark } from "./checkbox.js";
checkboxMark(".save_email", ".checkbox-input");
