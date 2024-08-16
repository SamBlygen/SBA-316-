const slide = document.createElement("input");
slide.type = "range";
slide.max = 25;
slide.value = 0;
document.body.appendChild(slide);

const div = document.getElementById("div");
document.body.appendChild(div);

slide.oninput = addStars;

function addStars(){
div.innerText = "";
for(let i = 0; i <this.value; i++){
  div.append("")
}
}
