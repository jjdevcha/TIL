// Format a string of names like 'Bart, Lisa & Maggie'.

// My 

function list(names){
   
    if (names.length === 1) {
      return names[0].name;
    } else if (names.length > 1) {
        let res = names.map(cur => cur.name);
        if(res.length === 2) {
            return res.join(' & ');
        } else {
            res = res.join(', ');
            const lastIndexOfComma = res.lastIndexOf(',');
            return res.substring(0, lastIndexOfComma) + ' &' + res.substring(lastIndexOfComma + 1);
        }
    }
  
    return '';
  }

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// Others

function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }