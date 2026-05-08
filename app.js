const animals = [
  "🐶 Chien",
  "🐱 Chat",
  "🐰 Lapin",
  "🦊 Renard",
  "🐵 Singe"
];

let index = 0;

function display() {
  document.getElementById("content").textContent =
    index + " / " + (animals.length - 1) + " → " + animals[index];
}

function increase() {
  if (index < animals.length - 1) {
    index++;
    display();
  }
}

function decrease() {
  if (index > 0) {
    index--;
    display();
  }
}

display();