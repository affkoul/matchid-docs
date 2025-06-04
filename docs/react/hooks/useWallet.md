# useWallet

## Introduction

The `useWallet` hook provides functionalities related to wallet management and signing operations within a decentralized application. It includes methods for initializing the wallet, generating new wallets, recovering wallets, signing messages and transactions, and checking recovery status.

## Usage

### Importing the Hook

To use the `useWallet` hook, import it into your component:

```typescript
import { useWallet } from '@matchain/matchid-sdk-react/hooks';
const { useWallet } = Hooks;
```


## API

### Methods

- **`createWalletClient(params)`**: Initializes a wallet client. For more details, please refer to the Viem Wallet Client documentation. Note that you do not need to pass the account parameter.

- **`isRecovered()`**: Checks if the wallet has been recovered.

    - **Returns**: A boolean indicating whether the wallet is recovered.

- **`signMessage(message: SignableMessage, type?: ChainType)`**: Signs a message using the specified chain type.

    - **Parameters**:
        - `message`: The message to sign.
        - `type` (optional): The chain type (e.g., "ethereum").

- **`signTransaction(transaction: TransactionSerializable, type?: ChainType)`**: Signs a transaction using the specified chain type.

    - **Parameters**:
        - `transaction`: The transaction to sign.
        - `type` (optional): The chain type (e.g., "ethereum").

- **`recoverAfter(func: (resolve: (value: any) => void, reject: (reason: string) => void) => Promise<any>)`**: Executes a function after ensuring the wallet is recovered.

    - **Parameters**:
        - `func`: A function that takes `resolve` and `reject` as parameters and returns a promise.

### Properties

- **`walletReady`**: A boolean indicating whether the wallet is ready for use.

- **`address`**: The current wallet address.

- **`evmAccount`**: An instance of the `Account` object from `viem`, representing the Ethereum account. This includes methods for signing messages and transactions.

## Example Usage

Here’s how you can use the `useWallet` hook in a React component:

```tsx
import React from 'react';
import { Hooks } from '@matchain/matchid-sdk-react';
const { useWallet } = Hooks;

function WalletManager() {
    const {
        isRecovered,
        recoveryWallet,
        signMessage,
        signTransaction,
        address,
        evmAccount,
        createWalletClient
    } = useWallet();
    

    const handleSignMessage = async () => {
        const signedMessage = await signMessage({ message: 'Hello, world!' });
        console.log('Signed message:', signedMessage);
    };

    const handleSignTransaction = async () => {
        const signedTransaction = await signTransaction({
            to: '0xRecipientAddress',
            value: '1000000000000000000', // 1 ETH
            data: '0x'
        });
        console.log('Signed transaction:', signedTransaction);
    };
    
    const sendTransaction = async () =>{
        const walletClient = createWalletClient({
            chain: chain,
            transport: http(),
        })
        const hash = walletClient.sendTransaction({
            to: '0xRecipientAddress',
            value: '1000000000000000000', // 1 ETH
            data: '0x'
        })
        console.log('Transaction hash:', hash);
    }

    return (
        <div>
            <button onClick={handleSignMessage}>Sign Message</button>
            <button onClick={handleSignTransaction}>Sign Transaction</button>
            <button onClick={sendTransaction}>Send Transaction</button>
            <p>Current Address: {address}</p>
            <p>EVM Account: {evmAccount ? evmAccount.address : 'Not initialized'}</p>
        </div>
    );
}

export default WalletManager;
```


## Conclusion

The `useWallet` hook provides a comprehensive set of methods and properties to manage wallet-related operations in your decentralized application. Use the provided methods to initialize, generate, recover wallets, and sign messages and transactions. This hook simplifies wallet management and ensures secure and reliable interactions with blockchain networks.