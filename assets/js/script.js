var timer = document.querySelector(".timer");
var countdown = document.getElementById("countdown");
var start = document.getElementById("start-btn");
var q1Buttons = document.querySelector(".q1Buttons");
var q2Buttons = document.querySelector(".q2Buttons");
var q3Buttons = document.querySelector(".q3Buttons");
var q4Buttons = document.querySelector(".q4Buttons");
var q5Buttons = document.querySelector(".q5Buttons");
// Use these for Play again/Submit
var q1Buttons = document.querySelector(".q1Buttons");
var q1Buttons = document.querySelector(".q1Buttons");




// We need a function to stop the timer when the game ends by answering all of the questions 
    function endGame() {
        clearInterval(timeInterval);
    };


start.addEventListener("click", startGame);
start.addEventListener("click", startDisplay);

// Set timeLeft as global variable or else you cant subtract time on incorrect answer
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
            } 
            else {
                // Once `timeLeft` gets to 0, set `timerEl` to an empty string
                countdown.textContent = 'Game Over';
                // Use `clearInterval()` to stop the timer
                clearInterval(timeInterval);
                // Call the `displayMessage()` function
                displayMessage();
            }
        });

}

// we need a function for when we press start, the first question is displayed start button is hidden.
function startDisplay() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("q1").style.display = "block";
    document.getElementById("start-btn").style.display = "none";
};
// We need to target the buttons for Question #1 and find a way to target them on eventListen to change their status.

// Function that displays the "Correct!" message on screen when the correct answer is selected.
// We need to add the screen change to the next question
function Correct() {
    document.querySelectorAll(".correct").style.display = "block";
    // document.getElementById("q1Correct").style.display = "block";
    // document.getElementById("next1").style.display = "block";
}
// Function that displays the "Incorrect" message on screen when the wrong answer is selected.
// We need to add the time subtraction to the function and the screen change to the next question.
function Incorrect() {
    document.querySelectorAll(".incorrect").style.display = "block";
    // document.getElementById("q1Incorrect").style.display = "block";
    // document.getElementById("next1").style.display = "block";
    timeLeft -= 3;
}

// We need a function that targets the button events and makes changes based on which button was pressed.
// Can we set this to a general any buttons that are question related?
// Can we use a loop to iterate through an array of questions where if a buttono is pressed, we move to the next question?
q1Buttons.addEventListener("click", function (event) {
    setTimeout(function () {
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "block";
    }, 1000);
    var element = event.target;
    if (element.matches(".btn")) {
        var state = element.getAttribute("data-state");
        if (state === "correct") {
            document.getElementById("q1Correct").style.display = "block";
        } else if (state === "incorrect") {
            document.getElementById("q1Incorrect").style.display = "block";
            timeLeft -= 3;
        }
    }

})

q2Buttons.addEventListener("click", function (event) {
    setTimeout(function () {
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "block";
    }, 1000);
    var element = event.target;
    if (element.matches(".btn")) {
        var state = element.getAttribute("data-state");
        if (state === "correct") {
            document.getElementById("q2Correct").style.display = "block";
        } else if (state === "incorrect") {
            document.getElementById("q2Incorrect").style.display = "block";
            timeLeft -= 3;
        }

    }
})
q3Buttons.addEventListener("click", function (event) {
    setTimeout(function () {
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "block";
    }, 1000);
    var element = event.target;
    if (element.matches(".btn")) {
        var state = element.getAttribute("data-state");
        if (state === "correct") {
            document.getElementById("q3Correct").style.display = "block";
        } else if (state === "incorrect") {
            document.getElementById("q3Incorrect").style.display = "block";
            timeLeft -= 3;
        }

    }
})
q4Buttons.addEventListener("click", function (event) {
    setTimeout(function () {
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "block";
    }, 1000);
    var element = event.target;
    if (element.matches(".btn")) {
        var state = element.getAttribute("data-state");
        if (state === "correct") {
            document.getElementById("q4Correct").style.display = "block";
        } else if (state === "incorrect") {
            document.getElementById("q4Incorrect").style.display = "block";
            timeLeft -= 3;
        }

    }
})
q5Buttons.addEventListener("click", function (event) {
    setTimeout(function () {
        document.getElementById("q5").style.display = "none";
        document.getElementById("gameOver").style.display = "block";
    }, 1000);
    var element = event.target;
    if (element.matches(".btn")) {
        var state = element.getAttribute("data-state");
        if (state === "correct") {
            document.getElementById("q5Correct").style.display = "block";
        } else if (state === "incorrect") {
            document.getElementById("q5Incorrect").style.display = "block";
            timeLeft -= 3;
        }
    }

})

//Need function to stop timer
//Need to get the user Score
//We need to play again??
//We need to submit our initials and save to local storage
endGame();








