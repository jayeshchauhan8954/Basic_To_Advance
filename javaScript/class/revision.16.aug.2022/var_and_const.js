(function () {
    // variables and constants
    // let and var - changes
    const companyName = "xyz corporation"
    var empid = 12345;      // var follows functional scoping & it support hoisting & can be re-declare
    let salary = 10000;     // let follows block scoping & it doesn't support hoisting & can't be re-declare

    console.log(empid);
    console.log(salary);

})(); // IIFE => IMEDIATELY INVOKING FUNTION EXPRESSION