# Passing arguments

How to pass `newName` in `React`
```jsx
switchNameHandler = (newName) => {
    this.setState( {
      person : [
        {name: newName, age: '24'},
        {name: 'Lachie Robbie', age: '22'},
        {name: 'Bebe Cha', age: '5'}
      ]
    })
  }
```

1. Using `bind`
```jsx
<button onClick={this.switchNameHandler.bind(this, 'Jung In Cha')}>Switch Name</button>
```

2. Using ES6 Function
* This method can be inefficient, be aware of it!
```jsx
<Person
  name={this.state.person[0].name} 
  age={this.state.person[0].age}
  click={() => this.switchNameHandler('Kitty!')} />
```
