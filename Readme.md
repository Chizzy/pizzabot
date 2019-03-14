
# PizzaBot App

## Introduction:

Welcome to the **PizzaBot App**. This app will return you a list of instructions for your PizzaBot to deliver pizza to a list of houses. The app will receive a string, form by a grid and a list of points representing houses. For example, the following string "5x5 (0, 0) (1, 3)" could return the following instructions DENNND. The robot always starts at the origin point (0, 0) and it moves in a cartesian plane to the next house. 

Instructions are one of:

N: Move North
S: Move South
E: Move East
W: Move West
D: Drop Pizza

***

### Prerequisites

* You need to have **NodeJS** installed - this app is running in the node *version: 10.15.1*. 
* You need to have **npm** or **yarn** installed.
* You need to run **npm install** to download the dependencies (Jest and NodeMon). The node_modules folder was excluded from the tar.gz file to reduce the size of the file.

***

## Getting Started

### Alternative 1:

Once inside the folder "pizzabot", you can run this app, running in your command line the following command: **npm run start "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"**. This will return a string of instructions.

### Alternative 2 - Using Curl -X Post to do a Post request:

First you need to run the Express server, by running **npm run start-server** and after in a second terminal you can run **echo '5x5 (1, 2) (3, 4)' | curl -X POST -d @- http://localhost:9292/pizzabot**.

### Alternative 3 - Using req.query:

You can also run the pizzabot app in the browser using req.query. The express server will get the grid and coordinates of up to two houses. You can go to your favorite browser and run for example **http://localhost:9292/pizzabot?gridX=5&gridY=5&coordX=1&coordY=0&coordX_2=4&coordY_2=5**. This will also return a string of instructions. Remember to run the Express server, by running **npm run start-server**


***

## Assumptions

We should consider the following assumptions:

* The input string has always the same format. That means that the string will always have a grid followed by a pair of positions x, y in parentheses. For instance, **"5x5 (1, 0) (4, 4) (2, 1)"**
* If the input string is undefined or empty the app stops and a message is displayed.
* If any of the houses has a coordinates greater than the given grid the will app stops and a message is displayed.

### Alternative 3
* Localhost port expected is always '9292'.
* Parameters in the URL are always the following:
  * gridX = Grid x-coordinate.
  * gridY = Grid y-coordinate.
  * coordX = House 1 x-coordinate.
  * coordY = House 1 y-coordinate.
  * coordX_2 = House 2 x-coordinate.
  * coordY_2 = House 2 y-coordinate.

* We assume that only the coordinates of 2 houses are passed as parameters in the URL.

***

## Test Coverage

All the tests can be run by the following command **npm run test**.

* All functions are returning the output that we are expecting.
* Function in charge of parsing the Input String (formater.js) **"5x5 (1, 3) (4, 4)"** does return a object with a grid with typeof Object and the coordinates of the houses with typeof Array.
* If the input string is undefined or empty the app stops and a message is displayed.
* The function in charge of returning the instructions (plotter.js) is returning a correct instruction given a *grid and position* string, for instance, "5x5 (1, 3) (4, 4)" will return "ENNNDENEED".
* The function in charge of returning the instructions (plotter.js) checks that the position of the houses are less or equal to the grid.


***

## Development

### Pizzbot App

For Development, you can also use the following command **npm run start-dev "StringInput"** to run nodemon in the background. This package allows you to monitor changes in this application and automatically restart the server. This command should be used in development mode. 

### Express Server
To start the express server for development, you can ran the following command **npm run start-server-dev**

***

## Dependencies for Development

* [Jest](https://github.com/facebook/jest) for testing.All functions are returning the output that we are expecting.
* [Nodemon](https://github.com/remy/nodemon) for monitoring changes in this application and automatically restart the server.
* [Express](https://expressjs.com) help you manage a Node.js Server.




