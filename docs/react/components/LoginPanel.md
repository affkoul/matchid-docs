# LoginPanel

## Introduction

The `LoginPanel` component provides a user interface for logging in or signing up using various methods.

## Usage

### Importing the Component

To use the `LoginPanel` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {LoginPanel} = Components
```

### Example

Here is an example of how to use the `LoginPanel` component in a React application:

```typescript
import React from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {LoginPanel} = Components
function App() {
    return (
        <div>
            <LoginPanel />
        </div>
    );
}

export default App;
```

## API

### Props

- **`header`**: Optional custom header content. Type: `React.ReactNode`.
- **`onClose`**: Optional function to call when the close button is clicked. Type: `() => void`.
- **`walletMethods`**: An optional array of wallet login methods to display. You can find the list of supported wallet methods in the [Login Methods](../../match/loginMethods) section.
- **`recommendMethods`**: An optional array of recommended login methods to display.  You can find the list of supported methods in the [Login Methods](../../match/loginMethods) section.
- **`methods`**: An optional array of login methods to display.  You can find the list of supported methods (except wallet) in the [Login Methods](../../match/loginMethods) section.
- **`inModal`**: Boolean indicating if the login box is displayed inside a modal. Type: `boolean`. Default is `false`.


### Example with All Props

```typescript
import React from 'react';
import { LoginMethodType } from '../types/types';
import { CloseRoundIcon } from 'assets/icon';
import {Components} from '@matchain/matchid-sdk-react';
const {LoginPanel} = Components

function App() {
    const methods = [ 'telegram', 'twitter'];
    const recommendMethods = [ 'wallet', 'email','google'];

    return (
        <div>
            <LoginPanel
                header={<div>Custom Header</div>}
                onClose={() => console.log('Close button clicked')}
                methods={methods}
                recommendMethods={recommendMethods}
                inModal={true}
            />
        </div>
    );
}

export default App;
```

## Conclusion

The `LoginPanel` component provides a flexible and customizable interface for logging in or signing up using various methods. Use the provided props to control its behavior and appearance as needed.