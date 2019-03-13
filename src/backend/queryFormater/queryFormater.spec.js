const queryFormater = require('./queryFormater');

let gridXMock = 5
let gridYMock = 5
let coordXMock = 1
let coordYMock = 4
let coordX_2Mock = 3
let coordY_2Mock = 1


describe('queryFormater', () => {
  test('if should return a string', () => {
    expect(typeof queryFormater(gridXMock, gridYMock, coordXMock, coordYMock, coordX_2Mock, coordY_2Mock)).toBe('string');
  });
  
  test('it should return a string with a grid and coordinates of the two houses', ()=>{
    const queryString = queryFormater(gridXMock, gridYMock, coordXMock, coordYMock, coordX_2Mock, coordY_2Mock);
      
    expect(queryString).toEqual('5x5 (1, 4) (3, 1)');
  });
  
  test('it should return a string with a grid and coordinates of the one house', ()=>{
  
    let coordXMock = 1
    let coordYMock = 4
    let coordX_2Mock = undefined
    let coordY_2Mock = undefined
  
    const queryString = queryFormater(gridXMock, gridYMock, coordXMock, coordYMock, coordX_2Mock, coordY_2Mock);
      
    expect(queryString).toEqual('5x5 (1, 4)');
  });
  
  test('it should return a string with a grid and coordinates of the one house', ()=>{
  
    let coordXMock = undefined
    let coordYMock = undefined
    let coordX_2Mock = 3
    let coordY_2Mock = 0
    const queryString = queryFormater(gridXMock, gridYMock, coordXMock, coordYMock, coordX_2Mock, coordY_2Mock);
      
    expect(queryString).toEqual('5x5 (3, 0)');
  });
});