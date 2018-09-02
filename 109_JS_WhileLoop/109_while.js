// 1. Print all numbers between -10 and 19
var num = -10;

console.log("1. Print all numbers between -10 and 19");

while (num <= 19) {
    console.log(num);
    num++;
}

// 2. Print all even numbers between 10 and 40
num = 10;

console.log("2. Print all even numbers between 10 and 40");

while (num <= 40) {
    console.log(num);
    num += 2;
}

// 3. Print all odd numbers between 300 and 333
num = 300;

console.log("3. Print all odd numbers between 300 and 333");
while (num <= 333) {
    // find first odd number and there after just add 2
    while (num%2 == 0) {
        num++;
    }
    console.log(num);
    num += 2;
}

// 4. Print all numbers divisible by 5 and 3 between 5 and 50
num = 5;

console.log("4. Print all numbers divisible by 5 and 3 between 5 and 50");
while (num <= 50) {
    // find first number divisible by both 3 and 5
    while (num%3 != 0 || num%5 != 0) {
        num++;
    }
    console.log(num);
    num += 3 * 5;
}