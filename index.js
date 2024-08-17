const maxAttempts = 5; // initially had 10 attempts but decided to change it to a lower number
let attempts = 0;
let correctOrder = ["✨Radiant ✨", "😊Joyful😊", "🎉Cheerful🎉", "😊Blissful😊", "🙏Blessed🙏", "🩷Vibrant🩷", "💕Worthy💕"]// i really wanted 25 words but game kept breaking
let currentOrder = []
let gameStarted = false;

const slide = document.createElement("input");
slide.type = "range";
slide.value = 0,
  slide.max = correctOrder.length -1;
slide.style.width = "300px";
document.body.appendChild(slide);


const wordContainer = document.createElement('div');
wordContainer.id = 'wordContainer';

// totally forgot about the Document fragment requirement and had to go back in and TRY to adjust. 
const f = document.createDocumentFragment();

correctOrder.forEach(word =>{
  const wordElement = document.createElement("div");
  wordElement.className = "word";
  wordElement.innerText = word;
  wordElement.style.filter = "blur(5px)";
  wordElement.style.transition = 'filter 0.3s ease';
  f.appendChild(wordElement)
});

wordContainer.appendChild(f);
document.body.appendChild(wordContainer);


document.querySelector('#startButton').addEventListener("click", startGame);


slide.addEventListener("input", ()=>{
  if (!gameStarted)
        return;
}
)

const slideValue = parseInt(slide.value);
if (slideValue=== parseInt(slide.max)){
  revealWords();
}else{
  window.alert("Keep sliding until you reach the end of the bar!");

}

function startGame() {
  attempts = 0;
  currentOrder = [];
  document.getElementById('message').innerText = "";
  document.getElementById('attempts').innerText = "Attempts left: " + maxAttempts;
  gameStarted = true;
}

function revealWords(){
  const wordContainer = document.querySelector("wordContainer");
  const firstWord = wordContainer.firstChild;
}


if (firstWord){
  wordContainer.childNodes.forEach(word=>{
    word.style.filter = "none";
  });
}

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
revealWords();
endGame(won);
checkOrder();


// slide.addEventListener("input",()=>{
//   


// const slideValue = parseInt(slide.value);
// const selectedWord = words[slideValue];

// if(!currentOrder.includes(selectedWord.textContent)){
//   wordContainer.appendChild(selectedWord);
//   currentOrder.push(selectedWord.textContent);
//   attempts++;
//   checkOrder();
// }
// if(attempts >= maxAttempts){
//   endGame(false);
// }
// });

// function revealWords(){
//   words.forEach(word=>{
//     word.style.filter = "none";
//   });
// }

  
 












// // const wordContainer = document.createElement("Container");
// // wordContainer.style.display = "flex";
// // wordContainer.style.gap = "10px"
// // wordContainer.style.padding = "20px";
// // wordContainer.style.border = "1px solid";
// // wordContainer.style. marginBottom = "20px";

