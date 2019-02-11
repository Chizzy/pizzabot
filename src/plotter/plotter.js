// This function will recieve an array of objects with the grid and
// the coordinates of every house in need of pizza delivery.
// The function will return a string with the instructions for the pizza robot.

function plotter(coords) {
  let baseX = 0
  let baseY = 0
  let i = 0;
  let locForBot = [];

  // Get positions // 
  while (i < coords.length) { // O(n)
    let inputX = coords[i].x;
    let inputY = coords[i].y;
    while(baseX !== inputX || baseY !== inputY) { // 
      if(baseX === inputX && baseY === inputY){
        break;
      } else {
          if(baseX < inputX){
            baseX++;
            locForBot.push('E');
          } else {
            baseX--;
            locForBot.push('W');
          }
          if (baseY < inputY) {
            baseY++;
            locForBot.push('N');
          } else {
            baseY--;
            locForBot.push('S');
          }
        }
    }
    locForBot.push('D');
    i++;    
  }

  const result = locForBot.join('')
  return result

};

module.exports = plotter