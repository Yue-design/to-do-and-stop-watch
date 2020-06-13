let hour = 0;
let minute = 0;
let second = 0;

let displayHour, displayMinute, displaySecond;

const stopWatch = () => {
    
    // increment properly
    if (second / 60 === 1) {
        second = 0;
        minute += 1;   
        if (minute / 60 === 1) {
            minute = 0;
            hour += 1;
        }
    }

    // adding a string "0" to the one digit result
    if (second < 10) {
        displaySecond = "0" + second.toString();
    } else {
        displaySecond = second;
    }

    if (minute < 10) {
        displayMinute = "0" + minute.toString();
    } else {
        displayMinute = minute;
    }

    if (hour < 10) {
        displayHour = "0" + hour.toString();
    } else {
        displayHour = hour;
    }

    console.log(displayHour + ":" + displayMinute + ":" + displaySecond);
}

window.setInterval(stopWatch, 1000);

// const display = timeValue => {
//     let displayValue;
//     if (timeValue < 10) {
//         displayValue = "0" + timeValue.toString();
//     } else {
//         displayValue = timeValue;
//     }
//     return displayValue;
// }

// console.log(display)