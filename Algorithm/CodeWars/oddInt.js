// Find the odd int

// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
    let object = arr.reduce((obj,cur) => {
        obj[cur] = ++obj[cur] || 1;
        return obj;
    }, {});
  
    return Number(Object.keys(object)
                 .filter(objKey => object[objKey] % 2)[0]);
  }
  
  findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]);