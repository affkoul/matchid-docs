# LoginButton

## Introduction

The `LoginButton` component provides a flexible button interface for login-related actions, including displaying a login modal, handling login state, and showing user-specific options via a popover.

## Usage

### Importing the Component

To use the `LoginButton` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {LoginButton} = Components;
```

### Example

Here is an example of how to use the `LoginButton` component in a React application:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {LoginButton} = Components;

function App() {
    return (
        <div>
            <LoginButton />
        </div>
    );
}

export default App;
```

## API

### Props

- **`loginRender`**: Custom React node to render when the user is logged in. If provided, this overrides the default behavior. Type: `ReactNode`.
- **`methods`**: An array of login methods to display in the login modal. Type: `OtherLoginMethodType[]`.
- **`recommendMethods`**: An array of recommended login methods to display prominently in the login modal. Type: `RecommendLoginMethodType[]`.
- **`walletMethods`**: An array of wallet types to support in the login modal. Type: `WalletType[]`.
- **`onLoginClick`**: A function to call when the login button is clicked. Type: `() => void`.
- **`popoverPosition`**: The position of the user options popover relative to the button. Default is `"right"`. Type: `PopoverPositionType`.
- **`popoverType`**: The interaction type to show the popover (e.g., hover or click). Default is `"hover"`. Type: `PopoverTypeType`.
- **`popoverGap`**: The gap between the popover and the button. Default is `20`. Type: `number | string`.
- Other props are passed to the underlying `Button` component.

### Example with All Props

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {LoginButton} = Components;

function App() {
    const handleLoginClick = () => {
        console.log('Login button clicked');
    };

    return (
        <div>
            <LoginButton
                methods={['telegram', 'twitter']}
                recommendMethods={['wallet', 'email', 'google']}
                walletMethods={['evm', 'sol']}
                popoverPosition="bottom"
                popoverType="click"
                popoverGap={10}
                onLoginClick={handleLoginClick}
            />
        </div>
    );
}

export default App;
```

## Conclusion

The `LoginButton` component provides a versatile and customizable interface for handling login workflows. It seamlessly integrates login modals and user popovers, supporting multiple login methods and wallet integrations. Use the provided props to adjust its behavior and appearance based on your application's requirements.