# Optional Chaining 
This feature in JS allows you to access deeply nested properties of an object without worrying if the properties exist or not. 

## How it works
- Accessing nested properties: obj?.prop1?.prop2?.prop3
- Meaning of `?.` : e.g. `obj.prop1?.prop2` -> if prop1 exists, access the chained properties, if not, don't
- Functions and Arrays: `obj.func?.()` , `arr?.[0]`
- Short-circuiting: If a part of optional chaining evaluated to `null` or `undefined`, the entire chain will short-circuit, returing `undefined`
