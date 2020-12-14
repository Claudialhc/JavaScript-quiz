# JavaScript-quiz
<!-- REMEMBER TO ADD THE LINK TO THE DEPLOYED WEBSITE!!!! -->


<!-- this is the original code i set up delete before submitting!! -->
//create a start button to indicate quiz will begin
var qsEl = document.getElementById("question")
var btn = document.getElementById("btn")

var questions = [
  { hi: "Which of the following is not a possible value for Booleans?" }, //herre is where you will input your questions
  { hi: "Which of the following variable names is correct" },
  { hi: "localStorage only lets us store ________." },
  { hi: "Which of the following can you NOT log in the browser's console?" },
  { hi: "JavaScript uses camel case as a practice for writing names of methods, variables, classes, packages and constants."}, 
];
//make another array of objects for the answers ( like the one above)
var answers = [
  {an: "A)True B)False C)String"},
  {an: "A)var howManyGoldenRings B)var -GoldenRings C)var =GOLDENRINGS"},
  {an: "A)Objects B)Alerts C)Strings D)Booleans"},
  {an: "A)Strings B)Confirm C)Variables D)Even Equations"},
  {an: "A)True B)False C)Maybe D)None of the above"}
]
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
