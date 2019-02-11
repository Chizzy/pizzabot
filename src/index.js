// Goal of the problem: Create a PizzaBot that given a grid and points representing houses in need of pizza delivery, as a string. It will return another string with a list of instruction for getting the Pizzabot to those location and delivering.

// We have 2 parts to solve this problem.
// 1. Transform the input string to an array of objects. Here que can validate and run soome test agaisnt the input.
// 2. Move the pizzabot to the locations requested and deliver the pizzas to each location.

// Input must be positive otherwise shouldn't run the code.
// Input includes the area of plane. What happens if the user select a bigger area?

// Import the formater function.
const formater = require('./formater/formater');
// Import the getCoordinates function.
const plotter = require('./plotter/plotter');

//  Get the string input and create a map with the grid and the locations requested.
const inputString = process.argv[2];
const inputMap = formater(inputString);

const getInstructions = plotter(inputMap.coords);
console.log(getInstructions);






