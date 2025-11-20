document.querySelector("#hotspot1").addEventListener("click", updateInfoboxHead);
function updateInfoboxHead() {
  console.log("updatInfoboxHead");
  document.querySelector(".placeholder").textContent =
    "Den klassiske fælde. Du tænker: “Bare én millimeter… så ligger det perfekt.” Men pludselig står du med en saks i hånden, sved på panden – og potentielt micro bangs, du ikke helt havde planlagt. Alle har prøvet det, og let’s be honest: det bliver helt sikkert ikke sidste gang, du falder for fristelsen. Bruges med forsigtighed. Og helst ikke efter kl. 22.";
  document.querySelector(".info-text h2").textContent = "“Jeg-klipper-da-bare-lidt”-løsningen";
  document.querySelector("#efficiency").textContent = "Find saksen frem! Klip mere af pandehåret af ind til det ser godt ud";
  document.querySelector("#requirement").textContent = "Er et midlertidigt fix. Ser godt ud i momentet men kan skabe store problemer for fremtiden ";
}

document.querySelector("#hotspot2").addEventListener("click", updateInfoboxHead2);
function updateInfoboxHead2() {
  console.log("updatInfoboxHead2");
  document.querySelector(".placeholder").textContent = "Den luksuriøse løsning for dig, der går all-in på pandehårsperfektion. Vask pandehåret hurtigt, dup det tørt og frem med rundbørsten og føntørreren.";
  document.querySelector(".info-text h2").textContent = "Shampoo & super-føntørring";
  document.querySelector("#efficiency").textContent =
    "Føntør-tip: Træk pandehåret både til venstre og til højre, mens du føntørrer – det hjælper med at undgå de der faste “skilleveje”, som pandehår elsker at lave. Løft det op for volume, form det ned for sleekness, og afslut med kold luft for et “jeg har styr på mit liv”-look. ";
  document.querySelector("#requirement").textContent = "Det tager længst tid, men resultatet? Chef’s kiss.";
}

document.querySelector("#hotspot3").addEventListener("click", updateInfoboxHead3);
function updateInfoboxHead3() {
  console.log("updatInfoboxHead3");
  document.querySelector(".placeholder").textContent =
    "Har du travlt – eller er du bare færdig med livet? Sæt en curler i pandehåret, mens du laver alt andet, der giver mening: mascara, kaffe, eksistentiel krise. Når du tager den ud, vil pandehåret se ud som om du faktisk har gjort en indsats.";
  document.querySelector(".info-text h2").textContent = "Curler-tricket (a.k.a. den 5-minutters mirakelkur)";
  document.querySelector("#efficiency").textContent = "Er virkelog nemt men kan også til tider gå galt. Prøv dig frem!";
  document.querySelector("#requirement").textContent = "Ingen vil vide, hvor lidt du faktisk gjorde.";
}
