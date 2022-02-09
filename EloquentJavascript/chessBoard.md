# Chessboard
Write a program that creates a string that represents an n*n grid.

### My solution 
```js
let size = 10;
for (let i = 1; i <= size; i++) {
    let output = "";
    if (i % 2 != 0) {
        for (let j = 1; j <= size; j++) {
            if(j % 2 != 0) output += " ";
            if(j % 2 == 0) output += "#";
        }
    } else if (i % 2 == 0) {
        for (let j = 1; j <= size; j++) {
            if(j % 2 != 0) output += "#";
            if(j % 2 == 0) output += " ";
        }
    }
    console.log(output);
}
```

### My solution2
```js
let col = 8;
let row = 8;
for (let i = 0; i < row; i++) {
  let hashRow = '';
  if ( i % 2 == 0) {
  	hashRow += ' ';
  }
	for (let j = 0; j < col; j++) {
        if (j % 2 == 0) {
          hashRow += '#';
        }else {
          hashRow += ' ';
        }
    }
	console.log(hashRow);
}
```

### Book solution

```js
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
```

행렬의 원리를 이용함
