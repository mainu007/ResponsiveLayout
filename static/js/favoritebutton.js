//faverite button style code
function favoriteButton() {
  let button = document.querySelectorAll(".favorite_btn");
  button.forEach(element => {
    element.addEventListener("click", function() {
      this.classList.toggle("active");
    });
  });
}

//export
export { favoriteButton };
