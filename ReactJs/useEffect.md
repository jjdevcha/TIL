# useEffect()
`useEffect()` is a React hook that is used to handle the side effects besides rendering UI

## What is side effect?
In React, a side effect is something that happens in our code that isn't just changing what we see on the screen
- fetching data from a server
- updating the browser title
- saving data to a database

## Understanding the life cyle of the component
Knowing the life cycle of the component is crucial when you want to understand how `useEffect()` works. Because lifecycle methods allow us to control what happens at specific points in a component's life <br>
- Mounting : When a component is being created and added to the screen. `useEffect()` that is called right after the component is added to the screen
- Updating : When the component receives new data or when its state changes, and it nees to re-render. `useEffect()` that runs whenever specific data or state changes
- Unmounting : When a component is being removed from the screen. A cleanup function in `useEffect()` that runs just before the component is removed. 

## How to use 
```js
import {useEffect} from "react";

function App() {

useEffect(*/side effects and return clean up function/*, */dependencies/*)

}

export default App;
```

### What is dependencies?
Dependencies determine when the effect shoulb be executed or re-executed
```js
useEffect(() => {
    // This effect depends on the "location" value
  }, [location]);
```





















