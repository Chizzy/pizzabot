// var array = process.argv[2].split(' ');
// var array2 = array.filter(s => s !== array[0])

// Input must be positive otherwise shouldn't run the code.
// Input includes the area of plane. What happens if the user select a bigger area?

const housesArr = [
  {
    pizzaX: 1,
    pizzaY: 1
  }
];
console.log(housesArr);
console.log('housesArr.length: ' + housesArr.length);

let baseX = 1
let baseY = 3

let i = 0;
let locForBot = [];

while (i < housesArr.length) {
  console.log('i1: ' + i);
  let inputX = housesArr[i].pizzaX;
  let inputY = housesArr[i].pizzaY;
  // baseX < inputX || baseY < inputY
  while(baseX !== inputX || baseY !== inputY) {
    console.log(baseX, baseY);
    if(baseX === inputX && baseY === inputY){
      break;
    } else {
        if(baseX < inputX){
          baseX++;
          console.log('baseX: ' + baseX);
          locForBot.push('E');
        } else {
          baseX--;
          console.log('baseX: ' + baseX);
          locForBot.push('W');
        }
        if (baseY < inputY) {
          baseY++;
          console.log('baseY: ' + baseY);
          locForBot.push('N');
        } else {
          baseY--;
          console.log('baseY: ' + baseY);
          locForBot.push('S');
        }
      }
  }
  locForBot.push('D');
  i++;
  console.log(baseX, baseY);
  
  console.log('i2: ' + i);
  
}
console.log(locForBot)




