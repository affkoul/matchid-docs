# Modal

## Introduction

The `Modal` component provides a customizable modal dialog for displaying content. The `ModalWithHeader` component extends `Modal` by adding a header with optional back and close buttons.

## Usage

### Importing the Component

To use the `Modal` or `ModalWithHeader` component, import it into your file:

```typescript
import {Components} from '@matchain/matchid-sdk-react';
const {Modal,ModalWithHeader} = Components
```

### Example

Here is an example of how to use the `Modal` component in a React application:

```typescript
import React from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {Modal} = Components

function App() {
    return (
        <div>
            <Modal isOpen={true}>
                <div>Modal Content</div>
            </Modal>
        </div>
    );
}

export default App;
```

Here is an example of how to use the `ModalWithHeader` component in a React application:

```typescript
import React from 'react';
import {Components} from '@matchain/matchid-sdk-react';
const {ModalWithHeader} = Components

function App() {
    return (
        <div>
            <ModalWithHeader isOpen={true} title="Modal Title" onClose={() => console.log('Close button clicked')}>
                <div>Modal Content</div>
            </ModalWithHeader>
        </div>
    );
}

export default App;
```

## API

### `Modal` Props

- **`isOpen`**: Boolean indicating if the modal is open. Type: `boolean`.
- **`width`**: Optional width of the modal. Type: `number`. Default is `480`.
- **`zIndex`**: Optional z-index of the modal. Type: `number`. Default is `100`.
- **`className`**: Additional class names for the field. Type: `string`.

### `ModalWithHeader` Props

- **`isOpen`**: Boolean indicating if the modal is open. Type: `boolean`.
- **`width`**: Optional width of the modal. Type: `number`. Default is `480`.
- **`onBack`**: Optional function to call when the back button is clicked. Type: `() => void`.
- **`onClose`**: Optional function to call when the close button is clicked. Type: `() => void`.
- **`title`**: Optional title for the modal header. Type: `string`.
- **`zIndex`**: Optional z-index of the modal. Type: `number`. Default is `100`.
- **`showClose`**: Boolean indicating if the close button should be shown. Type: `boolean`. Default is `true`.
- **`showBorder`**: Boolean indicating if the header should have a bottom border. Type: `boolean`. Default is `true`.
- **`className`**: Additional class names for the field. Type: `string`.

## Conclusion

The `Modal` and `ModalWithHeader` components provide flexible and customizable modal dialogs for displaying content. Use the provided props to control their behavior and appearance as needed.