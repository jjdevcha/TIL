# Adding Dynamic style
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

## Why do we use double brace syntax for inline style?
[Click here to find out](https://stackoverflow.com/questions/47950833/react-why-is-double-brace-syntax-style-required-for-inline-styles#:~:text=It's%20just%20an%20object%20literal,re%20defining%20multiple%20style%20properties.)
