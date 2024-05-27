/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  generateCard();
  document
    .querySelector("#generate-button")
    .addEventListener("click", generateCard);
};

function generateCard() {
  const simbolos = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSimbolos = simbolos[Math.floor(Math.random() * simbolos.length)];
  const randomNumeros = numeros[Math.floor(Math.random() * numeros.length)];

  const topSimbolosElement = document.getElementById("top-simbolos");
  const numerosElement = document.getElementById("numeros");
  const bottomSimbolosElement = document.getElementById("bottom-simbolos");

  topSimbolosElement.textContent = randomSimbolos;
  numerosElement.textContent = randomNumeros;
  bottomSimbolosElement.textContent = randomSimbolos;

  if (randomSimbolos === "♦" || randomSimbolos === "♥") {
    topSimbolosElement.style.color = "red";
    numerosElement.style.color = "red";
    bottomSimbolosElement.style.color = "red";
  } else {
    topSimbolosElement.style.color = "black";
    numerosElement.style.color = "black";
    bottomSimbolosElement.style.color = "black";
  }
}
