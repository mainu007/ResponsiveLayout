function checkboxMark(section, checkbox) {
  let popupSection = document.querySelector(section);
  let checkBoxInput = popupSection.querySelectorAll(checkbox);
  for (let i = 0; i < checkBoxInput.length; i++) {
    checkBoxInput[i].addEventListener("click", () => {
      checkBoxInput[i].nextElementSibling.classList.toggle("mark");
    });
  }
}

//export
export { checkboxMark };
