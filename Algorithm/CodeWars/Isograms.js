// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
  // A 65 Z 90
  let obj = {};
  let string = str.toUpperCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] in obj) {
      return false;
    } else {
      obj[string[i]] = 1;
    }
  }
  
  return true;
}
