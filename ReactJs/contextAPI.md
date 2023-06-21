# Context API
If you are using deep chains of components, you might suffer from multiple props chain<b>
Context API lets you to make global variables to be passed down to any components<br>

### How to create Context 
```js
import React from 'react';

const UserContext = React.createContext({});

export default UserContext;
```
And this Context also comes with `UserContext.Provider` and `UserContext.Consumer` <br>

### How to use?
1. Create a `Context.js` and create a `Context`

2. Wrap the parent component with `Context.Provider`

3. Wrap the child component with `Context.Consumer` and use the global variables.


< OR !! IF YOU USE BELOW ONES, NO NEED TO WRAP! >
* You can use `static contextType = Context` to use `Context` easily 
(But it can only be used in Class components)<br>
* You can use `useContext()` in Functional components

### Context limitations
- React Context is not optimized for high frequency changes
- React Context also shouldn't be used to replace ALL component communications and props

