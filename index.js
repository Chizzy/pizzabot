// Main Function: A function will receive an input of a String and return a list of instruction as a String, for getting Pizzabot to those location and delivering.
// We have 2 parts to solve this problem.
// 1. Transform the input string to a array of objects. Here que can validate and run soome test agaisnt the input.
// 2. Move the pizzabot to the locations requested and deliver the pizzas in each location.

// README:
// a) Assumptions.
// b) Explain the steps to solve this problem.
// c) Time and Space complexity. How you can improve this code.
// d) Is the code Readable and clear for other developer.

// ● Correctness:
// ○ Does the code fulfill all the requirements of the challenge?
// ● Production Readiness:
// ○ Is the code well-structured by the standards of the host language?
// ○ Is the solution maintainable and easy to make changes to?
// ○ Is the code clean, readable and easy for other team members to understand?
// ○ Is there appropriate test coverage?
// ● Fit and polish:
// ○ Is there a README? A build script?
// ○ Are there spelling errors or extraneous comments?
// ○ How does it handle unspecified input?


// var array = process.argv[2].split(' ');
// var array2 = array.filter(s => s !== array[0])

// Input must be positive otherwise shouldn't run the code.
// Input includes the area of plane. What happens if the user select a bigger area?

const housesArr = [
  {
    pizzaX: 1,
    pizzaY: 3
  },
  {
    pizzaX: 4,
    pizzaY: 4
  },

];
console.log(housesArr);
console.log('housesArr.length: ' + housesArr.length);

let baseX = 0
let baseY = 0

let i = 0;
let locForBot = [];

function pizzaBot() {
  while (i < housesArr.length) { // O(n)
    console.log('i1: ' + i);
    let inputX = housesArr[i].pizzaX;
    let inputY = housesArr[i].pizzaY;
    // baseX < inputX || baseY < inputY
    while(baseX !== inputX || baseY !== inputY) { // 
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
  console.log(locForBot.join(''))
}

pizzaBot(housesArr);



