# Using props in React
Since React devides the app into small components, data has to be transferred through components. 
The data that is getting passed through the components is `props`.
The main data object is generally stored in `App.js` and it gets passed through other small components. 
**Remember that the return value of a component should be inside a tag**

### App.js
```js
import SmallComp from '<source>'

function App() {
  
  const data = {name: "J", gender: "female", age: "30"}
  
  return (
    <div>
      <SmallComp name={data.name} gender={data.gender} age={data.age}/>
    </div>
  );

}
```

### SmallComp.js
```js
function SmallComp(props) {
  return (
      <div>
        <p>{props.name}</p>
        <p>{props.gender}</p>
        <p>{props.age}</p>
      </div>
  )

}

```
