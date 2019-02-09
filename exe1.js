// Given 2 arrays, create a function that lets' a user know (true/false) whether these two arrays contain any common items.

// For example
// const array1 = ['a', 'b', 'c', 'd']
// const array1 = ['z', 'y', 'i']
// should return false.
//--------------
// const array1 = ['a', 'b', 'c', 'x']
// const array1 = ['z', 'y', 'x']
// should return true

// function checkArrays(arr1, arr2) {
//   for (i=0; i < arr1.length; i++){
//     for (j=0; j < arr2.length; j++){
//       if (arr1[i] === arr2[j]){
//         console.log(true);
//       }
//       else {
//         console.log(false);
//       }
//     }
//   }
// }

function checkArrays(arr1, arr2) {
  let obj = {}
  for (i=0; i < arr1.length; i++){
    if(!obj[arr1[i]]){
      obj[arr1[i]] = true;
    }
  }
  console.log(obj);

  for(j=0; j < arr2.length; j++){
    if(obj[arr2[j]]){
      return true;
    } 
  }
  return false;
}


arr1 = ['a', 'b', 'c', 'x'];
arr2 = ['f', 'a', 'i']

checkArrays(arr1, arr2);

// O(n^2)