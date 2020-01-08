# Immutably Updating State
If you just directly copy the `this.state.something`, you might mutate the original state itself.<br>
So you need to have a safe copy

1. Use `slice`
```jsx
const person = this.state.person.slice();
```

2. Use ES6 spread operator
```jsx
const person = [...this.state.person];
```
