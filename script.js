//create a start button to indicate quiz will begin
var qsEl = document.getElementById("question")
var btn = document.getElementById("btn")

var questions = [
  { hi: "value" }, //herre is where you will input your questions
  { hi: "value" },
  { hi: "value" },
  { hi: "value" },
  { hi: "value" },
];
//make another array of objects for the answers ( like the one above)
btn.addEventListener("click", function() {
    qsEl.textContent = questions[0].hi;
    localStorage.setItem("key", JSON.stringify(questions))
});
//document.body.appendChild(h1El);
//have a timer start & first question appear as soon as I click start button
//have the timer live on the upper left corner of the screen
//if a question is answered incorrectly have time be subtracted from timer
//the game is over when all the questions are answered or timer reaches 0
// final score shown and a place to submit initials
//creare a link to view highscores
var stored = JSON.parse(localStorage.getItem("key"))
console.log(stored)