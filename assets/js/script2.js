//We need a set of questions as an array of objects
var questions = [
  {
    qText: "Commonly used Data Types DO NOT include?:",
    answer: ['strings', 'boolean', 'alerts', 'numbers'],
    ansCorrect: 'alert'
  },

  {
    qText: "The condition in an if/else statement is enclosed with?:",
    answer:['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
    ansCorrect: "parenthesis"
  },


  {
    qText: "Arrays in Javascript can be used to store?:",
    answer:['numbers & strings', 'arrays', 'booleans', 'AotA'],
    ansCorrect: "AotA"
  },


  {
    qText: "String values must be enclosed within _ when being assigned to variables?:",
    answer:['commas', 'curly braces', 'quotes', 'parenthesis'],
    ansCorrect: "quotes"
  },


  {
    qText: "A very useful tool during development and debugging for printing content to the screen is?:",
    answer:['JS', 'Terminal/Bash', 'for loops', 'console.log()'],
    ansCorrect: "console.log()"
  },

];

//We need our global variables set
//We need somthing to store userScores=timer/timeLeft to put in local Storage
//We need all of our variables to DYNAMICALLY generate our content which YOU DID NOT DO IN FIRST VERSION BECAUSE YOU DIDNT READ THE DIRECTIONS!!!!!

//We need to store the qIndex
var qIndex = 0;
var userScore = 60;
var timeInterval = 0;
// var timeLeft
//Where will our questions live? Where will our buttons go?
var start = document.getElementById("start-btn");
var countdown = document.getElementById("countdown");
var qDisplay = document.getElementById("qScreen");
var btnDisplay = document.getElementById("qBtn");
var qMessageDisplay = document.getElementById("qMessage");

//We need to have timer function when we press the start button(addEventListener(click (something))) Look at 09-10 set userScore to secondLeft??Set to 60 seconds.

start.addEventListener("click", function() {
  if (timeInterval === 0) {
    timeInterval = setInterval(function() {
      timeLeft--;
      countdown.textContent = timeLeft + " seconds remaining...";

      if (timeLeft <=0) {
        clearInterval(timeInterval);
        endGame();
        countdown.textContent = "GAME OVER!!!";
      }
    }, 1000);
  }
})









