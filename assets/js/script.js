let DateTime = luxon.DateTime;

var dtfull = DateTime.fromObject({zone: 'America/Los_Angeles', numberingSystem: 'beng'})
var dt = DateTime.now();
var interval15 = 15;
var interval30 = 3;
var interval60 = 60;
var timerDisplay = document.getElementById("timer");
console.log(timerDisplay);


// var timerBtn = document.querySelector("#startStopTimer").addEventListener("click", function countdown(){
//     setInterval(() => {
//         timerDisplay.textContent = "0:" + interval30;
//         interval30--;
//     }, 1000);

// });

var timerBtn = document.querySelector("#startStopTimer").addEventListener("click", function countdown(){
var timeInterval = setInterval(function set() {
    timerDisplay.textContent = "0:" + interval30;
    interval30--;
    if(interval30 < 0) {
        clearInterval(timeInterval);
    }
    }, 1000);
});