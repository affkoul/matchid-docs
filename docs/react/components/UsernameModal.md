# UsernameModal

## Introduction

The `UsernameModal` component provides a modal interface for setting a username, typically used for user profile setup.

## Usage

### Importing the Component

To use the `UsernameModal` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {UsernameModal} = Components
```

### Example

Here is an example of how to use the `UsernameModal` component in a React application:

```typescript
import React, { useState } from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {UsernameModal} = Components

function App() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        console.log('Close button clicked');
    };

    const handleSuccess = () => {
        console.log('Username set successfully');
    };

    return (
        <div>
            <UsernameModal
                isOpen={isOpen}
                onClose={handleClose}
                onSuccess={handleSuccess}
            />
        </div>
    );
}

export default App;
```

## API

### Props

- **`isOpen`**: Boolean indicating if the modal is open. Type: `boolean`.
- **`width`**: Optional width of the modal. Type: `number`. Default is `480`.
- **`title`**: Optional title for the modal header. Type: `string`.
- **`onClose`**: Optional function to call when the close button is clicked. Type: `() => void`.
- **`onSuccess`**: Optional function to call when the username is successfully set. Type: `() => void`.
- Other params are passed to the [ModalWithHeader](./Modal) component.

### Example with All Props

```typescript
import React, { useState } from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {UsernameModal} = Components

function App() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        console.log('Close button clicked');
    };

    const handleSuccess = () => {
        console.log('Username set successfully');
    };

    return (
        <div>
            <UsernameModal
                isOpen={isOpen}
                width={500}
                title="Set Your Username"
                onClose={handleClose}
                onSuccess={handleSuccess}
            />
        </div>
    );
}

export default App;
```

## Conclusion

The `UsernameModal` component provides a flexible and customizable modal interface for setting a username. Use the provided props to control its behavior and appearance as needed.