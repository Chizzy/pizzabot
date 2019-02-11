const formater = require('./formater')

const inputMock = "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"
const InputMockUnd = undefined;
const InputMockEmpty = ""

describe('Formater', () => {
  test('function should return an Object', () => {
    expect(typeof formater(inputMock)).toBe('object')
  });

  test('function should return an grid with the typeof Object', () => {
    const objGrid = formater(inputMock).grid
    expect(typeof objGrid).toBe('object')
  });

  test('function should return house coordinates with the typeof Array', () => {
    const ArrCoords = formater(inputMock).coords
    expect(Array.isArray(ArrCoords)).toBe(true)
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

  test("it returns a message error if the input string is undefined or empty", () => {
    expect(formater(InputMockUnd)).toEqual({message:'error'});
    expect(formater(InputMockEmpty)).toEqual({message:'error'});
  });

});
