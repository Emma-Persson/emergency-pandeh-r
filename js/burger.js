const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

// ---------- FORM 1 ----------
const form1 = document.querySelector("#webform");
const delOutput = document.querySelector("#del_output");

if (form1) {
  function handleSubmit1(event) {
    event.preventDefault();
    const formData = new FormData(form1);

    delOutput.textContent = formData.get("del");
    form1.reset();
  }

  form1.addEventListener("submit", handleSubmit1);
}

// ---------- DARK MODE ----------
const root = document.documentElement;
const btn = document.querySelector("#toggle");

if (btn) {
  btn.addEventListener("click", () => {
    root.classList.toggle("dark");
  });
}

// ---------- FORM 2 ----------
const form2 = document.querySelector("#webform2");
const navnOutput = document.querySelector("#navn_output");
const emailOutput = document.querySelector("#email_output");
const radioOutput = document.querySelector("#radio_output");

if (form2) {
  form2.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form2);

    navnOutput.textContent = formData.get("name");
    emailOutput.textContent = formData.get("email");
    radioOutput.textContent = formData.get("bang");

    form2.reset();
  });
}
