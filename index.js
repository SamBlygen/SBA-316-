const maxAttempts = 10;
let attempts = 0;
let correctOrder = ["Radiant", "Joyful", "Cheerful","blissful", "Hopeful", "Vibrant","Encouraging"]
let currentOrder = []
let gameStarted = false;

const slide= document.createElement("input");
slide.type = "range";
slide.value = 0,
  slide.max = 25;
slide.style.width = "300px";
document.body.appendChild(slide);

const words = document.querySelectorAll(".word")


function startGame() {
  attempts = 0;
  correctAnswer = Math.floor(Math.random() * 10) + 1;
  document.getElementById('message').innerText = "";
  document.getElementById('attempts').innerText = "Attempts left: " + maxAttempts;
  gameStarted = true;
  playGame();
}

function playGame() {
  if (!gameStarted)
    return;
  let guess = window.prompt("Enter your guess (between 1 and 10):");
  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert("Please enter a number between 1 and 10.");
    return;
  }
  attempts++;
  if (guess === correctAnswer) {
    document.getElementById('message').innerText = "Congratulations! You guessed the correct number!";
    window.alert("You won! The correct number was " + correctAnswer);
    gameStarted = false;
  } else if (attempts < maxAttempts) {
    if (guess > correctAnswer) {
      document.getElementById('message').innerText = "Too high! Try again.";
    } else {
      document.getElementById('message').innerText = "Too low! Try again.";
    }
    document.getElementById('attempts').innerText = "Attempts left: " + (maxAttempts - attempts - 1);
    playGame();
  } else {
    document.getElementById('message').innerText = "Sorry, you're out of attempts! The correct number was " + correctAnswer + ".";
    window.alert("Game over! The correct number was " + correctAnswer);
    gameStarted = false;
  }
}














// const wordContainer = document.createElement("Container");
// wordContainer.style.display = "flex";
// wordContainer.style.gap = "10px"
// wordContainer.style.padding = "20px";
// wordContainer.style.border = "1px solid";
// wordContainer.style. marginBottom = "20px";


const sortedWord = document.create
