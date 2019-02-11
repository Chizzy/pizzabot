const plotter = require('./plotter');

const coordsMock = [
  { x: 0, y: 0 },
  { x: 1, y: 3 },
  { x: 4, y: 4 },
  { x: 4, y: 2 },
  { x: 4, y: 2 },
  { x: 0, y: 1 },
  { x: 3, y: 2 },
  { x: 2, y: 3 },
  { x: 4, y: 1 }
]

test ('it should return an String', ()=> {
  expect(typeof plotter(coordsMock)).toBe('string')
});

test ('it should return an string with the instructions for the pizzaBot', ()=> {
  expect(plotter(coordsMock)).toBe('DENNNDENEEDSSDDWSWWWDENEEDWNDESESD')
});