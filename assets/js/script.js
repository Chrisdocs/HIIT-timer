let DateTime = luxon.DateTime;

var dtfull = DateTime.fromObject({zone: 'America/Los_Angeles', numberingSystem: 'beng'})
var dt = DateTime.now();
var interval15 = 15;
var interval30 = 30;
var interval60 = 60;
var timerDisplay = document.getElementById("timer");
console.log(timerDisplay);


var timerBtn = document.querySelector("#startTimer").addEventListener("click", function countdown(){
    setInterval(() => {
        timerDisplay.textContent = interval30;
        interval30--;
    }, 1000);
});