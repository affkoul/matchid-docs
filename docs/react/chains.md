# Chains

## usage

Your can import the Matchain and Matchain Testnet from MatchID React SDK. And you can also import the other chains from viem.

The chain can be used in the `useWallet` hook.

```jsx
import {
    mainnet,
    arbitrum,
    arbitrumGoerli,
    base,
    baseSepolia,
    baseGoerli,
    bsc,
    bscTestnet,
    ...otherChains
} from 'viem/chains';
import {MatchMain, MatchTest} from "@matchain/matchid-sdk-react/chains";
```

