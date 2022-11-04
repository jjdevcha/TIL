# Add Binary 

Given two binary strings a and b, return their sum as a binary string.

## My solution
First, I approached the problem by these steps
1. change the binary number into decimal
2. Add decimal numbers together
3. Convert the deciaml sum into binary number and return

But the problem with this Algorithm is that Javascript only can handle number in between `-2^ 53 – 1 and 2^53 – 1`. So when there is large number steps 1- 2 can't handle the size of the number.
Below is the Algorithm that I approached at first. 
```js
    let num = 0;
    let decResult = 0;
    
    let decA = binToDec(a, 0, num);
    num = 0;
    let decB = binToDec(b, 0, num);
    
    decResult = decA + decB;
    
    
    function binToDec(n, decN, num) {
        if (+n === 1) return 1;
        for (let i = n.length - 1; i >= 0 ; i--) {
        decN += n[i] * Math.pow(2, num);
        num++;
        }
        return decN;
    }
    
    function decToBin(decN) {
        let binStack = '';
        if (decN === 0) return '0';
        if (decN === 1) return '1';
        while(decN >= 2) {
           binStack = decN % 2 + binStack;
            decN = Math.trunc(decN / 2);
        }
        return '1' + binStack;
    }
    
    return decToBin(decResult);
```

So I had to approach with the way that I can deal with the numbers as String. I made an algorithm that calculates binary adding process. 
```js
let addBinary = function(a, b) {
    
    let aArr = a.split('');
    let bArr = b.split('');
    let sumArr = [];
    let up = 0;
    
    if (a.length >  b.length) {
        bArr = zeroInsert(a.length - b.length, bArr);
    } else if (a.length < b.length) {
        aArr = zeroInsert(b.length - a.length, aArr);
    }
    
    for (let i = aArr.length - 1; i >= 0; i--) {
        let sum = +aArr[i] + +bArr[i] + up;
        if (sum >= 2) {
            sumArr.unshift(sum - 2);
            up = 1;
        } else {
            sumArr.unshift(sum);
            up = 0;
        }
    }
    
    return up === 0 ? sumArr.join('') : `1${sumArr.join('')}`
    
    
    function zeroInsert(length, arr) {
        for (let i = 0; i < length; i++) {
            arr.unshift('0');
        }
        return arr;
    }
    
    
};
```

# Someone else's solution
It's a similar approach considering it's using binary adding meachasnism. But this person used while loop so that we don't need to match the length of the number array and lessen the storage. Using `--` math is simple way as well. 
```js
var addBinary = function(a, b) {
    let index1 = a.length;
    let index2 = b.length;
    let result = '';
    let carry = 0;
    while (index1 || index2) {
        let sum = (index1 > 0 ? +a[--index1] : 0) + (index2 > 0 ? +b[--index2] : 0) + carry;
        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    };
    return carry ? carry + result : result;
};
```
