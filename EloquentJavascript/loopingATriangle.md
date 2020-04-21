# Looping a Triangle
=> Wirte a loop that makes seven calls to `console.log` to output the following triangle:
```js
#
##
###
####
#####
######
#######
```

### My solution
```js
let result = "";
for (let i = 1; i < 8; i++) {
    for(let j = i; j > 0; j--) {
        result += "#";
    }
    result += "\n";
}

console.log(result);
```
=> Wrong solution (Have to have 7 calls of `console.log`)

