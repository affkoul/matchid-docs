# Popover

## Introduction

The `Popover` component is used to display additional information or content in a customizable pop-up box. It supports various properties like position, interaction type, and styling.

## Usage

### Importing the Component

To use the `Popover` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {Popover} = Components;
```

### Example

Here is an example of how to use the `Popover` component in a React application:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {Popover} = Components;

function App() {
    return (
        <div>
            <Popover 
                content={<div>Popover Content</div>} 
                position="right" 
                type="hover" 
                gap="10px"
            >
                <button>Hover or Click Me</button>
            </Popover>
        </div>
    );
}

export default App;
```

## API

### Props

- **`children`**: The element that triggers the popover.
- **`content`**: The content displayed inside the popover.
- **`position`**: The position of the popover relative to the trigger. Default is `"right"`. Possible values: `"top"`, `"bottom"`, `"left"`, `"right"`.
- **`type`**: The interaction type to show the popover. Default is `"hover"`. Possible values: `"hover"`, `"click"`.
- **`className`**: Additional class names for the popover container.
- **`gap`**: The gap between the popover and the trigger element. Default is `"20px"`.

### Example with All Props

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {Popover} = Components;

function App() {
    return (
        <div>
            <Popover
                content={<div>Detailed Popover Information</div>}
                position="bottom"
                type="click"
                className="custom-popover"
                gap="15px"
            >
                <button>Click Me</button>
            </Popover>
        </div>
    );
}

export default App;
```

## Conclusion

The `Popover` component provides a flexible way to display additional content triggered by user interactions. Use the available props to customize its appearance and behavior to fit your application's needs.