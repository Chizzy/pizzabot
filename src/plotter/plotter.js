// This function will recieve an array of objects with the grid and
// the coordinates of every house in need of pizza delivery.
// The function will return a string with the instructions for the pizza robot.

function plotter(coords) {
  let baseX = 0
  let baseY = 0
  let locForBot = [];

  for (i = 0; i < coords.length; i++) {
    let inputX = coords[i].x;
    let inputY = coords[i].y;
    while(baseX !== inputX || baseY !== inputY) {
      if(baseX === inputX && baseY === inputY){
        break;
      } else {
        switch (true) {
          case(baseX === inputX):
            break;
          case (baseX < inputX):
            baseX++;
            locForBot.push('E');
            break;
          case (baseX > inputX):
            baseX--;
            locForBot.push('W');
            break;
        }
        switch (true) {
          case(baseY === inputY):
            break;
          case (baseY < inputY):
            baseY++;
            locForBot.push('N');
            break;
          case (baseY > inputY):
            baseY--;
            locForBot.push('S');
            break;
        }
      }
    }
    locForBot.push('D');
  }
  console.log(locForBot);
    
  const result = locForBot.join('')
  return result

};

// plotter();

module.exports = plotter