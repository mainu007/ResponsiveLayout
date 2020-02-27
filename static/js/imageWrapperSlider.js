//wrapper image slider
// let imgSliderCount = 0;
function wrapperImageNext(x) {
  let imgParent = event.target.parentNode;
  let imgSliderCount = Number(imgParent.dataset.count);
  let dot = imgParent.lastElementChild.getElementsByTagName("span");
  let img = imgParent.firstElementChild.getElementsByTagName("img");
  imgSliderCount += x;
  //new code
  imgParent.dataset.count = imgSliderCount;
  //dot code
  for (let i = 0; i < dot.length; i++) {
    dot[i].style.width = "6px";
    dot[i].style.height = "6px";
  }
  switch (imgSliderCount) {
    case 1:
      img[2].style.transition = "none";
      img[2].style.left = "0";
      img[2].style.transform = "translateX(100%)";
      break;
    case 2:
      img[0].style.transition = "none";
      img[0].style.left = "0";
      img[0].style.transform = "translateX(100%)";
      break;
    case 3:
      img[1].style.transition = "none";
      img[1].style.left = "0";
      img[1].style.transform = "translateX(100%)";
      break;
  }
  img[imgSliderCount - 1].style.transform = "translateX(-100%)";
  if (imgSliderCount === img.length) {
    imgSliderCount = 0;
    //new code
    imgParent.dataset.count = imgSliderCount;
    img[imgSliderCount].style.transition = "0.4s";
    img[imgSliderCount].style.transform = "translateX(0px)";
    // dot code
    dot[imgSliderCount].style.width = "8px";
    dot[imgSliderCount].style.height = "8px";
  } else {
    img[imgSliderCount].style.transition = "0.4s all";
    img[imgSliderCount].style.transform = "translateX(0px)";
    //dot code
    dot[imgSliderCount].style.width = "8px";
    dot[imgSliderCount].style.height = "8px";
  }
}
//image slider previous code
function wrapperImagePrev(x) {
  let imgParent = event.target.parentNode;
  let imgSliderCount = Number(imgParent.dataset.count);
  let dot = imgParent.lastElementChild.getElementsByTagName("span");
  let img = imgParent.firstElementChild.getElementsByTagName("img");
  imgSliderCount += x;
  //new code
  imgParent.dataset.count = imgSliderCount;
  if (imgSliderCount === 0) {
    imgSliderCount = 3;
    //new code
    imgParent.dataset.count = imgSliderCount;
  }
  if (imgSliderCount < 0) {
    imgSliderCount = 2;
    //new code
    imgParent.dataset.count = imgSliderCount;
  }
  //dot code
  for (let i = 0; i < dot.length; i++) {
    dot[i].style.width = "6px";
    dot[i].style.height = "6px";
  }
  switch (imgSliderCount) {
    case 1:
      img[0].style.transition = "none";
      img[0].style.left = "0";
      img[0].style.transform = "translateX(-100%)";
      break;
    case 2:
      img[1].style.transition = "none";
      img[1].style.left = "0";
      img[1].style.transform = "translateX(-100%)";
      break;
    case 3:
      img[2].style.transition = "none";
      img[2].style.left = "0";
      img[2].style.transform = "translateX(-100%)";
      break;
  }
  if (imgSliderCount === 3) {
    img[0].style.transition = "0.4s all";
    img[1].style.transform = "translateX(100%)";
    img[0].style.transform = "translateX(0px)";
    //count code
    imgSliderCount = 0;
    //new code
    imgParent.dataset.count = imgSliderCount;
    //dot code
    dot[imgSliderCount].style.width = "8px";
    dot[imgSliderCount].style.height = "8px";
  }
  if (imgSliderCount === 1) {
    img[1].style.transition = "0.4s all";
    img[2].style.transform = "translateX(100%)";
    img[1].style.transform = "translateX(0px)";
    //dot code
    dot[imgSliderCount].style.width = "8px";
    dot[imgSliderCount].style.height = "8px";
  }
  if (imgSliderCount === 2) {
    img[2].style.transition = "0.4s all";
    img[0].style.transform = "translateX(100%)";
    img[2].style.transform = "translateX(0px)";
    //dot code
    dot[imgSliderCount].style.width = "8px";
    dot[imgSliderCount].style.height = "8px";
  }
}

//slider export
export { wrapperImageNext, wrapperImagePrev };
