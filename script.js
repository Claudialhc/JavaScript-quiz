//create a start button to indicate quiz will begin
var qsEl = document.getElementById("question");
var btn = document.getElementById("btn");
var timeEl = document.querySelector(".time");
var btnEl1 = document.getElementById("btn1");
var btnEl2 = document.getElementById("btn2");
var btnEl3 = document.getElementById("btn3");
var btnEl4 = document.getElementById("btn4");
var qsContainer = document.querySelector(".questionContainer");
var welcome = document.querySelector(".welcome");

var questionsArray = [
  {
    question: "Which of the following is not one of the six data types that are primitive?",
    answers: ["Booleans", "Strings", "Symbol", "Function"],
    correct: "Function",
  },
  {
    question: "Which of the following variable names is correct",
    answers: ["var howManyGoldenRings", "var -GoldenRings", "var =GOLDENRINGS", "var 1goldenrings"],
    correct: "var howManyGoldenRings",
  },
  {
    question: "localStorage only lets us store ________.",
    answers: ["Objects", "Alerts", "Strings", "Booleans"],
    correct: "Strings",
  },
  {
    question: "Which of the following can you NOT log in the browser's console?",
    answers: ["Strings", "Confirm", "Variables", "Even Equations"],
    correct: "Confirm",
  },
  {
    question: "JavaScript uses camel case as a practice for writing names of methods, variables, classes, packages and constants.",
    answers: ["True", "False", "Maybe", "None of the above"],
    correct: "True",
  },
];

//this is the timer 
var startBtn = document.querySelector("#btn");
var secondsLeft = 70;

function startQuiz() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till end of quiz.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
//create a question index that will replace the 0 on lines 59 - 63 
//increment this everytime somebody clicks on an answer button

btn.addEventListener("click", function () {
  // .remove("hide") was used to hide the answer buttons from the initial page.
  qsContainer.classList.remove("hide")
  // .add("hide") used below is to hide the the "start button" from the actual questions
  btn.classList.add("hide")
  // this .add("hide") is used to hide the introduction of the quiz after the "Start Quiz" button is pressed
  welcome.classList.add("hide")
  qsEl.textContent = questionsArray[0].question;
  btnEl1.textContent = questionsArray[0].answers[0]
  btnEl2.textContent = questionsArray[0].answers[1]
  btnEl3.textContent = questionsArray[0].answers[2]
  btnEl4.textContent = questionsArray[0].answers[3]
  //localStorage.setItem("key", JSON.stringify(questions));
  startQuiz();
});
//document.body.appendChild(h1El);
//have a timer start & first question appear as soon as I click start button
//have the timer live on the upper left corner of the screen
//if a question is answered incorrectly have time be subtracted from timer
//the game is over when all the questions are answered or timer reaches 0
// final score shown and a place to submit initials
//creare a link to view highscores

var stored = JSON.parse(localStorage.getItem("key"));
console.log(stored);
