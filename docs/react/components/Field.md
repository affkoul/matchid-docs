# Field

## Introduction

The `Field` component is a wrapper for form fields, providing a label and optional error message.

## Usage

### Importing the Component

To use the `Field` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {Field} = Components
```

### Example

Here is an example of how to use the `Field` component in a React application:

```typescript
import React, { useState } from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {Field} = Components

function App() {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (e.target.value === '') {
            setError('This field is required');
        } else {
            setError('');
        }
    };

    return (
        <div>
            <Field label="Username" error={error}>
                <Input value={value} onChange={handleChange} />
            </Field>
        </div>
    );
}

export default App;
```

## API

### Props

- **`label`**: The label for the field. Type: `ReactNode`.
- **`children`**: The form field element(s). Type: `ReactNode`.
- **`required`**: Boolean indicating if the field is required. Default is `false`.
- **`className`**: Additional class names for the field. Type: `string`.
- **`error`**: Optional error message to display. Type: `ReactNode`.

### Example with All Props

```typescript
import React, { useState } from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {Field,Input} = Components

function App() {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (e.target.value === '') {
            setError('This field is required');
        } else {
            setError('');
        }
    };

    return (
        <div>
            <Field label="Username" error={error}>
                <Input value={value} onChange={handleChange} />
            </Field>
        </div>
    );
}

export default App;
```

## Conclusion

The `Field` component is a useful wrapper for form fields, providing a consistent layout with labels and error messages. Use the provided props to customize its behavior and appearance as needed.