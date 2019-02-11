// Import the formater function.
const formater = require('./formater/formater');
// Import the plotter function.
const plotter = require('./plotter/plotter');

//  Get the string input
const inputString = process.argv[2];

// Create a map with the grid and the locations requested.
const getMapper = formater(inputString);    
const getInstructions = plotter(getMapper);
console.log(getInstructions);