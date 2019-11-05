# How to pass the method reference?
There are 2 ways
* 1 Use bind
* 2 Use anonymous function
```js
switchNameHandler = (newName) => {
    // console.log('was clicked');
    // You can't directly change this.state
    this.setState( {
      person: [
        {name: newName, age: 24},
        {name: "Lachlan", age:22},
        {name: "Bebe Cha", age: 4}
      ]
    })
  }
  render () {

    return (
      <div className="App">
      <h1>Hi</h1>
      <button onClick={() => this.switchNameHandler("JI")}>Switch name</button>  // anonymouse function
      <Person 
      name={this.state.person[0].name} 
      age={this.state.person[0].age}
      click={this.switchNameHandler.bind(this, "Jung In Cha")}/> // binding
      <Person 
      name={this.state.person[1].name} 
      age={this.state.person[1].age}
      click={this.switchNameHandler.bind(this, "J")}/>
      <Person 
      name={this.state.person[2].name} 
      age={this.state.person[2].age}
      click={this.switchNameHandler.bind(this, "Kitty")}>My hobby : sleeping</Person>
      </div>
      );
    }
```
