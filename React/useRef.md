# useRef
Why should I use `useRef` instead of `useState` in some cases
1. Performance
-  `useRef` allows us to store and access the value without causing a re-render, making it more efficient
2. Direct DOM Access
- It provides a mutable reference to a DOM element (e.g. accessing `offsetWidth`) 
