(function () {

    let empName = "Jayesh",
        empAge = 22,
        annualSalary = 100000;

    // salary is less than 5 lac then no tax
    if (annualSalary <= 500000) {
        console.log("no tax");
    } else {
        console.log("you will be taxed");
    }

    //  else if
    if (annualSalary >= 1000000) {
        console.log("30% tax");
    } else if (annualSalary >= 500000) {
        console.log("20% tax");
    } else {
        console.log("no tax");
    }

    // switch statement
    switch (ture) {
        case annualSalary >= 100000:
            console.log("30% tax");
            break;
        case annualSalary >= 500000:
            console.log("20% tax");
            break;
        default:
            console.log("no tax");
            break;
    }
})();

// video of aug -16. time 2 hour and 12 min