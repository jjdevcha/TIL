// Shortest Word

// My
// Using Math.min and map

function findShort(s){

    return Math.min(...s.split(' ').map(cur => cur.length));
  }

// Other solution
// Using Math.min and reduce

function findShort(s){

    return s.split(' ').reduce((a, c) => Math.min(a, c.length), Infinity);
  }

// Other solution
// Using sort
function findShort(s){

    return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
  }