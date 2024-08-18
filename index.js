const maxAttempts = 5; // initially had 10 attempts but decided to change it to a lower number
let attempts = 0;
let correctOrder = ["✨Radiant ✨", "😂Joyful😂", "🎉Cheerful🎉", "😊Thankful😊", "🙏Blessed🙏", "🩷Vibrant🩷", "💕Worthy💕", "💪Fearless💪", "🌍Inspire🌍", "🏆Will-Power🏆"]
let currentOrder = []
let gameStarted = false;



const slide = document.getElementById("range");

const wordContainer = document.getElementById("wordContainer");
const starContainer = document.getElementById("starContainer");

correctOrder.forEach(word => {
    const wordElement = document.createElement("div");
    wordElement.className = "word";
    wordElement.innerHTML = `<strong>${word}</strong>`;
    wordElement.style.opacity = "0";
    wordElement.style.transition = "opacity 0.3 ease";
    wordContainer.style.marginBottom = "30px";
    wordContainer.appendChild(wordElement);
});

function startGame() {
    attempts = 0;
    currentOrder = [];
    document.getElementById("message").innerText = "";
    document.getElementById("attempts").innerText = "Attempts left: " + maxAttempts;
    gameStarted = true;
}

slide.addEventListener("input", () => {
    if (!gameStarted) return;
    const slideValue = parseInt(slide.value);

    const words = document.querySelectorAll(".word");
    words.forEach((word, index) => {
        if (index <= slideValue) {
            word.style.opacity = "1";
        } else {
            word.style.opacity = "0.5";
        }
    });

    starContainer.innerText = "🌟".repeat(slideValue + 1);

    if (slideValue === parseInt(slide.max)) {
        window.alert("You've reached the end! Affirmation reveal!");
    }

    if (attempts >= maxAttempts) {
        endGame(false);
    }
});

function endGame(won) {
    gameStarted = false;
    if (won) {
        document.getElementById("message").innerText = "Congratulations!";
    } else {
        document.getElementById("message").innerText = "Sorry, you lose!";
    }
}

document.getElementById("start-button").addEventListener("click", startGame);

slide.addEventListener("input",()=>{
  const starContainer = document.getElementById("starContainer");
  const sliderValue = parseInt(slide.value);
})

starContainer.innerHTML = "🌟". repeat(slide + 1 )


const stars = stars.querySelectorAll("span");
stars.forEach((star, index)=>{
  star.style.color = index <= sliderValue/2 ? gold : silver;

});

if (window.innerWidth < 600){
  window.alert("Lets do this!")
};

document.getElementById("validateButton").addEventListener("click", () =>{
  const userInput = document. getElementById("userInput");
  if (!userInput.checkValidity()){
    window.alert("Please enter a valid word with at least 3 letters.")
  }else{
    window.alert("You did it!")
  }
});

document.getElementById("affirmForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  const formInput = document.getElementById("formInput");
  if (formInput === ""){
    window.alert("Please complete!")
  }else{
    window.alert("You did it!");
  }
});

const childContainer = document.getElementById("childContainer");
const childNode = document. createElement("div");
childNode.innerText = "Stars Revealed: ${slide.value}";
childContainer.appendChild(childNode);


slide.addEventListener("input", () => {
  childNode.innerText = "Stars Revealed: $ {parseInt(slide.value) + 1}";
});







// // const wordContainer = document.createElement("Container");
// // wordContainer.style.display = "flex";
// // wordContainer.style.gap = "10px"
// // wordContainer.style.padding = "20px";
// // wordContainer.style.border = "1px solid";
// // wordContainer.style. marginBottom = "20px";

