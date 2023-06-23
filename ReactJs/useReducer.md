# useReducer

A powerful React hook that helps manage complex state logic within a component
---
The idea behind useReducer is it gives you a more concrete way to handle complex state so it gives you to set actions that you can perform on your state and it's going to convert your current state to a new version of the state based the action you send it. - Web dev
---

## How to use it
```js
  const [state, dispatch] = useReducer(reducer, initialState);
```
Pass the reducer function and an initial state value inside the useReducer hook. And it returns an array with two elements: 
the current state and a 'dispatch' function


### What is a reducer function?
it takes the current state and an action, and returns the new state based on the action.
The reducer handles different types of actions, such as incrementing the count, decrementing the count, or resetting the count.
```react
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error('Invalid action');
  }
};
```
### What is a dispatch function ?
It is used to trigger an action. When a event is happened it calls the respective handler functions, which in turn dispatches an action with the corresponding type.
```js 
 const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
```
### When to use useState() vs useReducer()
| useState() | useReducer() |
| ----------- | ----------- |
| The main sate management tool | More powerful|
| Independent pieces of state/ data | Related pieces of state/ data - more complex state updates |












