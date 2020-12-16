# JavaScript-quiz
This JavaScript Quiz template was created using JavaScript, HTML and Bootstrap. 
The point of this quiz is to test the user on their Javascript knowledge while trying to beat the timer at the same time. 

There are a series of questions that the user has to go through to reach the end. To create the the questions I created an array of objects. YOu can see bellow how I made the array: 

```js
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
```
After creating the array of object I moved forward with making a the code for the timer and an attempt to make the questions change aftwer you choose the correct answer or end the quiz if you choose the wrong answer.

Deployed Site: https://claudialhc.github.io/JavaScript-quiz/