/* This function will recieve an array of objects with the 
* positions of every house in need of pizza delivery.
* The function will return a string with the instructions for the pizzabot.
*/

function plotter(mapper) {
  let baseX = 0
  let baseY = 0
  let locForBot = [];
  let coords = mapper.coords;
  
  if(mapper.message === 'error'){
    const message = 'You have not included an input. Please run again the command adding the correct string.'
    return message;
  }

  // Check that houses Coords are always less than or equal to the Grid. 
  for (i=0; i < coords.length; i++){
  const gridX = mapper.grid.x;
  const gridY = mapper.grid.y;

  if(!(mapper.coords[i].x <= gridX)) {
    const message = 'At least one of the houses is out of the delivery zone.'
    return message;
  }
  if (!(mapper.coords[i].y <= gridY)) {
    const message = 'At least one of the houses is out of the delivery zone.'
    return message;
  }

  }
  // Get the instructions for the pizzaBot.
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
        };
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
        };
      };
    };
    locForBot.push('D');
  };
      
  const result = locForBot.join('')
  return result
};

module.exports = plotter