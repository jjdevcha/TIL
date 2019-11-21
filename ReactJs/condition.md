# Condition in React

## Ternary 
Insert ternary inside **JSX** with `{}`
```js
class App extends Component {
  render() {
    return(
      <div>
        {
          1 + 1 === 2 
          ? <div>Correct!</div>
          : <div>Wrong!</div>
        }
      </div>
    )
  }
}
```

## && Operator
Showing the result only when it's true
```js
class App extends Component {
  render() {
    return(
      <div>
        {1 + 1 === 2 && <div>Correct!</div>}
      </div>
    )
  }
}
```

## Using IIFE
\(Can't use if-else statement inside JSX\)
```js
class App extends Component {
  render() {
    const value = 1;
    return(
      <div>
        {
          (() => {
            if(value === 1) return <div>One</div>
            if(value === 2) return <div>Two</div>
            if(value === 3) return <div>Three</div>
          })()
        }
      </div>
    )
  }
}
```

