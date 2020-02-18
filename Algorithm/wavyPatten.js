// Wavy Pattern

function processData(input) {
    //Enter your code here
    let data = "\u2571\u2572";
    let code = data.repeat(7);
    if (input) {
      while (input > 1) {
       code = code + "\n" + data.repeat(7);
       input--;
      }
    }
    return code;
} 
