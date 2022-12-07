function first() {
    console.log("first");
    setTimeout(() => {
        third()
    }, 5000);
};
function second() {
    console.log("second");
};
function third() {
    console.log("third");
    setTimeout(() => {
        second()
    }, 5000);
};
first();

