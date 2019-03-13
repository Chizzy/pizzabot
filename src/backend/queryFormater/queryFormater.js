/* This function will receive as an input string with the grid and 
* a list of points representing houses in need of pizza delivery. 
* The function will return a array of objects with the grid and the coordinates of each house.
*/

function queryFormater (gridX, gridY, coordX, coordY, coordX_2, coordY_2){
  const objQuery = {}

  switch (true) {
    case (!coordX && !coordY):
    objQuery.string = gridX + 'x' + gridY + ' (' + coordX_2 + ', ' + coordY_2 + ')'
    break;
    case (!coordX_2 && !coordY_2):
    objQuery.string =  gridX + 'x' + gridY + ' (' + coordX + ', ' + coordY + ')'
    break;
    default:
    objQuery.string = gridX + 'x' + gridY + ' (' + coordX + ', ' + coordY + ')' + ' (' + coordX_2 + ', ' + coordY_2 + ')'
  }
  return objQuery.string;

}
module.exports = queryFormater
