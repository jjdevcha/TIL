// 주어진 두 숫자에 대한 최대공약수(greatest common divisor)를 구하세요

// My
function gcd(num1, num2) {
    // 작은수 찾기
    let sNum = Math.min(num1, num2);
    let bNum = Math.max(num1, num2);
    // 작은수에서 하나씩 작아지게 반복해서 작은수가 큰수를 나눌 수 있으면 최대공약수 
    for(let i = sNum; i > 0; i--) {
      if(bNum % i === 0 && sNum % i === 0) {
        return i;
      }
    }
  }
  
  // Model
  function gcd(num1, num2) {
    return num2 ? gcd(num2, num1 % num2) : num1;
  }

  // 어떤 짝수에 대해서 골드바흐의 추측이 맞는지 확인하시오. 이때 표현할 수 있는 것의 갯수가 2개 이상이면 두 수의 차가 가장 큰 것을 출력하시오.

  // My 
  function goldbachsConjecture(num) {
    for(let j = 2; j <= num - 2; j++) {
      if(primeNumber(j) === true) {
        let restNum = num - j;
        if(primeNumber(restNum)) {
          return `${num} = ${j} + ${restNum}`;
        }
      }
    }
  };

  function primeNumber(num){
    if(num < 2) {
      return false;
    }
    for(let i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  }

  // Model

  function goldbachsConjecture(num) {
    // your code here
    for(let j = 2; j < num; j++){
      if(primeNumber(j) && primeNumber(num - j)){
        return num + ' = ' + j + ' + ' + (num - j);
      }
    }
  };
  
  function primeNumber(num){
    if(num < 2){
      return false;
    }
    for(let i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  }

// 성준이는 1부터 n까지 숫자를 적던 중 깜빡하고 하나의 숫자를 빼먹었다. 그 빼먹은 숫자를 찾으시오.

// My 
function findMissingNumber(str) {
    let nums = str.split(" ");
   
    nums = nums.map(cur => parseInt(cur)).sort((a, b) => a - b);
   
   
    for(let i = 1; i <= nums.length; i++) {
      if(i !== nums[i-1]) {
        return i;
      }
    }
   
    
   }

// Model
function findMissingNumber(str) {
    let array = str.split(' ').map(Number);
    let largest = array.length + 1;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return largest * (largest + 1) / 2 - sum;
  }

  
/*
어느날, 성준이는 우연히 길거리에서 양수 N을 보았다. 성준이는 30이란 수를 존경하기 때문에, 
그는 길거리에서 찾은 수에 포함된 숫자들을 섞어 30의 배수가 되는 가장 큰 수를 만들고 싶어한다. 
성준이를 도와 그가 만들고 싶어하는 수를 계산하는 프로그램을 작성하라. (그 수가 존재한다면)
출력 : 성준이가 만들고 싶어하는 수가 존재한다면 그 수를 출력하라. 그 수가 존재하지 않는다면, -1을 출력하라.
*/

// My 

// 30의 배수는 3의 배수이면서 일의 자리가 0인 수이다.
// 3의 배수는 각 자리 숫자의 합이 3의 배수인 수이다.

function findMaxOnMultiplesOfThirty(num) {
  // 숫자들을 array에 넣기 + sort 내림차순으로 정렬
  // 우선 모든 숫자들의 합이 3의 배수이면서 0이 존재하는지 검사 
  // 검사 통과하면 숫자 합쳐서 리턴 아니면 -1반환

  const strToInt = cur => parseInt(cur);
  const bigToSmall = (a, b) => b - a;
  const reduceFunc = (a, c) => a + c;

  const numArr = String(num).split("").map(strToInt).sort(bigToSmall); 
  
  if(numArr[numArr.length - 1] === 0 && numArr.reduce(reduceFunc)) {
    return Number(numArr.join(''));
  } else {
    return -1;
  }
}

// Model

function findMaxOnMultiplesOfThirty(num) {
  var sum = 0;
  var str = String(num)
  var split = str.split('');
  for(var i = 0; i < str.length; i++) {
    sum = sum + Number(str[i]);
  }
  if(str.includes(0) === false || (sum % 3 !== 0)) {
    return -1;
  }
  else if(str.includes(0) === true && (sum % 3 === 0)) {
    split.sort(function(a,b) {
      return b - a;
    })
    return Number(split.join(''));
  }
}

/*
Week 9-1 sumOnMultiplicationOfOrderedPairs
입력한 숫자에 대해 서로 다른 두 숫자의 모든 경우에 대해, 곱의 합을 구하세요.
sumOnMultiplicationOfOrderedPairs(2, 3, 4) // 26
위 코드의 결과가 26이 나오는 이유는 다음을 참조하세요.

가능한 조합(Pair)은 다음과 같습니다.

(2, 3)
(2, 4)
(3, 4)
*/

// 삽질한 흔적... 이 코드는 args의 element가 중복이 되지 않을 때만 유효하다 

function sumOnMultiplicationOfPairs(...args) {
  // 모든 경우의 수의 조합을 만들어 array로 묶기(이 단계에서 더할 수 있으면 더하기)
  // 그걸 큰 array에 집어넣기 (중복검사)
  // 조합들을 모두 곱하고, 큰 array를 마저 더하기
  let combArr = []; 
  for(let i = 0; i < args.length; i++) {
    for(let j = 0; j < args.length; j++) {
     if(i !== j) {
      let comb = [args[i], args[j]].sort((a,b) => a - b);
      let newCombArr = combArr.map(cur => JSON.stringify(cur));
      if(!(newCombArr.includes(JSON.stringify(comb)))) {
        combArr.push(comb);
      }
     }
    }
  } 
  const reduceMul = (a, c) => a * c;
  const reduceAdd = (a, c) => a + c;
  
  return combArr.map(cur => cur.reduce(reduceMul)).reduce(reduceAdd);
  
}
sumOnMultiplicationOfPairs(2, 3, 4); 

// Model

function sumOnMultiplicationOfPairs(...array) {
  let sum = 0;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      result += sum * array[i];
    }
    sum += array[i];
  }
  return result;
}

/*
숫자가 주어졌을때, threeFiveMultiples(num) 함수는 해당 숫자보다 
작은 3 혹은 5의 배수들의 총합을 반환합니다.
예시: 만약 10이 주어졌다면, 10 보다 작은 3과 5의 배수들은 3, 5, 6, 9 가 있으며 
해당 숫자들을 모두 더하면 23 이 나오므로 여러분이 작성하진 함수는 23 을 반환해야 합니다.
*/

// My 

function threeFiveMultiples(num) {
  // 3의 배수 누적 더하기 결과값
  // 5의 배수 누적 더하기 결과값
  // 두개 더하기
  // 해보기 두개 같이 해도 되더라 
  let result = 0;
  for(let i = 1; i < num; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

// Model 
// Exactly same with my solution


/**
 문자열이 주어졌을때, runLength(str) 함수는 Run-length 인코딩 알고리즘을 사용하여 주어진 문자열을 압축하여 반환합니다.
해당 알고리즘은 반복되는 글자가 있을경우 반복되는 수와 해당 글자를 조합하여 문자열을 압축시킵니다.
예시: wwwggopp 는 3w2g1o2p 로 압축됩니다. 주어지는 문자열은 숫자나, 구두점이나, 문자를 포함하고 있지 않습니다.
 */

// My 
// 처음에 생각했던 솔루션 
// 근데 이 솔루션은 스트링 전체에서 해당 문자가 몇개 인지 검사해 나타내주는 거기 때문에
// 인코딩 알고리즘에 적합하지 않음 
function runLength(str) {
  let strArr = str.split("");
  let obj = {}, result = "";
  
  
  strArr.forEach(cur => {
    obj[cur] = ++obj[cur] || 1;
  })

  for(let key in obj) {
     result += (obj[key] + key);
  }

  return result;
}

// My second solution 

function runLength(str) {
  let strArr = str.split("");
  let result = "", count = 1;

  
  strArr.forEach((cur, i) => {
      if(cur === strArr[i+1]) {
        ++count;
      }else {
        result += count + cur;
        count = 1;
      }
    })

  return result;
}

runLength("EDNSOEQTWVOQQVDVRC") //"1E1D1N1S1O1E1Q1T1W1V1O2Q1V1D1V1R1C"

// Model
// 겁나 비효율적 ^^ 복잡도 O(n**2) 누가 만들었냐 ^^ 

function runLength(str) {
  var i = 0;
  var rle = "";
  while (i < str.length) {
    var c = str[i];
    var j = i + 1;
    var compressed = [1, c];

    while (j < str.length) {
      if (str[j] === c) {
        compressed[0] += 1;
      } else {
        break;
      }
      j++;
    }

    rle += compressed.join('');
    i = j;
  }

  return rle;
}

/**
 문자열로 이루어진 배열이 주어졌을때, thirdGreatest(strArr) 함수는 주어진 배열에서 세번째로 긴 단어를 반환합니다. 
 그 중, 동률일때는 뒤에 있는 단어를 반환해줘야 합니다.
예를 들어, 주어진 배열이 ["hello", "world", "before", "all"] 라면, 결과값은 world 가 될것입니다. 
왜냐하면 before는 6글자이고 hello와 world 둘다 5글자 이지만 world가 더 뒤에 나온 5글자 단어이기 때문입니다.
만약 주어진 배열이 ["hello", "world", "after", "all"] 이라면 결과값은 after가 될것입니다. 
왜냐하면 앞에 세 단어가 모두 5글자이기 때문에 마지막 단어를 반환하기 때문입니다. 
배열은 항상 적어도 문자열 세개를 가지고 있으며, 각각의 문자열은 오직 글자만을 포함하고 있습니다.
 */

// My 

function thirdGreatest(arr) {
  // sort로 배열 큰거부터 정리
  // array에 세번째있는 애 추출

  return arr.sort((a,b) => b.length - a.length)[2];
}

// Model

function thirdGreatest(arr) {
  arr = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return arr[2];
}

/*
+, -, 그리고 괄호를 가지고 길이가 최대 50인 식을 만들었다. 
그리고 나서 성준 이는 괄호를 모두 지웠다. 
그리고 나서 괄호를 적절히 쳐서 이 식의 값을 최소로 만드려고 한다. 
괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.
findMinByBracket('55-50+40') // -35
*/

// My 
// pseudo 코드랑 좀 다르게 문제를 풀어나갔음
// 1) '-'나오는 부분으로 split하기
// 2) spit한 array를 돌며 eval로 계산해놓기
// 3) join할 때 다시 '-'넣어주고 전체 str을 다시 '-'로 합쳐 eval로 return! 
// 잼땨ㅑㅑㅑㅑㅑㅑ <3

function findMinByBracket(str) {
  
  //str arr에다 넣고 
  // iterator 사용해서 -나오면 () 집어넣기
  // 다시  .join() 시키기
  // eval 시켜서 return 하기 
  let strArr = str.split('-');

  strArr = strArr.map((cur, i) => {
    return eval(cur);
  })
  return eval(strArr.join('-'));
}

// Model ==> 겁나 난해 

function findMinByBracket(str) {
  var cnt = 0;
  for (let i = 1; i < str.length ; i +=1 ) {
    if (str[i] == "+") {
      cnt += 1;
    } else if (str[i] == '-') {
      break;
    }
  }
  var separators = [' ', '+', '-'];
  var tokens = str.split(new RegExp('[' + separators.join('') + ']', 'g'));

  var sum = Number(tokens[0]);
  console.log(tokens, cnt);
  var temp = 0;
  for(let i = 1; i < tokens.length; i += 1) {
    if (temp < cnt) {
      sum += Number(tokens[i]);
    } else {
    sum -= Number(tokens[i]);
    }
    temp ++;
  }
  return sum;
}

/*
문자열이 주어졌을때, numberSearch(str) 함수는 주어진 문자열에서 숫자를 모두 찾아 더한 뒤 해당 값을 
(숫자, 공백 등을 제외한) 알파벳의 길이의 길이로 나눈 값을 정수로 반올림하여 반환합니다.
예시: 만약 문자열 Hello6 9World 2, Nic8e D7ay! 이 주어졌다면, 결과값은 2 입니다.
우선 모든 숫자를 더하면 6 + 9 + 2 + 8 + 7 = 32 가 나오게됩니다.
그 후 (숫자, 공백 등을 제외한) 알파벳의 길이가 17이기 때문에 32/17 = 1.882 가 나오게 되며, 
가까운 정수로 반올림을 하게되면 정답인 2가 나오게 됩니다.
*/

// My 

function numberSearch(str) {
  // 번호 추출 후 더하기
  // 숫자, 공백 뺀 알파벳 길이 구하기
  // 숫자를 알파벳의 길이로 나누고, 반올림해서 리턴!!

  let strArr = str.split('');
  let numSum = str.match(/\d/g).reduce((a,c) => parseInt(a) + parseInt(c));

  strArr = strArr.filter(cur => cur.match(/\w/g) && !(cur.match(/\d+/g)));
  let strLeng = strArr.length;

  return Math.round(numSum / strLeng);
}

// Model 
// 대박 string 으로 '1' > '0' 이나 'h' > 'a' 될줄 몰랐음 
// 대박!!!!!!!
function numberSearch(str) {
  let numSum = 0;
  let strCnt = 0;
  for (let i = 0 ; i < str.length; i += 1) {
    if (str[i] >= '0' && str[i] <= '9') {
      numSum = numSum + Number(str[i]);
    } else if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      strCnt = strCnt + 1;
    }
  }
  return Math.round(numSum/strCnt);
}




