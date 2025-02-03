# Button

## Introduction

The `Button` component is a customizable button element that supports various properties such as size, loading state, disabled state, and more.

## Usage

### Importing the Component

To use the `Button` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {Button} = Components
```

### Example

Here is an example of how to use the `Button` component in a React application:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {Button} = Components

function App() {
    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <div>
            <Button onClick={handleClick} size="lg" highlight>
                Click Me
            </Button>
        </div>
    );
}

export default App;
```

## API

### Props

- **`size`**: The size of the button. Default is `"df"`.
- **`disabled`**: Boolean indicating if the button is disabled. Default is `false`.
- **`loading`**: Boolean indicating if the button is in a loading state. Default is `false`.
- **`children`**: The content inside the button.
- **`onClick`**: Function to call when the button is clicked.
- **`highlight`**: Boolean indicating if the button should be highlighted. Default is `false`.
- **`block`**: Boolean indicating if the button should be a block element. Default is `false`.
- **`type`**: The type of the button. Default is `"button"`.
- **`rounded`**: Boolean indicating if the button should have rounded corners. Default is `true`.
- **`className`**: Additional class names for the button.
- **`style`**: Inline styles for the button.

### Example with All Props

```typescript
import React from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {Button} = Components
function App() {
    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <div>
            <Button
                size="lg"
                disabled={false}
                loading={false}
                onClick={handleClick}
                highlight={true}
                block={true}
                type="submit"
                rounded={true}
                className="custom-class"
                style={{ backgroundColor: 'blue' }}
            >
                Submit
            </Button>
        </div>
    );
}

export default App;
```

## Conclusion

The `Button` component is a versatile and customizable button element that can be used in various parts of your application. Use the provided props to adjust its appearance and behavior as needed.