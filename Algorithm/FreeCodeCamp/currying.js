// NO currying

function add(x, y) {
    return x + y;
}

// Use currying

function add1(x) {
    return function(y) {
        return x + y;
    }
}

// Use ES6

const add2 = x => y => x + y;

add1(1)(2) // 3

// Call curried function in parts

const funcForY = add1(1);

funcForY(2) // 3

// Partial application 

// Impartial 
function add3(x, y, z) {
    return x + z + y;
}

const partialFunc = add3.bind(this, 1, 2);
partialFunc(3) // 6