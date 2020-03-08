function rememberActive() {
  let btn = document.getElementById("rememberbtn");
  function active() {
    btn.classList.toggle("active");
  }
  btn.addEventListener("click", active);
}
rememberActive();
