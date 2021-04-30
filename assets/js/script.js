var restTime = true;

var goInterval = 30; // 30 seconds
var restInterval = 10; //10 seconds
var interval = 1000; //miliseconds
var timerIsOn = 0;

var timerDisplay = document.getElementById("timer");
var startBtn = document.getElementById("startStopTimer");
var resetBtn = document.getElementById("reset")


timerDisplay.textContent = goInterval
function updateTimer() {
    timerDisplay.textContent = goInterval;
}

function startTimer(){
    goInterval = 30;
    var start = setInterval(function(){
        goInterval--
        updateTimer();
        if (goInterval === 0) {
            clearInterval(start);
            restTimer();
        };
    }, 1000)
};
    
function restTimer() {
    goInterval = 10;
    var rest = setInterval(function(){
        goInterval--
        updateTimer();
        if (goInterval === 0) {
            clearInterval(rest);
            startTimer();
        };
    }, 1000)
};




