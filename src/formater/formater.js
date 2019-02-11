/* This function will receive as an input the string with the grid a list * * of points representing houses in need of pizza delivery. 
* The function will return a array of objects with the grid and the coordinates of each house.
*/

function formater (inputString){
  // Check that input is not undefined or empty.
  if(!inputString){
    const errorObj = {message: 'error'};
    return errorObj;
  };

  const search = (query) => {
    const grid = {
      x: parseInt(query.split(' ')[0].split('x')[0], 10),
      y: parseInt(query.split(' ')[0].split('x')[1], 10),
    }    

    const coords = query.match(/\(.*?\)/g).map(coord=>{
      const arr = coord.replace(/[{( )}]/g, '').split(',')
      return {x: parseInt(arr[0], 10), y: parseInt(arr[1], 10)}
    })
    
    let result = {
      grid: grid,
      coords: coords
    }

    return result;
  }
  const response = search(inputString); 
  return response;
  
};

module.exports = formater
