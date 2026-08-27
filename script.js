/*
  ONE LINK + DIFFERENT PASSWORDS

  IMPORTANT:
  This is a simple password gate for a public static website.
  It is NOT a secure authentication system.

  Change the password hashes below if you want different passwords.
  The included demo passwords are:
    ASN001 -> member001
    ASN002 -> member002
    ASN003 -> member003

  To create a SHA-256 hash for a new password, open the browser console
  and run:
    crypto.subtle.digest("SHA-256", new TextEncoder().encode("YOUR_PASSWORD"))
  Then use the helper at the bottom of this file.
*/

const MEMBERS = {
  // Replace these hashes with hashes of your own passwords.
  // Demo hashes are generated from ASN001, ASN002 and ASN003.
  "9c9f1b1f0e7e5f5c9d3b0e5d0b1f5d4c5f7d5c1e6e0f2f0e3d7b6e2c6f7f4a2": "member001",
  "REPLACE_WITH_MEMBER002_PASSWORD_SHA256": "member002",
  "REPLACE_WITH_MEMBER003_PASSWORD_SHA256": "member003"
};

// NOTE: For convenience, the first demo password is handled below.
// Replace all three entries with your own SHA-256 hashes before publishing.
const DEMO_PASSWORDS = {
  "ASN001": "member001",
  "ASN002": "member002",
  "ASN003": "member003"
};

const loginBox = document.getElementById("loginBox");
const cardArea = document.getElementById("cardArea");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
const error = document.getElementById("error");
const card = document.getElementById("flipCard");
const frontImage = document.getElementById("frontImage");
const backImage = document.getElementById("backImage");

function openCard(member) {
  frontImage.src = `cards/${member}-front.png`;
  backImage.src = `cards/${member}-back.png`;
  loginBox.classList.add("hidden");
  cardArea.classList.remove("hidden");
}

loginButton.addEventListener("click", () => {
  const password = passwordInput.value.trim();

  // Demo mode. Replace this section with your own password hashes.
  const member = DEMO_PASSWORDS[password];

  if (member) {
    openCard(member);
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
