// setTimeout
// setInterval
function print() {
    console.log("Hello! this is Jayesh Chauhan");
}
function close() {
    clearInterval(interval)
}
// print for after 2 sec each
let interval = setInterval(print, 2000);
// close my interval after 10 sec
setTimeout(close, 10100);
``