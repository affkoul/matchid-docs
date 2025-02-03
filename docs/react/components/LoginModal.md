# LoginModal

## Introduction

The `LoginModal` component provides a modal interface for logging in or signing up using various methods.

## Usage

### Importing the Component

To use the `LoginModal` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {LoginModal} = Components
```

### Example

Here is an example of how to use the `LoginModal` component in a React application:

```typescript
import React from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {LoginModal} = Components
function App() {
    return (
        <div>
            <LoginModal isOpen={true} />
        </div>
    );
}

export default App;
```

## API

### Props

[LoginPanelProps](./LoginPanel) & [ModalProps](./Modal)


### Example with All Props

```typescript
import React from 'react';
import { LoginMethodType } from '../types/types';
import {Components} from '@matchain/matchid-sdk-react';
const {LoginModal} = Components
function App() {
    const methods = [ 'telegram', 'twitter'];
    const recommendMethods = [ 'wallet', 'email','google'];

    return (
        <div>
            <LoginModal
                isOpen={true}
                width={500}
                header={<div>Custom Header</div>}
                onClose={() => console.log('Close button clicked')}
                methods={methods}
                recommendMethods={recommendMethods}
            />
        </div>
    );
}

export default App;
```

## Conclusion

The `LoginModal` component provides a flexible and customizable modal interface for logging in or signing up using various methods. Use the provided props to control its behavior and appearance as needed.