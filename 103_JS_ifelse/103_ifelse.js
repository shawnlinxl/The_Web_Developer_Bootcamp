var age = prompt("Please enter your age:");

if (age < 0) {
    console.error("Age should be a positive number!");
}

if (age == 21) {
    console.log("Happy 21st birthday!");
}

// if age mod 2 has remainder 1 then age is odd
if ((age % 2) == 1) {
    console.log("Your age is odd");
}

// if square root is integer then age is perfect square
if (Number.isInteger(Math.sqrt(age))) {
    console.log("Perfect Square!");
}
