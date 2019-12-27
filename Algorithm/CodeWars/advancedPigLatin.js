// advanved pig latin
// 느낌표를 처리 못하겠음..
// 좀 더 고민해볼 것 

function translate(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    

	return sentence.split(' ').map(cur => {
      if (cur.search(/(!+|\?+)/g)) {
        const punc = [...cur.matchAll(/(!+|\?+)/g)].join('');
        
      }

	  // lowerCase
	  if (cur[0] == cur[0].toLowerCase()) {
        if (vowels.includes(cur[0])) {
          return cur + 'way';
        } else {
          const vowelInd = Array.from(cur).findIndex(el => vowels.includes(el));
          return cur.substring(vowelInd) + cur.substring(0, vowelInd) + 'ay';
        }
	  } else { // uppercase
        if (vowels.includes(cur[0].toLowerCase())) {
          return cur + 'way';
        } else {
          const vowelInd = Array.from(cur).findIndex(el => vowels.includes(el));
          return cur[vowelInd].toUpperCase() + cur.substring(vowelInd + 1) + cur.substring(0, vowelInd).toLowerCase() + 'ay';
        }
	  }
	})
	.join(' ');
};

translate('Hello World') // 'Ellohay Orldway'
translate('Pizza? Yes Please!!')// 'Izzapay? Esyay Easeplay!!'