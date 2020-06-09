/*
clock app
*/

function printFullTime() { // write a function to print the time in 24-hour clock 
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    document.write(hours + ':' + minutes + ':' + seconds);
}
printFullTime();

function printHalfTime() { // write a function to print the time in 12-hour clock
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    if (hours > 12) {
        document.write(hours + ':' + minutes + ':' + seconds + 'PM');
    } else {
        document.write(hours + ':' + minutes + ':' + seconds + 'AM');
    }
}
printHalfTime();

function init() {
    document.querySelector('.clock').style.display = 'none';
}