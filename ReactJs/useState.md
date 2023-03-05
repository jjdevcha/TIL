# useState() Hook for State Manipulation
You can use `useState()` in Function component when you want to set or edit the state.

### What is `useState()`
It is a hook to add a state to function components

### How to use `useState()`
There is no `this` in function components. So we can't use `this.state`.<br>
Instead, You have to call the `useState()` Hook directly inside the function component.

### What is the argument inside the `useState()`
Unlike the class the state doesn't have to be an object

### What does `useState()` return
It returns a pair of values: the current state(it will match the `initialSate` you have passed) and the update function. The set function that lets you update the state to a different value and trigger a re-render <br>
They are similar with `this.state` and `this.setState()`

```jsx
// Variables can be named with anything
const [state, setState] = useState(initialState);
const [count, setCount] = useState(0);
const [shopList, setShopList] = useState(() => createShopList());
```

### How do we update
```jsx
<button onClick={() => setCount(count + 1)}>Click Me</button>
```

* Caution  <br>
In useState() update, unlike `setState()`, it replaces the original state not merge. <br>
So make sure to write down other properties if you wanna keep it.<br>
Or declare **multiple** `useState()`
