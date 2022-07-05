// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  let word = str.split('');
  let result = [];
  for (let i = 0; i < word.length; i += 2) {
    if (word[i+ 1]) {
      result.push(word[i] + word[i+1]);
    } else {
      result.push(word[i] + '_');
    }
  }
  
  return result;
}
