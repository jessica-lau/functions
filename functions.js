// PROBLEM 1
// Write a function that accepts one parameter - a name - and logs "Hello I am _____"
// Fill in the blank with the name given to the function

function myName(name) {
    console.log("Hello I am " + name);
}

myName("Jessica");
// PROBLEM 2
// Modify this function to accept two parameters, representing two numbers you want to multiply.
// Then, add a code block that will multiply the two parameters and return the output.
// The code block below the function is meant to check your work for the arguments 2 and 2.
function multiply(number1, number2) {
    return (number1 * number2);
}

const four = multiply(2, 2);
if (four === 4) {
    console.log("The multiply function works!");
} else {
    console.log("Something's wrong with the multiply function!")
}


// PROBLEM 3
// Write a function that accepts an array as a parameter.
// The function should loop through the given array and console.log each element in the array.
// Create your own array to test your work.
const foodArray = ["pizza", "chips", "candy"];

function favoriteFood(foodArray) {
    for (let i = 0; i < foodArray.length; i++) {
        console.log(foodArray[i]);
    }
}

favoriteFood(foodArray);

// PROBLEM 4
// Write a function that finds the maximum number in a given array.
// Loop through the array and keep track of the biggest number seen so far.
// Once the loop is over, return the biggest number in the array.

const myNumbers = [9, 5, 7, 1];

function biggestNumber(myNumbers) {
    let number = myNumbers[0];
    for (let i = 0; i < myNumbers.length; i++) {
        if (myNumbers[i] > number) {
            number = myNumbers[i];
        }
    }
    return number;
}

let results = biggestNumber(myNumbers);

console.log(results);
