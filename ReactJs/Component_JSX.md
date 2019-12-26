
## Component
A function that returns **JSX**

### What is JSX?
Looks like HTML but it's not. JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.<br>

- Using **JSX**
```JSX
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
      </div>
    );
  }
}
```
- **JSX** restriction
You must wrap the whole JSX in a single element. 

### What if you don't use JSX?
You can use `React.createElement(component, props, ...children)`
```js
class App extends Component {
  render() {
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi I'm React App`))
  }
}
```
Obviously so complicated. So this is why we are using JSX.

#### How does a component look?
`<function name />`

### Creating components

* 1 Functional components(also referred to as "presentational", "dumb" or "stateless" components)<br>
`const cmp = () => { return <div>some JSX</div>`
* 2 class-based components(also referred to as "containers", "smart" or "stateful" components)<br>
`class Cmp extends Component { render () { return <div>some JSX</div> } }`


#### To make a component
1. You have to make a js file
2. `import React from 'react';`
3. Export it
```js
import React from 'react';

function Potato() {
    return <h3>I love potato</h3>
}

export default Potato;
```
### Giving a property to the component
You can name a property by yourself. The value of a property can be `String`, `Boolean`, or and `Array`. 
```js
<Potato type="Korea" harvest={true} store={[10, 20, "No"]} />
```
And it will return the properties and values.
```js
function Potato(Props) {
  console.log(Props);
  return <h3>I like potato</h3>
}
```
console
```
harvest: true
store: (3) [10, 20, "No"]
type: "Kor"
```
### Using property and value
You can refer value using brackets`{}`.
```
<Potato type="Korea" />
```
```js
function Potato({type}) {
  console.log({type});
  return <h3>I like {type}</h3>
}
```
result `I like Korea`
<br>
If you add 
```js
<Potato type="Korea" />
<Potato type="Australia" />
<Potato type="China" />
<Potato type="Mogolia" />
```
The reult will be 
```
I like Korea
I like Australia
I like China
I like Mogolia
```
To make the work more simple and efficient, you can put the properties and values in an Array with objects. With Array, you can use `map` method.
```js
const typeArr = [
  {
    name: "Korean"
    },
  {
    name: "Australian"
  },
  {
    name: "Chinese"
  },
  {
    name: "Mogolian",
  }
]
```
```js
{typeArr.map(country => {
        return <Potato name = {country.name}/>
 })}
```
### How to check property type
Using npm prop-types `npm i prop-types`
You can check if you are using correct type of a property. 
```js
function Potato({name, img, rating}) {
  return <div>
    <h3>I like {name} potato</h3>
    <img src={img} alt={name} />
    <h4>rating: {rating}/5.0</h4>
  </div>
```
```
Potato.propTypes = { // It must has to be propTypes, not other names.
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}
```
Then console will tell you if you didn't use a correct type for the property.
