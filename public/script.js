let minutes = 25;
let seconds = minutes * 60;
let pomodoros = 0;
let shortbreaks = 0;
let longbreaks = 0;
let isPomodoro = true;

function displayTime(seconds) {
    let displayMinutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;

    if (displayMinutes < 10) {
        displayMinutes = "0" + displayMinutes;
    }

    if (displaySeconds < 10) {
        displaySeconds = "0" + displaySeconds;
    }

    $("#time").text(displayMinutes + ":" + displaySeconds);
}

function timeOut() {
    console.log("Time out!");
    clearInterval(countDown);
    addPoints();
    console.log(minutes, pomodoros, shortbreaks, longbreaks, isPomodoro);
};

$(document).ready(function() {

    // function addPoints() {
    //     if (pomodoros) {
    //         pomodoros++;
    //         isPomodoro = false;
    //         if (pomodoros % 4 === 0) {
    //             minutes = 15;
    //         } else {
    //             minutes = 5;
    //         }
    //         console.log("You have a " + minutes + " minute break!");
    //     } else {
    //         isPomodoro = true;
    //         minutes = 25;
    //         if (pomodoros % 4 === 0) {
    //             longbreaks++;
    //         } else {
    //             shortbreaks++;
    //         }
    //     }
    // };

    let countDown = setInterval(function() {
        displayTime(seconds);
        seconds--;
        if (seconds === 0) {
            return timeOut();
        }
    }, 1000);
});