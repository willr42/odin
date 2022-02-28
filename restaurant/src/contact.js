function drawContact() {
  const rootDiv = document.getElementById("content");
  const main = document.createElement("main")
  main.classList.add("contact-main")
  const title = document.createElement("h1");
  const phoneHeading = document.createElement("h2")
  const phoneDescription = document.createElement("p")
  const emailHeading = document.createElement("h2")
  const emailDescription = document.createElement("p")
  title.textContent = "Contact Us";
  phoneHeading.textContent = "Phone No."
  phoneDescription.textContent = "(03) 9125 6169"
  emailHeading.textContent = "Email"
  emailDescription.textContent = "info@applebeys.com"
  const content = [title, phoneHeading, phoneDescription, emailHeading, emailDescription]
  content.forEach(element => {
    main.appendChild(element)
  });
  rootDiv.appendChild(main)
}

export default drawContact;
