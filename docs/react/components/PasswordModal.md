# PasswordModal

## Introduction

The `PasswordModal` component provides a modal interface for setting a password, typically used for wallet recovery purposes.

## Usage

### Importing the Component

To use the `PasswordModal` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {PasswordModal} = Components
```

### Example

Here is an example of how to use the `PasswordModal` component in a React application:

```typescript
import React, { useState } from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {PasswordModal} = Components

function App() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        console.log('Close button clicked');
    };

    const handleSuccess = () => {
        console.log('Password set successfully');
    };

    return (
        <div>
            <PasswordModal
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
- **`onSuccess`**: Optional function to call when the password is successfully set. Type: `() => void`.
- Other params are passed to the [ModalWithHeader](./Modal) component.

### Example with All Props

```typescript
import React, { useState } from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {PasswordModal} = Components

function App() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        console.log('Close button clicked');
    };

    const handleSuccess = () => {
        console.log('Password set successfully');
    };

    return (
        <div>
            <PasswordModal
                isOpen={isOpen}
                width={500}
                title="Set Your Password"
                onClose={handleClose}
                onSuccess={handleSuccess}
            />
        </div>
    );
}

export default App;
```

## Conclusion

The `PasswordModal` component provides a flexible and customizable modal interface for setting a password. Use the provided props to control its behavior and appearance as needed.