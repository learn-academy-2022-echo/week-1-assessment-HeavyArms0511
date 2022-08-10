// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: It will count each individual value in the string starting at one.  Output should be 10.
// b) Verify and explain: The output was 10. The reason why is because we used the built-in method .length which counts each indvidual value through this particular string starting at 1.  Which when counted it equals 10.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: Output = o
// b) Verify and explain: The output was o.  Reason for this is because we wanted to find the value at index 4 which is o.  The reason why its o and not l is bc index starts at 0 not 1.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:"Ruby"
// b) Verify and explain: Output = "Ruby".  The reason for this is an array is different from a string and that the index values are not the individual characters but the string itself between the commas.  Since index = 1 when we console.log(languages[index]) we wanted to see what value was at index and since index = 1 it outputed "Ruby".


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:["SATURDAY", "SUNDAY"]
// b) Verify and explain: It came back with an error saying that "TypeError: weekendDays.toUpperCase is not a function".  After doing some research it is because the built-in method .toUpperCase has to be used inside a function and  console.log(weekendDays.toUpperCase()) is not a function so it is not possible to run this code.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: It will give an output of which data type dataTypes.length is which .length counts the number of values so it should output number.
// b) Verify and explain: Output = number.  When console.log(typeof dataTypes.length) is used in terminal the code is counting the .length of dataTypes which is an array with 3 values.  So when you do typeof you are asking what type of data is this.  Data has 6 primitive datatypes (number, string, boolean, undefined, null, and symbol), since 3 is a number the output was the string number.

