# Input

## Introduction

The `Input` component is a customizable input field that supports various properties such as type, value, and additional elements like icons.

## Usage

### Importing the Component

To use the `Input` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {Input} = Components
```

### Example

Here is an example of how to use the `Input` component in a React application:

```typescript
import React, { useState } from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {Input} = Components

function App() {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <Input type="text" value={value} onChange={handleChange} />
        </div>
    );
}

export default App;
```

## API

### Props

- **`placeholder`**: The placeholder text for the input field. Type: `string`.
- **`value`**: The value of the input field. Type: `string`.
- **`onChange`**: Function to call when the input value changes. Type: `(e?: any) => void`.
- **`disabled`**: Boolean indicating if the input field is disabled. Type: `boolean`. Default is `false`.
- **`readonly`**: Boolean indicating if the input field is read-only. Type: `boolean`. Default is `false`.
- **`type`**: The type of the input field. Type: `string`. Default is `"text"`.
- **`maxLength`**: The maximum length of the input field. Type: `number`.
- **`after`**: Additional element to display after the input field. Type: `ReactNode`.
- **`className`**: Additional class names for the field. Type: `string`.

### Example with All Props

```typescript
import React, { useState } from 'react';
import { DeleteRoundIcon, CloseEyeIcon, OpenEyeIcon } from 'assets/icon';
import {Components} from '@matchain/matchid-sdk-react';
const {Input} = Components

function App() {
    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState('password');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <Input
                type={inputType}
                value={value}
                onChange={handleChange}
                after={
                    <div onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}>
                        {inputType === 'password' ? <CloseEyeIcon /> : <OpenEyeIcon />}
                    </div>
                }
            />
        </div>
    );
}

export default App;
```

## Conclusion

The `Input` component is a versatile and customizable input field that can be used in various parts of your application. Use the provided props to adjust its appearance and behavior as needed.