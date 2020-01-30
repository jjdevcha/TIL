#Types of Component

## 1. Class-based Component
### Usage : When you need state or access to lifecyle hooks(don't wanna use react hooks)
- `class XY extends Components`
- Access to state
- Lifecycle hooks
- Acces props and state via `'this'`

## 2. Functional Component
### Usage : Use in all other cases
- `const XY = props => {...}`
- Access to state `useState()`
- Access props via `"props"`

![](https://user-images.githubusercontent.com/47588349/72037878-eb4e5b00-32e2-11ea-9e33-760479aa9ea2.png)
