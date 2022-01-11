
function drawContact(){
  const rootDiv = document.getElementById("content");
  const title = document.createElement("h1");
  const phoneHeading = document.createElement("h2")
  const phoneDescription = document.createElement("p")
  const emailHeading = document.createElement("h2")
  const emailDescription = document.createElement("p")
  title.textContent = "Contact Us";
  phoneHeading.textContent = "Phone No."
  phoneDescription.textContent = "(03) 9125 6169"
  emailHeading.textContent = "Email"
  emailDescription = "info@applebeys.com"
  const content = [title, phoneHeading, phoneDescription, emailHeading, emailDescription]
  content.forEach(element => {
    rootDiv.appendChild(element)
  });
}

export default drawContact;
