// person count code
function personPlus(x) {
  let input1 = document.getElementById("roomInput");
  let input2 = document.getElementById("roomCountInput");
  let personRCount = Number(input1.textContent);
  if (personRCount === x + 1 && personRCount === 0) {
  } else {
    personRCount += x;
    input1.textContent = personRCount;
  }
  if (personRCount) {
    input2.textContent = "Room:" + personRCount;
  }
  if (personRCount === 0) {
    input2.textContent = "Room";
  }
}
//guest count code
function guestPlus(x) {
  let input1 = document.getElementById("guestInput");
  let input2 = document.getElementById("guestCountInput");
  let personRCount = Number(input1.textContent);
  if (personRCount === x + 1 && personRCount === 0) {
  } else {
    personRCount += x;
    input1.textContent = personRCount;
  }
  if (personRCount) {
    input2.textContent = "Guest:" + personRCount;
  }
  if (personRCount === 0) {
    input2.textContent = "Guest";
  }
}
//accordion code
function accordionIncreseRoom(value, id) {
  let input1 = document.querySelector(id).nextElementSibling;
  let personRCount = Number(input1.textContent);
  if (personRCount === value + 1 && personRCount === 0) {
  } else {
    personRCount += value;
    input1.textContent = personRCount;
  }
}

//export code
export { personPlus, guestPlus, accordionIncreseRoom };
