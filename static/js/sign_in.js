function rememberActive() {
  let button = document.querySelectorAll(".rememberbtn");
  function active(index) {
    button[index].classList.toggle("active");
  }
  button.forEach((element, index) => {
    element.addEventListener("click", () => {
      active(index);
    });
  });
}
rememberActive();

function buttonAnimationLoading() {
  let button = document.querySelectorAll(".social_btn");
  button.forEach((element, index) => {
    element.addEventListener("click", () => {
      button.forEach(elementClass => {
        elementClass.classList.remove("active");
      });
      element.className += " active";
    });
  });
}
buttonAnimationLoading();
