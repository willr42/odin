// Spread images across slider
function offsetImages(imageWidth) {
  let images = Array.from(document.querySelectorAll('.image-holder'));

  for (let i = 1; i < images.length; i++) {
    const currentImage = images[i];
    const newOffset = (imageWidth * i).toString() + 'px';
    currentImage.style.left = newOffset;
  }
}

offsetImages(600);
