const formater = require('./formater')

const inputMock = "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"

describe('Formater', () => {
  test('function should return an Object', () => {
    expect(typeof formater(inputMock)).toBe('object')
  });
  
  test('function should return a object grid and coords', () => {
    expect(formater(inputMock)).toEqual({
      grid : {
        x: 5,
        y: 5
      },
      coords: [
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
    });
  });
  
  test("coords shouldn't be greater then grid coords", () => {
    const mapper = formater(inputMock);
    const grid = mapper.grid;
    const coords = mapper.coords
    for (i=0; i < mapper.coords.length; i++){
      expect(coords[i].x).toBeLessThanOrEqual(grid.x);
      expect(coords[i].y).toBeLessThanOrEqual(grid.y);
    };
  });
});
