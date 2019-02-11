// This function will receive as an input the string with the grid a list of points representing houses in need of pizza delivery. 
// The function will return a array of objects with the grid and the coordinates of each house.


function formater (inputString){
  
  const search = (query) => {
    const map = {
      x: parseInt(query.split(' ')[0].split('x')[0], 10),
      y: parseInt(query.split(' ')[0].split('x')[1], 10),
    }    

    const cords = query.match(/\(.*?\)/g).map(cord=>{
      const arr = cord.replace(/[{( )}]/g, '').split(',')
      return {x: parseInt(arr[0], 10), y: parseInt(arr[1], 10)}
    })
    
    
    let result = {
      map: map,
      cords: cords
    }

    return result;
  }

  const response = search(inputString);
  return response;
  
};

module.exports = {formater}
