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
