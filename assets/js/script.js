var timer = document.querySelector(".timer");
var countdown = document.getElementById("countdown");
var start = document.getElementById("start-btn");

start.addEventListener("click", startGame);
start.addEventListener("click", startDisplay);

//Set timeLeft as global variable or else you cant subtract time on incorrect answer
var timeLeft = 60;
function startGame() {
    var timeInterval = setInterval
        (function () {
            // As long as the `timeLeft` is greater than 1
            if (timeLeft > 1) {
                // Set the `textContent` of `timerEl` to show the remaining seconds
                countdown.textContent = timeLeft + ' seconds remaining';
                // Decrement `timeLeft` by 1
                timeLeft--;
            } else if (timeLeft === 1) {
                // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
                countdown.textContent = timeLeft + ' second remaining';
                timeLeft--;
            } else {
                // Once `timeLeft` gets to 0, set `timerEl` to an empty string
                countdown.textContent = 'Game Over';
                // Use `clearInterval()` to stop the timer
                clearInterval(timeInterval);
                // Call the `displayMessage()` function
                displayMessage();
            }
        }, 1000);

}
//we need a function for when we press start, the first question is displayed start button is hidden.
function startDisplay() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("q1").style.display = "block";
    document.getElementById("start-btn").style.display = "none";
}


//We need to target the buttons for Question #1 and find a way to target them on eventListen to change their status.
var q1Buttons = document.querySelector(".q1Buttons");

//Function that displays the "Correct!" message on screen when the correct answer is selected.
//We need to add the screen change to the next question
function Correct() {
    document.getElementById("q1Correct").style.display = "block";
}
//Function that displays the "Incorrect" message on screen when the wrong answer is selected.
//We need to add the time subtraction to the function and the screen change to the next question.
function Incorrect() {
    document.getElementById("q1Incorrect").style.display = "block";
    timeLeft -= 3;
}

//We need a function that targets the button events and makes changes based on which button was pressed
q1Buttons.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".btn")) {
        var state = element.getAttribute("data-state");
        if (state === "correct") {
            Correct();
        } else if (state === "incorrect") {
            Incorrect();
        }
    }
})


