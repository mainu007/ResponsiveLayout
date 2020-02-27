function sidenavCloseNOpen() {
  let showButton = document.getElementById("sidenavShowButton");
  let closeButton = document.getElementById("slidenavCloseButton");
  let overlay = document.querySelector(".overlay");
  let sidenav = document.getElementById("sideNav");
  showButton.addEventListener("click", () => {
    sidenav.style.transform = "translateX(-100%)";
    document.body.style = `overflow: hidden; position: relative;
     width: calc(100% - 17px) ;touch-action: none`;
    sidenav.parentNode.className += " active";
  });
  closeButton.addEventListener("click", sideNavClose);
  overlay.addEventListener("click", sideNavClose);
  function sideNavClose() {
    sidenav.style.transform = "translateX(0)";
    document.body.style = "";
    sidenav.parentNode.className = "mobile_header";
  }
}

//export
export { sidenavCloseNOpen };
