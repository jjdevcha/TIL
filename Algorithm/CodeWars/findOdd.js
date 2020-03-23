function findOdd(arr) {
  
    let object = arr.reduce((obj,c) => {
        obj[c] = ++obj[c] || 1;
        return obj;
    }, {});
  
    return Number(Object.keys(object)
                 .filter(objKey => object[objKey] % 2)[0]);
  }
  
  findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) //5