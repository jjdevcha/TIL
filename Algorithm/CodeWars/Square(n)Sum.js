function squareSum(numbers){
  return numbers.length > 0 ? numbers.map(e => Math.pow(e, 2)).reduce((prev, cur) => prev + cur) : 0;
}

// if I only use reduce

function squareSum(numbers){
  return numbers.length > 0 ? numbers.reduce((acc, cur) => acc + cur**2, 0) : 0;
}
