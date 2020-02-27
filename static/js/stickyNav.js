//navbar
function stickyTopnav() {
  let outerSticky = document.querySelectorAll(".sticky_outer_wrapper");
  //topnav
  let topnavOuter = outerSticky[0];
  let topnavInner = topnavOuter.firstElementChild;
  let topnavHeight = topnavInner.firstElementChild.clientHeight;
  if (window.scrollY > 0) {
    //topnav
    topnavOuter.style = `height: ${topnavHeight}px`;
    topnavInner.style = `position: fixed; top: 0px; z-index: 100; width: ${document.body.clientWidth}px; transform: translate3d(0px, 0px, 0px)`;
  } else {
    //topnav
    topnavOuter.style = null;
    topnavInner.style = `position: relative; z-index: 100; transform: translate3d(0px, 0px, 0px)`;
  }
}
//navbar home page
function stickyTopnavHome() {
  let outerSticky = document.querySelectorAll(".sticky_outer_wrapper");
  //topnav
  let topnavOuter = outerSticky[0];
  let topnavInner = topnavOuter.firstElementChild;
  if (window.scrollY > 0) {
    //topnav
    topnavOuter.style = `height: 0px`;
    topnavInner.style = `position: fixed; top: 0px; z-index: 100; width: ${document.body.clientWidth}px; transform: translate3d(0px, 0px, 0px)`;
  } else {
    //topnav
    topnavOuter.style = null;
    topnavInner.style = `position: relative; z-index: 100; transform: translate3d(0px, 0px, 0px)`;
  }
}

//tooltip
function stickyTooltip() {
  let outerSticky = document.querySelectorAll(".sticky_outer_wrapper");
  //tooltip
  let tooltipOuter = outerSticky[1];
  let tooltipInner = tooltipOuter.firstElementChild;
  let tooltipHeight = tooltipInner.firstElementChild.clientHeight;
  if (window.scrollY > 0) {
    //tooltip
    tooltipOuter.style = `height: ${tooltipHeight}px`;
    tooltipInner.style = `position: fixed; top: 0px; z-index: 100; width: ${document.body.clientWidth}px; transform: translate3d(0px, 82px, 0px)`;
  } else {
    //tooltip
    tooltipOuter.style = null;
    tooltipInner.style = `position: relative; z-index: 100; transform: translate3d(0px, 0px, 0px)`;
  }
}

//code export
export { stickyTopnav, stickyTooltip, stickyTopnavHome };
