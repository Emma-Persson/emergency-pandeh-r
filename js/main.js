document.querySelector("#hotspot1").addEventListener("click", updateInfoboxHead);
function updateInfoboxHead() {
  console.log("updatInfoboxHead");
  document.querySelector(".placeholder").textContent = "Find saksen frem! Klip mere af pandehåret af ind til det ser godt ud";
  document.querySelector(".info-text h2").textContent = "Saksen";
  document.querySelector("#efficiency").textContent = "Er et midlertidigt fix. Ser godt ud i momentet men  ";
  document.querySelector("#requirement").textContent = "";
}

document.querySelector("#hotspot2").addEventListener("click", updateInfoboxHead2);
function updateInfoboxHead2() {
  console.log("updatInfoboxHead2");
  document.querySelector(".placeholder").textContent = "Find shampooen frem. En metode der kræver lidt tid da pandehåret individuelt skal vaskes og derefter føntøres";
  document.querySelector(".info-text h2").textContent = "Vask";
  document.querySelector("#efficiency").textContent = "Er en god måde at fix pandehåret. Men husk at føntøre fra begge sidder  ";
  document.querySelector("#requirement").textContent = "";
}

document.querySelector("#hotspot3").addEventListener("click", updateInfoboxHead3);
function updateInfoboxHead3() {
  console.log("updatInfoboxHead3");
  document.querySelector(".placeholder").textContent = "Find Curleren frem.";
  document.querySelector(".info-text h2").textContent = "Curlere";
  document.querySelector("#efficiency").textContent = "Er en nem måde men er ikke altid det bedste resultat";
  document.querySelector("#requirement").textContent = "";
}
