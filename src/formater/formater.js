/* This function will receive as an input string with the grid and 
* a list of points representing houses in need of pizza delivery. 
* The function will return a array of objects with the grid and the coordinates of each house.
*/

function formater (inputString){
  // Check that input is not undefined or empty.
  if(!inputString){
    const errorObj = {message: 'error'};
    return errorObj;
  };

  const search = (query) => {
    // Convert the grid string to an Object.
    const grid = {
      x: parseInt(query.split(' ')[0].split('x')[0], 10),
      y: parseInt(query.split(' ')[0].split('x')[1], 10),
    }  

    // Convert the coords of the houses to an Array of Objects.
    const coords = query.match(/\(.*?\)/g).map(coord=>{
      const arr = coord.replace(/[{( )}]/g, '').split(',')
      return {x: parseInt(arr[0], 10), y: parseInt(arr[1], 10)}
    })
      
    let result = {
      grid,
      coords
    }    

    return result;
  }
  const response = search(inputString); 
  return response;
  
};

module.exports = formater
