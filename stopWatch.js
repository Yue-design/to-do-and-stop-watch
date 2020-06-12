var startTime;
var stopTime;

const watch = () => {
    const fullDate = new Date();
    const hour = fullDate.getHours();
    const minute = fullDate.getMinutes();
    const second = fullDate.getSeconds();
    const milliseconds = fullDate.getMilliseconds();
    const currentTime = (hour, minute, second, milliseconds) => ({hour, minute, second, milliseconds});
    return currentTime;
};

const displayTime = () => {
    const startTime = watch();
    const stopTime = watch();
    const calcInterval = stopTime - startTime;
    console.log(calcInterval);
};
displayTime();
// var printInterval = setInterval(() => {
//     const currentTime = new Date();
//     const milliseconds = currentTime.getMilliseconds();
//     document.getElementById('milliseconds').innerHTML = milliseconds;
//     }, 1000);