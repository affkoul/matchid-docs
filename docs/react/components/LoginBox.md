# LoginBox

## Introduction

The `LoginBox` component provides a user interface for logging in using various methods such as wallet, email, Google, X, and Telegram.

## Usage

### Importing the Component

To use the `LoginBox` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {LoginBox} = Components
```

### Example

Here is an example of how to use the `LoginBox` component in a React application:

```typescript
import React from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {LoginBox} = Components
function App() {
    return (
        <div>
            <LoginBox />
        </div>
    );
}

export default App;
```

## API

### Props

- **`walletMethods`**: An optional array of wallet login methods to display. You can find the list of supported wallet methods in the [Login Methods](../../match/loginMethods) section.
- **`recommendMethods`**: An optional array of recommended login methods to display.  You can find the list of supported methods in the [Login Methods](../../match/loginMethods) section.
- **`methods`**: An optional array of login methods to display.  You can find the list of supported methods (except wallet) in the [Login Methods](../../match/loginMethods) section.
- **`inModal`**: Boolean indicating if the login box is displayed inside a modal. Type: `boolean`. Default is `false`.

### Example with All Props

```typescript
import React from 'react';
import { LoginMethodType } from '../types/types';
import {Components} from '@matchain/matchid-sdk-react';
const {LoginBox} = Components

function App() {
    const methods = [ 'telegram', 'twitter'];
    const recommendMethods = [ 'wallet', 'email','google'];

    return (
        <div>
            <LoginBox methods={methods} recommendMethods={recommendMethods} inModal={true} />
        </div>
    );
}

export default App;
```

## Conclusion

The `LoginBox` component provides a flexible and customizable interface for logging in using various methods. Use the provided props to control its behavior and appearance as needed.