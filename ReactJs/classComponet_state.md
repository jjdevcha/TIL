## Class component

Unlikely with a function component, it doesn't have return inside. It should extend `React.Componet` and can use `render()`method
```js
class App extends React.Component {
  render() {
    return <h1>I'm a class component</h1>;
  }
}
```

## State

You can use an object called state in class componet. It handles flexible data easily. But you can't mutate it directly since 
they don't want error from seperating `render()` and setting data. So you have to use `setState()`method for it.
```js
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState({count : this.state.count + 1});
  };

  minus = () => {
    this.setState({count : this.state.count - 1});
  };

  render() {
    return <div>
      <h1>I'm {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>;
  }
}
```
Also you can get current state rigth away from `setState()`method 
```js
add = () => {
    this.setState(cur => ({count : cur.count + 1}));
  };
```
\*\*REMEMBER\*\* Every time when you call `setState()`method, React is going to re-render`render()` with the new state. 

## The component life cycle 
The life cycle method is called automatically when components are called in a way that they need.
#### Examples
* `componentDidMount() {}`
* `componentDidUpdate() {}`
* `render() {}`
