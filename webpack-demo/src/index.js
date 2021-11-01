import _ from "lodash";


function component() {
  const element = document.createElement("div");

  // Lodash, imported at top of script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

// I'm up to https://webpack.js.org/guides/asset-management/#loading-fonts