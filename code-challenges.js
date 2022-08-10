// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// Choose my variable declaration: const
// Declare my variable name: temp1, temp2, temp3
// Create a function called waterTemp thats takes in my inputs named temp1, temp2, temp3
// Make a conditional statement saying that if waterTemp is higher that 212 output "waterTemp is above boiling point".  If the waterTemp is lower than 212 output" "waterTemp is above boiling point". If waterTemp is at 212 then output "waterTemp is at boiling point"
// Log to see results

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Function

const waterTemp =(temp) =>{
    if(temp < 212){
        return `${temp} is below boiling point`
    }else if(temp > 212){
        return `${temp} is above boiling point` 
    }else{
        return `${temp} is at boiling point`
    }
}
console.log(waterTemp(temp1));
console.log(waterTemp(temp2));
console.log(waterTemp(temp3));



// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// Create a variable combining the two const with .concat
// Log new const using the built in method .length


const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Code
const numJoined = (myNumbers1.concat(myNumbers2))
console.log(numJoined.length);

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// Take the variable currentCohort and put it into an array
// Take the array and reverse it
// Take the array and rejoin it into a string

const currentCohort = "Echo 2022"

// Code
const revCohort = currentCohort.split("")

console.log(revCohort.reverse().join(""));

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// Make a for loop, let i = 0 and < than myArray.length and at i++ increments
// Make a conditional statement using modulo by 2 and strictly equal to 0
// Make the output log "even"
// Anything else have it log "odd"

const myArray = [13, 34, 5, 10, 27, 42]

// Code

for(let i = 0; i < myArray.length; i++){
    if(myArray[i] % 2 === 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:

// Create a function with the name subNum
// Set an a and b in the parameters for the set numbers later
// Make a conditional statement say if a > b be return a-b.  If anything else b - a.
// Log the function subNum with the variables in set one
// Log the function subNum with the variables in set two

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subNum = (a,b) =>{
    if(a > b){
        return (a - b)
    }else{
        return (b -a)
    }
}
console.log(subNum(number1, number2));
console.log(subNum(number3, number4));