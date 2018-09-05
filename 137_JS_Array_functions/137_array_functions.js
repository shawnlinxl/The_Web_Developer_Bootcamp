function printReverse(array) {
    // Print out array in reverse order

    while(array.length > 0) {
        console.log(array.pop());
    }

}

function isUniform(array) {
    // Check if all array elements are the same
    var first_value = array.pop();
    var this_value = array.pop();

    while (first_value === this_value && array.length > 0) {
        this_value = array.pop();
    }

    // if array.length will reaches 0,
    // it says all n-1 elements are the same,
    // hence if the first and nth elements
    // (first and this here) are equal, then all
    // elements are equal, if not then return false
    //
    // if while loop stops before array.length
    // reaches 0, then it must be it exited prematurely
    // hence last_value will not equal to this_value 
    return first_value === this_value;
}

function sumArray(array) {
    // Sums numbers in an array

    var result = 0;
    while (array.length > 0) {
        result += array.pop();
    }

    return result;
}

function max(array) {
    // Find the maximum number in the array

    var result = array.pop();

    while (array.length > 0) {
        this_value = array.pop();
        result = (result >= this_value) ? result : this_value;
    }   

    return result;
}