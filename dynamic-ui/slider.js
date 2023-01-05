// Spread images across slider
let slider = document.querySelector('.slider-frame');

// Removes the slider controls from the div to make it easier to work with.
function removeControls(slider) {
  return Array.from(slider.children).filter((element) =>
    element.classList.contains('image-holder')
  );
}

function offsetImages(imageWidth, slider) {
  let sliderChildren = Array.from(slider.children);

  for (let i = 1; i < sliderChildren.length; i++) {
    const currentElement = sliderChildren[i];
    if (currentElement.classList.contains('image-holder')) {
      const newOffset = (imageWidth * i).toString() + 'px';
      currentElement.style.left = newOffset;
    }
  }
}

offsetImages(600, slider);

slider.addEventListener('click', (event) => {
  let leftButton = document.querySelector('.left-button');
  let rightButton = document.querySelector('.right-button');
  if (event.target == rightButton) {
    console.log('Right button clicked');
  }
});
