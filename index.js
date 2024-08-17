const maxAttempts = 10;
let attempts = 0;
let correctOrder = ["Radiant", "Joyful", "Cheerful", "blissful", "Hopeful", "Vibrant", "Encouraging"]
let currentOrder = []
let gameStarted = false;

const slide = document.createElement("input");
slide.type = "range";
slide.value = 0,
  slide.max = 6;
slide.style.width = "300px";
document.body.appendChild(slide);


const wordContainer = document.getElementById("wordContainer");
const sliderValue = document.getElementById("sliderValue");


const words = correctOrder.map(word =>{
  const wordElement = document.createElement("div");
  wordElement.className = "word";
  wordElement.innerText = word;
  return wordElement;
});

words.forEach(word => wordContainer.appendChild(word));


function startGame() {
  attempts = 0;
  currentOrder = [];
  document.getElementById('message').innerText = "";
  document.getElementById('attempts').innerText = "Attempts left: " + maxAttempts;
  gameStarted = true;
}

slide.addEventListener("input",()=>{
  if (!gameStarted)
    return;


const slideValue = parseInt(slide.value);
const selectedWord = words[slideValue];
if(!currentOrder.includes(selectedWord.textContent)){
  container.appendChild(selectedWord);
  currentOrder.push(selectedWord.textContent);
  attempts++;
  checkOrder();
}
if(attempts >= maxAttempts){
  endGame(false);
}
});

  
  
 
function checkOrder(){
  if (currentOrder.length === correctOrder.length){
    if(currentOrder.every((word,index) => word === correctOrder[index])){
      endGame(true);
    }else{
      document.getElementById('message').inner= "Incorrect. Try again";
      attempts--;
    }
  }
  document.getElementById("attempts").innerText = "attempts left; "+ (maxAttempts- attempts);

}

function endGame(won){
  gameStarted = false;
  if (won){
    document.getElementById('message').innerText = "Congratulations! You've arranged the words correctly!"
  }else {
    document.getElementById('message').innerText = "Sorry, you lose!";
  }
}



startGame();







// const wordContainer = document.createElement("Container");
// wordContainer.style.display = "flex";
// wordContainer.style.gap = "10px"
// wordContainer.style.padding = "20px";
// wordContainer.style.border = "1px solid";
// wordContainer.style. marginBottom = "20px";

