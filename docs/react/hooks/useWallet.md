# useWallet

## Introduction

The `useWallet` hook provides functionalities related to wallet management and signing operations within a decentralized application. It includes methods for initializing the wallet, generating new wallets, recovering wallets, signing messages and transactions, and checking recovery status.

## Usage

### Importing the Hook

To use the `useWallet` hook, import it into your component:

```typescript
import { Hooks } from '@matchain/matchid-sdk-react';
const { useWallet } = Hooks;
```


## API

### Methods

- **`initWallet(params: { address: string, did: string })`**: Initializes the wallet with the provided address and DID.This method will be called automatically when the user logs in.

    - **Parameters**:
        - `address`: The wallet address.
        - `did`: The user's Decentralized ID (DID).

- **`generateWallet(params: { did: string, userPasscode: string })`**: Generates a new wallet using the specified DID and user passcode.This method will be called automatically when the user first logs in.

    - **Parameters**:
        - `did`: The user's Decentralized ID (DID).
        - `userPasscode`: The user-defined passcode for wallet recovery.

- **`isRecovered()`**: Checks if the wallet has been recovered.

    - **Returns**: A boolean indicating whether the wallet is recovered.

- **`recoveryWallet(chainType: ChainType | undefined, recoveryType: RecoveryType, userPasscode?: string)`**: Recovers the wallet using the specified chain type, recovery type, and optional user passcode.This method will be called automatically when the user changes their device.

    - **Parameters**:
        - `chainType`: The type of blockchain (e.g., "ethereum").
        - `recoveryType`: The method of recovery (e.g., "user_passcode_recovery_key").
        - `userPasscode` (optional): The user-defined passcode for recovery.

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

- **`address`**: The current wallet address.

- **`evmAccount`**: An instance of the `Account` object from `viem`, representing the Ethereum account. This includes methods for signing messages and transactions.

## Example Usage

Here’s how you can use the `useWallet` hook in a React component:

```typescript
import React from 'react';
import { Hooks } from '@matchain/matchid-sdk-react';
const { useUserInfo } = Hooks;

function WalletManager() {
    const {
        initWallet,
        generateWallet,
        isRecovered,
        recoveryWallet,
        signMessage,
        signTransaction,
        address,
        evmAccount,
    } = useWallet();

    const handleInitWallet = async () => {
        await initWallet({
            address: '0xYourAddress',
            did: 'your-did'
        });
    };

    const handleGenerateWallet = async () => {
        const newAddress = await generateWallet({
            did: 'your-did',
            userPasscode: 'your-passcode'
        });
        console.log('New wallet address:', newAddress);
    };

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

    return (
        <div>
            <button onClick={handleInitWallet}>Initialize Wallet</button>
            <button onClick={handleGenerateWallet}>Generate Wallet</button>
            <button onClick={handleSignMessage}>Sign Message</button>
            <button onClick={handleSignTransaction}>Sign Transaction</button>
            <p>Current Address: {address}</p>
            <p>EVM Account: {evmAccount ? evmAccount.address : 'Not initialized'}</p>
        </div>
    );
}

export default WalletManager;
```


## Conclusion

The `useWallet` hook provides a comprehensive set of methods and properties to manage wallet-related operations in your decentralized application. Use the provided methods to initialize, generate, recover wallets, and sign messages and transactions. This hook simplifies wallet management and ensures secure and reliable interactions with blockchain networks.