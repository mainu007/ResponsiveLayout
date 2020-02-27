//sidenav import
import { sidenavCloseNOpen } from "./sidenav.js";
sidenavCloseNOpen();
//sidenav code end

//topnav input
import { stickyTopnav, stickyTooltip } from "./stickyNav.js";
window.addEventListener("scroll", () => {
  stickyTopnav();
  stickyTooltip();
});
window.addEventListener("resize", () => {
  stickyTopnav();
  stickyTooltip();
});
//topnav end

//datepicker start
$(document).ready(function() {
  var nowTemp = new Date();
  var now = new Date(
    nowTemp.getFullYear(),
    nowTemp.getMonth(),
    nowTemp.getDate(),
    0,
    0,
    0,
    0
  );
  var checkin = $("#startDate")
    .datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? "disabled" : "";
      }
    })
    .on("changeDate", function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date);
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $("#endDate")[0].focus();
    })
    .data("datepicker");
  var checkout = $("#endDate")
    .datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? "disabled" : "";
      }
    })
    .on("changeDate", function(ev) {
      checkout.hide();
    })
    .data("datepicker");
});
//datepicker accordion code
$(document).ready(function() {
  var nowTemp = new Date();
  var now = new Date(
    nowTemp.getFullYear(),
    nowTemp.getMonth(),
    nowTemp.getDate(),
    0,
    0,
    0,
    0
  );
  var checkin = $("#accordionStartDate")
    .datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? "disabled" : "";
      }
    })
    .on("changeDate", function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date);
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $("#endDate")[0].focus();
    })
    .data("datepicker");
  var checkout = $("#accordionEndDate")
    .datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? "disabled" : "";
      }
    })
    .on("changeDate", function(ev) {
      checkout.hide();
    })
    .data("datepicker");
});
//datepicker end

// slider range start
$(document).ready(function() {
  $(function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 100,
      values: [0, 100],
      value: 10,
      slide: function(event, ui) {
        $("#amount").text(ui.values[0] + ", " + ui.values[1]);
      }
    });
    $("#amount").text(
      $("#slider-range").slider("values", "0") +
        ", " +
        $("#slider-range").slider("values", 1)
    );
  });
  //accordion range
  $(function() {
    $("#slider-range-accordion").slider({
      range: true,
      min: 0,
      max: 100,
      values: [0, 100]
    });
  });
});
//slider range end

//menu container show and hide function
let popupHandlerbtn = document.getElementsByClassName("popupbtnEvent");
for (let i = 0; i < popupHandlerbtn.length; i++) {
  popupHandlerbtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let view = this.parentElement.parentElement;
    view.classList.toggle("active");
    let panel = this.parentNode.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//menu counter hide
window.addEventListener("click", function(e) {
  eventClose(e);
});
function eventClose(x) {
  let popupSection = document.getElementById("popupSection");
  let divs = popupSection.getElementsByClassName("popup_container");
  let i;
  for (i = 0; i < divs.length; i++) {
    let div = divs[i];
    if (x.target !== div.previousElementSibling.firstElementChild) {
      if (
        x.target !== div &&
        x.target.parentNode !== div &&
        x.target.parentNode.parentNode !== div &&
        x.target.parentNode.parentNode.parentNode !== div &&
        x.target.parentNode.parentNode.parentNode.parentNode !== div
      ) {
        div.style.display = "none";
        div.previousElementSibling.firstElementChild.classList.remove("active");
        div.previousElementSibling.parentNode.classList.remove("active");
      }
    }
  }
}
//menu container code end

//checkbox mark code start
function checkboxMark(section, checkbox) {
  let popupSection = document.querySelector(section);
  let checkBoxInput = popupSection.querySelectorAll(checkbox);
  for (let i = 0; i < checkBoxInput.length; i++) {
    checkBoxInput[i].addEventListener("click", () => {
      checkBoxInput[i].nextElementSibling.classList.toggle("mark");
    });
  }
}
checkboxMark("#popupSection", ".checkbox-input");
//checkbox accordion
checkboxMark("#filterDrawer", ".checkbox-input");
//checkbox code end

//menu reset code start
function fillterReset() {
  let button = document.getElementById("filterResetbtn");
  button.addEventListener("click", () => {
    window.location.reload();
  });
}
fillterReset();
//menu reset code end

//guest and room count code start
//import personPlus function
import { personPlus, guestPlus, accordionIncreseRoom } from "./counts.js";
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
//accordion code
document.getElementById("increasePersonbtn2").addEventListener("click", () => {
  accordionIncreseRoom(1, "#decreasePersonbtn2");
});
document.getElementById("decreasePersonbtn2").addEventListener("click", () => {
  accordionIncreseRoom(-1, "#decreasePersonbtn2");
});
document.getElementById("increaseGuestbtn2").addEventListener("click", () => {
  accordionIncreseRoom(1, "#decreaseGuestbtn2");
});
document.getElementById("decreaseGuestbtn2").addEventListener("click", () => {
  accordionIncreseRoom(-1, "#decreaseGuestbtn2");
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

//filter accordion show and hide start
function accordionHideNShow() {
  let accordion = document.querySelector(".filter_drawer");
  let accordionButton = accordion.querySelectorAll(".accordion_header");
  let accordionPanel = accordion.querySelectorAll(".accordion_panel");
  accordionButton.forEach(button => {
    button.addEventListener("click", e => {
      if (button.nextElementSibling.style.display === "block") {
        accordionHiddenAll();
      } else {
        accordionHiddenAll();
        button.nextElementSibling.style.display = "block";
      }
      e.stopPropagation();
    });
  });
  function accordionHiddenAll() {
    accordionPanel.forEach(panel => {
      panel.style.display = "none";
    });
  }
}
accordionHideNShow();
//accordion code end

//more filter action start
function filterShowNHide(e) {
  let filterContainer = document.querySelector(".filter_drawer");
  document.getElementById("filterbtn").classList.toggle("active");
  filterContainer.classList.toggle("active");
  document.body.classList.toggle("active");
}
document.getElementById("filterbtn").addEventListener("click", () => {
  filterShowNHide();
});
//cancel filter button
document.getElementById("cancelFilter").addEventListener("click", () => {
  filterShowNHide();
});
//more filter action end

//wrapper list show code start
let loadMoreButton = document.getElementById("loadMoreButton");
function wrapperListShow() {
  let listCount = Number(loadMoreButton.dataset.listcount);
  let mediaWrapper = document.getElementById("mediaWrapper");
  let buttonSection = document.getElementById("loadMoreWrapper");
  listCount++;
  loadMoreButton.dataset.listcount = listCount;
  switch (listCount) {
    case 1:
      mediaWrapper.className += " show_first";
      break;
    case 2:
      mediaWrapper.className += " show_second";
      break;
    case 3:
      mediaWrapper.className += " show_third";
      break;
    case 4:
      mediaWrapper.className += " show_last";
      buttonSection.style.display = "none";
      break;
  }
}
loadMoreButton.addEventListener("click", wrapperListShow);
//wrapper list show code end
