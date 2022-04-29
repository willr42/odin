const dropdown = document.querySelector(".dropdown");
const dropdownParent = document.querySelector(".dropdown-parent");
const dropdownLinks = document.querySelectorAll(".dropdown-link");

dropdownParent.addEventListener("mouseenter", (e) => {
  console.log("entered dropdown");
  dropdownLinks.forEach(dropdown => dropdown.classList.add("active"));
});

dropdown.addEventListener("mouseleave", (e) => {
  if (e.relatedTarget === dropdownParent) {
    return;
  } else {
    dropdownLinks.forEach(dropdown => dropdown.classList.remove("active"));
  }
});
