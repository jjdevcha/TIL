# HOC \(Higher Order Componet\)
It wraps another component and then maybe adds some extra logic to it<br>
No need to wrap the returning JSX with `<div></div>`

### HOC without class
`Aux.js`
```js
// no need to import React for simple wrapping HOC

const Aux = props => props.children;

export default Aux;
```
`Person.js`
```JSX
<Aux> 
    <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age}!</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} value={this.props.name}/>
</Aux>
```

### HOC with class
`Aux.js`
```js
import React from 'react';

const Aux = props => (
    <div className={props.classes}>{props.children}</div>
);

export default Aux;
```
`Person.js`
```JSX
<Aux classes={classes.Person}> 
    <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age}!</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} value={this.props.name}/>
</Aux>
```
### HOC using JS logic
`withClass.js` This `js` is simple javascript `function` that returns another `function` that returns component<br>
So you don't have to capitalize the function name since it's not returning the component directly 
```js
import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            < WrappedComponent />
        </div>
    );
}

export default withClass;
```
`App.js`
```js
return (
        <Wrap>
          <button onClick={() => {
            this.setState( { showCockpit: false });
          }}>Remove Cockpit</button>
          {this.state.showCockpit ? 
          <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons} 
          personLength={this.state.person.length}
          clicked={this.togglePersonHandler} />
          : null}
          {persons}
        </Wrap>
      );
    }
  };
  // You have to use empty wrapping HOC in JSX 
  
  export default withClass(App, classes.App);
```

