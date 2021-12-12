var timer = document.querySelector(".timer");
var countdown = document.getElementById("countdown");
var start = document.getElementById("start-btn");

start.addEventListener("click", startGame);
start.addEventListener("click", startDisplay);

function startGame() {
    var timeLeft = 60;
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
//we need a function for when we press start, the first question is displayed
function startDisplay() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("q1").style.display = "block";
    document.getElementById("start-btn").style.display = "none";
    
}