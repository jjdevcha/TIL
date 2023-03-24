# Adding Dynamic style

## Dynamic Inline Styles
```js
import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} // double braces syntax
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
```
```js
import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [toggleClicked, setToggleClicked] = React.useState(false);
    
    const handleClick = (event) => {
        setToggleClicked((prevToggleClicked) => {
            return !prevToggleClicked;
        });
    };
    
    return (
        <div>
            <p style={{color: !toggleClicked ? "white" : "red"}}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
```
## Setting CSS classes dynamically 
```js
import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [toggleClick, setToggleClick] = React.useState(false);
    
    const handleClick = (event) => {
        setToggleClick((prevToggleClick) =>{
            return !prevToggleClick;
        });
    };
    return (
        <div>
            <p className={toggleClick ? 'active' : ''}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}

```
### Why do we use double brace syntax for inline style?
I still quite not understand why but the post below explains that we have to return object for the style
[Click here to find out](https://stackoverflow.com/questions/47950833/react-why-is-double-brace-syntax-style-required-for-inline-styles#:~:text=It's%20just%20an%20object%20literal,re%20defining%20multiple%20style%20properties.)

## Styled Components & Dynamic Props
Firstly, you have to install the package to use the styled component
```console
# with npm
npm install --save styled-components
```
Secondly, you have to import the package in the js file to use it
You can make a wrapper with styled component and use props to dynamically adjust the style
Media queries don't need selector with styled-component
```js
import React, { useState } from "react";
import styled from "styled-components"; 

import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;
  
  @media (min-width: 768px) {
    margin: 0;
  }

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

```

## Dynamic Styles with CSS Modules
Since if you use normal css file for react, css selectors are globally accessible. If you want to scope the selectors just for the certain js file, you should use css modules. 

Firstly, you change the file name to `[filename].module.css`
Secondly, `import styles from "./[filename].module.css"` in the js file
You can access to the selectors from the js file by `styles.[selector]`

```js
return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`} // if there is hyphen in the selectors name just use bracket instead of period
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
```


