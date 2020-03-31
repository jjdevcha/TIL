# 1 values, types, and operators

### 4 types of values
- number
- string
- Boolean (Used like a switch)
Only `0, NaN, ""` is false
- undefined values(null, undefined)

## Operators

- binary operators for arithmetic
+, -, *, /, and %

- string concatenation
+

- comparison
There can be **type coersion** so better use `===` or `!==`
When you want to test whether a value has a real value
`null == 0`

- logic (&&, ||)
```js
true && false //=> false
true && true //=> true
true || false //=> true
false || false //=> false
```
**Short circuit** using `||`(default value)
```js
0 || -1 //=> -1
true || X //=> true (X is never evaluated) called short-circuit evaluation
```

- unary operators

-(negate number), !(negate logically), `typeof`

- tenary operator
`?:`