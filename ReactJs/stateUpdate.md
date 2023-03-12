# State Updates May Be Asynchronous

Since state gets updated asynchronously, you should not rely on the value for calculating the next state
So you have to use a function inside the setState to avoid this

## Wrong code
```jsx
const [counter, setCounter] = useState(1);
setCounter(counter + 1);
```

## Fixed code
```jsx
const [counter, setCounter] = useState(1);
setCounter((counter) => {
  counter = counter + 1;
});
```

# Using prevState
`prevState` is a name that you have given to the argument passed to setState callback function. What it holds is the value of state before the `setState` was triggered by React. 
```jsx
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
```
