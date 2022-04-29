const dropdown = document.querySelector(".dropdown");
const dropdownParent = document.querySelector(".dropdown-parent");
const dropdownLinks = document.querySelectorAll(".dropdown-link");
const aTagsInsideDropdown = Array.from(document.querySelectorAll(".inside-dropdown"))

dropdownParent.addEventListener("mouseenter", (e) => {
  dropdownLinks.forEach(dropdown => dropdown.classList.add("active"));
});

dropdownParent.addEventListener("mouseleave", (e) => {
  if(e.relatedTarget === dropdown || aTagsInsideDropdown.includes(e.relatedTarget)) { // Otherwise, when we exit towards dropdown-parent the menu does not close
	return
  } else {
    dropdownLinks.forEach(dropdown => dropdown.classList.remove("active"))
  }
})

dropdown.addEventListener("mouseleave", (e) => {
  if (e.relatedTarget === dropdownParent) {
    return;
  } else {
    dropdownLinks.forEach(dropdown => dropdown.classList.remove("active"));
  }
});
