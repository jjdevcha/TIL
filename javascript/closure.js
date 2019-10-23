/*
// Approaching outer scope variable after it's no longer active
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
console.log(wrap1());
console.log(wrapValue(2)());

*/
// Using function in a different ways

function mul(factor) {
    return number => number * factor;
}

let twice = mul(2);
let triple = mul(3);

console.log(twice(5));
console.log(triple(4));