// Initial References
const startBtn = document.getElementById("start");
const message = document.getElementById("message");
const controls = document.querySelector(".controls-container");

// Start Game
startBtn.addEventListener("click", () => {
    message.innerText = "Game Started! More features coming soon...";
});
