//Timer variable
var timerEl = document.querySelector(".timer");
var timeLeft = 30;

//Timer function. We will need to add if statement for wrong answer time subtraction
function setTime() {
    var timerInterval = setInterval
        (function () {
            secondsLeft--;
            timerEl.textContent = secondsLeft + " seconds remaining"

            //Add our wrong answer time subtraction condition here
            if (secondsLeft === 0) {
                //stop timer
                clearInterval(timerInterval);
                //game over message
                gameOverMessage();
            }
        }, 1000);
}

function gameOverMessage() {
    timerEl.textContent = "GAME OVER!!!!!";
    //add img/some kind of element for Game Over Display
    var gameOverImg = document.createElement("img");
    imgEl.setAttribute("src", "images/...");
    //main.El.appendChild(imgEl); to set image once we know where we want it to live


}