// Word and Hints Object
const options = {
  aroma: "Pleasing smell",
  pepper: "Salt's partner",
  halt: "Put a stop to",
  jump: "Rise suddenly",
  shuffle: "Mix cards up",
  combine: "Add; Mix",
  chaos: "Total disorder",
  labyrinth: "Maze",
  disturb: "Interrupt; upset",
  shift: "Move; Period of work",
  machine: "Device or appliance",
};

// Initial References
const startBtn = document.getElementById("start");
const message = document.getElementById("message");
const controls = document.querySelector(".controls-container");
const letterContainer = document.getElementById("letter-container");
const userInpSection = document.getElementById("user-input-section");
const hintRef = document.querySelector(".hint-ref");
let randomWord = "";
let randomHint = "";
const words = Object.keys(options);

// Generate random value
const generateRandomValue = (array) => Math.floor(Math.random() * array.length);

// Generate Word Function
const generateWord = () => {
  randomWord = words[generateRandomValue(words)];
  randomHint = options[randomWord];
  hintRef.innerHTML = `<div id="wordHint"><span>Hint: </span>${randomHint}</div>`;
  let displayItem = "";
  randomWord.split("").forEach(() => {
    displayItem += '<span class="inputSpace">_ </span>';
  });
  userInpSection.innerHTML = displayItem;
};

// Initial Function
const init = () => {
  randomWord = "";
  randomHint = "";
  message.innerText = "";
  userInpSection.innerHTML = "";
  letterContainer.innerHTML = "";
  generateWord();

  // For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

    // Number to ASCII [A-Z]
    button.innerText = String.fromCharCode(i);

    // Append generated buttons to the letters container
    letterContainer.appendChild(button);
  }
};

// Start Game
startBtn.addEventListener("click", () => {
  controls.classList.add("hide");
  init();
});

// Initialize on window load
window.onload = () => {
  init();
};
