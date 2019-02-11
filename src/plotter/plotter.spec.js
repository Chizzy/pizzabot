const plotter = require('./plotter');

const inputMock = {
  grid : {x: 5, y: 5},
  coords : [
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
}

describe('Plotter', () => { 
test ('it should return an String', ()=> {
  expect(typeof plotter(inputMock)).toBe('string')
});

test ('it should return an String with the instructions for the pizzaBot', ()=> {
  expect(plotter(inputMock)).toBe('DENNNDENEEDSSDDWSWWWDENEEDWNDESESD')
});

test("coords of houses are always less than or equal to Grid", () => {
  const grid = inputMock.grid;
  const coords = inputMock.coords
  for (i=0; i < coords.length; i++){
    expect(coords[i].x).toBeLessThanOrEqual(grid.x);
    expect(coords[i].y).toBeLessThanOrEqual(grid.y);
  };
});

});