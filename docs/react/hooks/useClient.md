# useClient

## Abstract

MatchID provides users with an embedded wallet that can be used for on-chain interactions, including reading and writing transactions, without needing an external wallet.

While the wallet is not currently EIP-1193 compatible out of the box (i.e., cannot be directly connected to RainbowKit or Wagmi as a connector), we provide developer-friendly hooks and utilities that enable full read/write interaction with smart contracts using the MatchID wallet.

## Introduction

The `useClient` hook provides convenient access to the MatchID embedded wallet, enabling both read and write interactions with smart contracts using Viem's modern tooling.

While the MatchID wallet is not currently EIP-1193 compatible (i.e., not usable directly with connectors like Wagmi or RainbowKit), this hook offers a seamless way to interact with smart contracts via Viem’s `walletClient` and `publicClient`.

- `walletClient`: Used for **write** operations (e.g., sending transactions, writing to contracts).
- `publicClient`: Used for **read** operations (e.g., reading contract state).

## Example

### Creating the `useClient` Hook

This example shows how to construct the `useClient` hook using the `useWallet` hook from MatchID SDK and `viem` utilities:

```tsx
import { useWallet } from "@matchain/matchid-sdk-react/hooks";
import { useMemo, useRef } from "react";
import { createPublicClient, createWalletClient, http, custom } from "viem";
import { useSelector } from "react-redux";
import { bscTestnet } from 'viem/chains'

const useClient = () => {
  const { createWalletClient: createMatchIDWalletClient } = useWallet();

  const walletClientRef = useRef(null);

    // Create walletClient (MatchID or EVM-compatible)
    if (!walletClientRef.current) {
        // MatchID wallet client
        try {
            walletClientRef.current = createMatchIDWalletClient({
                chain: bscTestnet,
                transport: http(bscTestnet.rpcUrls.default.http[0]),
            });
        } catch (err) {
            // fallback to EVM walletClient using window.ethereum
            walletClientRef.current = createWalletClient({
                chain,
                transport: custom(window.ethereum),
            });
        }
    }

    // Public client for read-only
    const publicClient = useMemo(() => {
        return createPublicClient({
            chain: bscTestnet,
            transport: http(bscTestnet.rpcUrls.default.http[0]),
        });
    }, [chain]);

    return { walletClient: walletClientRef.current, publicClient };
};

export default useClient;
```


## Conclusion

Use `useClient()` to get a `walletClient` and `publicClient` that let your dApp communicate with the blockchain using the user’s MatchID wallet.

These clients will be passed into other hooks such as `useReadContract` and `useWriteContract` for complete smart contract interaction.