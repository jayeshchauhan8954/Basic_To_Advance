(function () {
    // Assignment operator (= , += , -=, *=, /=)
    let empName = "Jayesh";
    let age = 22;

    let salary = 100000;
    let currentMonthSalary = 100000;
    salary = salary + currentMonthSalary;
    salary += currentMonthSalary; // shorthand version in case you need previos version also;

    // comparison operators
    // >, >=, <, <=, ==, !=

    console.log(age >= 22);   // ture
    console.log(age != 23);   // ture
    console.log(age == 22);   // ture

    // strict type check for equality (===, !==)
    console.log(age === "33")  // false => value check and type check (but type is string and age is number)

    // logical operators
    // && (AND) , || (OR), !(nor) operator

    // && - both conditions should be true
    // true && true = true
    // false && true = false
    // true && false = false
    // false && false = false
    console.log("============ AND CHECH ===========")
    console.log("And check " + (empName == "Jayesh" && age == 22)); // true
    console.log("And check " + (empName == "Jitandra" && age == 22)); // false

    console.log("============ OR CHECH ===========")
    // || - atleast one conditions should be true
    // true && true = true
    // false && true = true
    // true && false = true
    // false && false = false

    // ! NOR operator
    console.log("============= NOR check ===========");
    console.log(!(empName == "Jayesh")) //  false

    // Increment and decrement operator
    let couter = 0;
    couter++; // increment the value of counter by 1;
    // var++ means that first print and then increment
    console.log("counter " + counter);

    // another version
    console.log(++counter) // ++var means first increment and then print

    // ternary operator ( ? :);
    let isEmployeeOverThirty = age >= 20 ? true : false;
    let isEmployeeOverTwenty = age >= 20 ? "more than twenty" : "less than twenty";
    console.log(isEmployeeOverThirty);
})();