## Props
`props` allows you to pass data from a parent component to a child component
- Parent component
```JSX
const AllPost = () => {
  return (
    <div>
      < Post title="Knives out" />
    </div>
  )
}
```
- Child component
```JSX
const Post = (props) => {
  return <p>Enjoy the new movie {props.title}</p>
}
```

## State
Used to change the component (Update UI)<br>
Only `class-based component` can define and use `state`. <br>
You can access state via `this.state` in `JSX`.\(inside `render()`\)
```JSX
class NewPost extends Component {
  state = {
    count : 1
  }
  render () {
    <div>
      <h1>{this.state.count}</h1>
    </div>
  }
}
```
