/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let suits = ["heart", "spade", "diamond", "club"];
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K"
  ];

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  let card = document.querySelector(".custom-card");
  card.classList.add(randomSuit);

  document.querySelector(".number").textContent = randomNumber;
};
