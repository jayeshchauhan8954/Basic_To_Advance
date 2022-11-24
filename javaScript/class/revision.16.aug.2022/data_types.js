(function () {
    // Number
    // Explicit data type
    var empid = Number(1234);
    // empid = 12345;
    console.log(empid);
    console.log(typeof (empid));
    // Implicit data typing
    var empAge = 33;
    console.log(empAge);
    console.log(typeof (empAge));
    // JS is loosely typed language
    empAge = "45";
    console.log(typeof (empAge));

    // String
    let empName = "Jayesh";
    console.log(typeof (empName));

    let empAddress = String("Pune");
    console.log(typeof (empAddress));

    // Boolean
    let isEmpMarried = true;
    console.log(typeof (isEmpMarried));

    let isEmpIndian = Boolean(false);
    console.log(typeof (isEmpIndian));

    // undefined
    var empStatus;
    console.log(typeof (empStatus));

    // null (it releases memory)
    var empPassportApplicationStatus = null;
    console.log(typeof (empPassportApplicationStatus));

    // function
    var calculateEmpSalay = function () {
        // some logic
    }
    console.log(typeof (calculateEmpSalay));

    // object
    var Employee = {};
    console.log(typeof (Employee));

    // comparision operator => on or after => 1.12 time





})(); // iife