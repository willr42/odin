const modal = document.querySelector("#modal");
const modalBtn = document.querySelector(".newTodoButton");

function toggleModal() {
  if (getComputedStyle(modal).display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

function Modal() {
  modalBtn.addEventListener("click", toggleModal);
  window.addEventListener("click", outsideClick);
}

export default Modal;
