let num = Math.floor(Math.random() * 100) + 1;
let NbEssais = 0;
let nombre = document.getElementById("nombre");
let resultat = document.getElementById("result");
function Devine() {
  let choisi = nombre.value;
  NbEssais++;
  if (choisi < num) {
    resultat.innerHTML = "Le nombre à trouver est plus grand";
    resultat.style.color = "blue";
  }
  if (choisi > num) {
    resultat.innerHTML = "Le nombre à trouver est plus petit";
    resultat.style.color = "red";
  }
  if (choisi == num) {
    resultat.innerHTML =
      "Correct ! Vous avez trouvé en " + NbEssais + "essais.";
    resultat.style.color = "green";
  }
}
// ======================================
