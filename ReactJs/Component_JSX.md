
## Component
A function that returns HTML 
#### How does it look?
`<function name />`
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