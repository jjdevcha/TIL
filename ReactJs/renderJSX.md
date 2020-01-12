# Rendering Adjacent JSX Elements

1. Using a wrapper element
```jsx
return (
  <div className="App">
    <p>This is a react app</p>
    <h1>Hello!</h1>
  </div>
);
```

2. Using a wrapper array
```jsx
return [
  <p>This is a react app</p>,
   <h1>Hello!</h1>
];
```

3. Using a wrapper component(HOC = Higher Order Component)<br>
`Aux.js`
```jsx
import React from 'react';

const Aux = props => props.children;

export default Aux;
```
`Person.js`
```jsx
return (
  <Aux>
    <p>This is a react app</p>,
    <h1>Hello!</h1>
  </Aux>
);
```
4. Using `React.Fragment`
```jsx
return (
  <React.Fragment>
   <p>This is a react app</p>,
   <h1>Hello!</h1>
  </React.Fragment>
);
```
or
```jsx
import React, {Component, Fragment} from 'react';

return (
  <Fragment>
   <p>This is a react app</p>,
   <h1>Hello!</h1>
  </Fragment>
);
```
