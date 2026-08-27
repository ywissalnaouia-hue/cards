/*
  ASN MEMBERSHIP CARDS — ONE LINK + DIFFERENT PASSWORDS

  Image naming:
    cards/1-front.png   cards/1-back.jpg
    cards/2-front.png   cards/2-back.jpg
    cards/3-front.png   cards/3-back.jpg

  Password mapping:
    ASN001 -> card 1
    ASN002 -> card 2
    ASN003 -> card 3
*/

const PASSWORDS = {
  "ASN001": "1",
  "ASN002": "2",
  "ASN003": "3"
};

const loginBox = document.getElementById("loginBox");
const cardArea = document.getElementById("cardArea");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
const error = document.getElementById("error");
const card = document.getElementById("flipCard");
const frontImage = document.getElementById("frontImage");
const backImage = document.getElementById("backImage");

function openCard(cardNumber) {
  frontImage.src = `cards/${cardNumber}-front.png`;
  backImage.src = `cards/${cardNumber}-back.jpg`;
  frontImage.onerror = () => {
    error.textContent = `Front image for card ${cardNumber} was not found.`;
  };
  backImage.onerror = () => {
    error.textContent = `Back image for card ${cardNumber} was not found.`;
  };

  loginBox.classList.add("hidden");
  cardArea.classList.remove("hidden");
}

loginButton.addEventListener("click", () => {
  const password = passwordInput.value.trim();
  const cardNumber = PASSWORDS[password];

  if (cardNumber) {
    openCard(cardNumber);
  } else {
    error.textContent = "Incorrect password.";
    passwordInput.value = "";
  }
});

passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loginButton.click();
});

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});
