const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

const form = document.querySelector("form");
const delOutput = document.querySelector("#del_output");

function handleSubmit(event) {
  event.preventDefault();

  // 2. samle data op
  const formData = new FormData(form);
  const firstName = formData.get("del");

  // 3. vise data
  delOutput.textContent = firstName;

  // 4. evt. nustil formular

  form.reset();
}
form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
