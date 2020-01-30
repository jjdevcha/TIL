# Using Refs

### Without refs
If we are trying to give a focus on a input...
```jsx
class Person extends Component {
    componentDidMount() {
        document.querySelector('input').focus();
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
                <Aux>
                    <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.change} value={this.props.name}/>
                </Aux>
            );
    }
};
```
But this only can make the first input focused...

### With refs
This makes it focus at the last input(but wHy???!......)
```js
class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
                <Aux>
                    <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input
                        ref={(inputEl) => {this.inputElement = inputEl}} 
                        type="text" 
                        onChange={this.props.change}
                        value={this.props.name}/>
                </Aux>
            );
    }
};
```
#### Using refs with `React.createReaf()`
```js
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRefs = React.createRef();
    }
    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRefs.current.focus();
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
                <Aux>
                    <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input
                        //ref={(inputEl) => {this.inputElement = inputEl}} 
                        ref={this.inputElementRefs}
                        type="text" 
                        onChange={this.props.change}
                        value={this.props.name}/>
                </Aux>
            );
    }
};
```
