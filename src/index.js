// Import the formater function.
const formater = require('./formater/formater');
// Import the plotter function.
const plotter = require('./plotter/plotter');

//  Get the input string
const inputString = process.argv[2];

/* Create a mapper with the grid and the coordinates of the houses requested. 
* Finally, return a list of instructions for the pizzabot.
*/
const getMapper = formater(inputString);    
const getInstructions = plotter(getMapper);
console.log(getInstructions);