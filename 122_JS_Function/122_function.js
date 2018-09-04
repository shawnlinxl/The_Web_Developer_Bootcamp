function isEven(num) {
    // returns true if num is even, false otherwise
    // in JS, 0 is false and 1 is true
    // therefore, to return true for even,
    // mod 2 of even number is 0, return !0 will give true
    return !(num%2);
}

function factorial(num) {
    // Calculate nth factorial
    if (num == 0 || num == 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

function kebabToSnake(str) {
    // replaces all - by _
    // /regex/g will do a global search for the regex
    return str.replace(/-/g, "_");
}