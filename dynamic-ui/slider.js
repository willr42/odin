// Spread images across slider
let slider = document.querySelector('.slider-frame');

// Removes the slider controls from the div to make it easier to work with.
function removeControls(slider) {
  return Array.from(slider.children).filter((element) =>
    element.classList.contains('image-holder')
  );
}

/**
 * Performs initial setup of the images in the slider by assigning each an offset.
 * @param {int} imageWidth
 * @param {Element} slider
 */
function offsetImages(imageWidth, slider) {
  let sliderChildren = removeControls(slider);

  for (let i = 0; i < sliderChildren.length; i++) {
    const currentElement = sliderChildren[i];
    const newOffset = (imageWidth * i).toString() + 'px';
      currentElement.style.left = newOffset;
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
