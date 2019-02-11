// Main Function: A function will receive an input of a String and return a list of instruction as a String, for getting Pizzabot to those location and delivering.
// We have 2 parts to solve this problem.
// 1. Transform the input string to an array of objects. Here que can validate and run soome test agaisnt the input.
// 2. Move the pizzabot to the locations requested and deliver the pizzas to each location.

// Input must be positive otherwise shouldn't run the code.
// Input includes the area of plane. What happens if the user select a bigger area?

// Import the the formated function.
const stringFormatted = require('./formater/formater');
const getCoordinates = require('./createInstructions/createInstructions');

const inputString = process.argv[2];
const map = stringFormatted.formater(inputString);

const getInstructions = getCoordinates.createInstructions(map.cords);
console.log(getInstructions);






