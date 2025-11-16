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

const form1 = document.querySelector("#webform");
const delOutput = document.querySelector("#del_output");

function handleSubmit1(event) {
  event.preventDefault();
  const formData = new FormData(form1);
  delOutput.textContent = formData.get("del");
  form1.reset();
}

form1.addEventListener("submit", handleSubmit1);

// ---------- FORM 2 ----------
const form2 = document.querySelector("#webform2");
const navnOutput = document.querySelector("#navn_output");
const emailOutput = document.querySelector("#email_output");
const radioOutput = document.querySelector("#radio_output"); // du skal lave denne i HTML

function handleSubmit2(event) {
  event.preventDefault();
  const formData = new FormData(form2);

  navnOutput.textContent = formData.get("name");
  emailOutput.textContent = formData.get("email");
  radioOutput.textContent = formData.get("bang"); // baby eller micro

  form2.reset();
}

form2.addEventListener("submit", handleSubmit2);
