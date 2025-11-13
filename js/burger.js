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

// const form = document.querySelector("#webform");
// const delTextarea = document.querySelector("#del");
// const updatesContainer = document.querySelector("#updates-container");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // forhindrer reload af siden

//   const text = delTextarea.value.trim();
//   if (text === "") return; // hvis feltet er tomt, gør ikke noget

//   // Lav et nyt “opslag” element
//   const newUpdate = document.createElement("div");
//   newUpdate.classList.add("update-post");
//   newUpdate.textContent = text;

//   // Tilføj opslaget øverst (så nyeste kommer først)
//   updatesContainer.prepend(newUpdate);

//   // Nulstil textarea
//   delTextarea.value = "";
// });
