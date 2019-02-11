
# PizzaBot App

## Introduction:

Welcome to the **PizzaBot App**. This app will give you a list of instructions for your PizzaBot to deliver pizza to a list of houses. These locations are given a string form by a grid and a list of points representing houses.

***

### Prerequisites

* You need to have **nodeJS** installed - this app is running in the node *version: 10.15.1*. 
* You need to have **npm** or **yarn** installed.
* You need to run **npm install** to download your the dependencies (node_modules folders was excluded in the tar.gz file to reduce the size of the file).

***

## Getting Started

Once inside the folder "pizzabot", you can run this app, running in your command line the following command: **npm run ./pizzabot "5x5 (1, 3) (4, 4)"**. This will return a string of instructions.

***

## Assumptions

We should consider the following assumptions:

* The input string has always the same format. That means that the string will always have a grid followed by a pair of positions x, y in parentheses. For instance, **"5x5 (1, 0) (4, 4) (2, 1)"**
* If the input string is undefined or empty the app stops and a message is displayed.

***

## Test Coverage

All the tests can be run by the following command **npm run test**.

* All functions are returning the output that we are expecting.
* The function in charge of returning the instructions (plotter.js) is returning a correct instruction given the a *grid and position* string, for instance, "5x5 (1, 3) (4, 4)" will return "ENNNDENEED".
* Function in charge of parsing the Input String **"5x5 (1, 3) (4, 4)"** does return a object with a grid with typeof Object and the coordinates of the houses with typeof Array.

***

## Development
For Development, you can also use the following command **npm run ./pizzabot-dev "StringInput"** to run nodemon in the background. This package allows you to monitor changes in this application and automatically restart the server. This command should be used in development mode. 

***

## Dependencies for Development

* [Jest](https://github.com/facebook/jest) for testing.All functions are returning the output that we are expecting.
* [Nodemon](https://github.com/remy/nodemon) for monitoring changes in this application and automatically restart the server.




