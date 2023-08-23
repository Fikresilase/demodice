const a = Math.floor(Math.random() * 6 + 1);
var b = "images/" + a + ".png";
var c = document.querySelectorAll("img")[0];
c.setAttribute("src", b);
const d = Math.floor(Math.random() * 6 + 1);
var e = "images/" + d + ".png";
var f = document.querySelectorAll("img")[1];
f.setAttribute("src", e);

if (a > d) {
  document.querySelector("h1").textContent = "player 1 wins.";
} else if (a < d) {
  document.querySelector("h1").textContent = "player 2 wins.";
} else {
  document.querySelector("h1").textContent = "you are equal, refresh again.";
}
