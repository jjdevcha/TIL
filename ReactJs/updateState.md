### Update State using old State
```javascript
import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [num, setNum] = React.useState(0);
    
    const numIncHandler = (event) => {
        setNum(num + 1);
    };
    
    return (
      <div>
        <p id="counter">{num}</p>
        <button onClick={numIncHandler}>Increment</button>
      </div>
    );
}

```

