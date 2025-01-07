# memo() 
The `memo()` function wraps a React functional component and prevents it from re-rendering unless its props change.
```js
const MemoizedComponent = memo(Component)
```
## How does it work
- React performs a shallow comparison of the props
- If the props are the same as the previous render, React skips rendering the component
- If the props are different, React re-renders the component
