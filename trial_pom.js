let seconds, minutes;
let pause = false;

let countDown = function(minutes, seconds) {

    if ((minutes === 0) && (seconds === 0)) {
        timeOut();
    }

    while ((minutes > 0) && (seconds > 0)) {

        if ((seconds > 0) && (seconds < 59)) {
            seconds -= 1;
            return displayTime(minutes, seconds);
        } else if (seconds === 0) {
            minutes -= 1;
            seconds = 59;
            return displayTime(minutes, seconds);
        }
    }
};

let displayTime = function(minutes, seconds) {

    let displayMinutes, displaySeconds;

    if (minutes < 10) {
        displayMinutes = `0 + minutes.toString()`;
    } else {
        displayMinutes = minutes;
    };

    if (seconds < 10) {
        displaySeconds = `0 + seconds.toString()`;
    } else {
        displaySeconds = seconds;
    };

    // $(time).text(displayMinutes + ":" + displaySeconds);

    console.log(displayMinutes + ':' + displaySeconds);
};

let timeOut = function() {
    alert('Time out!');
}

let pomodoro = setInterval(function() {
    countDown(minutes, seconds);
}, 1000);

let minutes = 24;
let seconds = 59;

pomodoro();