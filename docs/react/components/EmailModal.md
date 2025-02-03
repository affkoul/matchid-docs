# EmailModal

## Introduction

The `EmailModal` component is a modal dialog used for email input and verification steps. It includes two steps: entering the email and verifying it.

## Usage

### Importing the Component

To use the `EmailModal` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {EmailModal} = Components
```

### Example

Here is an example of how to use the `EmailModal` component in a React application:

```typescript
import React, { useState } from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {EmailModal} = Components

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogin = (email: string) => {
        console.log('Logged in with email:', email);
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Open Email Modal</button>
            <EmailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onBack={() => console.log('Back button clicked')}
                onLogin={handleLogin}
            />
        </div>
    );
}

export default App;
```

## API

### Props

- **`isOpen`**: Boolean indicating if the modal is open. Default is `false`.
- **`width`**: The width of the modal. Default is `480`.
- **`onClose`**: Function to call when the modal is closed.
- **`onBack`**: Function to call when the back button is clicked.
- **`onLogin`**: Function to call when the login is successful.

### Example with All Props

```typescript
import React, { useState } from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {EmailModal} = Components
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogin = (email: string) => {
        console.log('Logged in with email:', email);
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Open Email Modal</button>
            <EmailModal
                isOpen={isModalOpen}
                width={480}
                onClose={() => setIsModalOpen(false)}
                onBack={() => console.log('Back button clicked')}
                onLogin={handleLogin}
            />
        </div>
    );
}

export default App;
```

## Conclusion

The `EmailModal` component provides a modal dialog for email input and verification steps. Use the provided props to control its behavior and handle user interactions as needed.