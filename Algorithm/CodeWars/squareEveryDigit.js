// Square Every Digit

// My solution

function squareDigits(num){
  
    return Number(String(num).split('').map(cur => Number(cur)**2).join(''));
  }