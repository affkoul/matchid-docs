# SOLModal

## Introduction

The `SOLModal` component provides a modal interface for wallet login or wallet binding using the Solana blockchain. It integrates with various Solana wallet adapters and supports both "login" and "bind" operations.

## Usage

### Importing the Component

To use the `SOLModal` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {SOLModal} = Components;
```

### Example

Here is an example of how to use the `SOLModal` component in a React application:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {SOLModal} = Components;

function App() {
    const handleSuccess = () => {
        console.log('Wallet operation successful');
    };

    return (
        <div>
            <SOLModal
                type="login"
                isOpen={true}
                onSuccess={handleSuccess}
                onClose={() => console.log('Modal closed')}
            />
        </div>
    );
}

export default App;
```

## API

### Props

- **`type`**: The operation type of the modal. Default is `"login"`. Possible values: `"login"`, `"bind"`, or `""`.
- **`isOpen`**: Boolean indicating if the modal is open. Type: `boolean`.
- **`title`**: Optional title for the modal header. Type: `string`. If not provided, the title defaults to localized strings ("Login with SOL" or "Bind with SOL").
- **`onClose`**: Optional function to call when the modal is closed. Type: `() => void`.
- **`onSuccess`**: Optional function to call when the wallet operation is successful. Type: `() => void`.
- **Other Props**: All other properties are passed to the `ModalWithHeader` component.

### Example with All Props

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {SOLModal} = Components;

function App() {
    const handleSuccess = () => {
        console.log('Wallet operation successful');
    };

    return (
        <div>
            <SOLModal
                type="bind"
                isOpen={true}
                title="Bind Your Wallet"
                onSuccess={handleSuccess}
                onClose={() => console.log('Modal closed')}
            />
        </div>
    );
}

export default App;
```

## Conclusion

The `SOLModal` component simplifies wallet login and binding on the Solana blockchain by providing an integrated modal interface with support for multiple wallet adapters. Use the provided props to customize its behavior and appearance based on your application's requirements.