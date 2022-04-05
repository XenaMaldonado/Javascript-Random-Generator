var executeButton;
var outputParagraph;
var inputElement;

var fortunes = ["the best person ever!", "very much loved!", "such a sweetheart!", "an amazing person!", "the best person to exist!", "perfectoooo!"];

document.addEventListener("DOMContentLoaded", function(){
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function(){
    generate();
  });

});


// Write a function called `generate` that will take one argument (your visitor's name or something else)
// and prints a randomly generated response, pulling random options from an array, into an element of your page.
function generate(){

  var currentInputText = inputElement.value;

  var randomFortuneIndex = Math.floor(Math.random()*fortunes.length);
  outputParagraph.innerText = currentInputText + ", you are " + fortunes[randomFortuneIndex];
  //



  restyle();

}

// Write a function called `restyle` that applies new CSS styles to the `output` text
// in a random manner each time it fires. Modify at least three CSS properties.
function restyle() {

  // 1) changes the color of the text
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;

  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  outputParagraph.style.color = outputColorString;

  // 2) rotating output text box
  var randomRot = (Math.random() * 30) - 10;

  outputParagraph.style.transform = "rotate(" + randomRot + "deg)";

  outputParagraph.classList.toggle("specialParagraph");

  // 3) changes the font size of text inside text box
  document.getElementById("outputText").style.fontSize = Math.floor((Math.random() * 100) + 1)+"px";


}
