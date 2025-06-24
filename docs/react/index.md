---
outline: deep
---

# Installation

## Major Dependencies Targets

Must add the following to your package.json before installing the SDK.

```js
  "resolutions": {
    "@rainbow-me/rainbowkit": "2.2.7",
    "viem": "^2.29.0",
    "wagmi": "^2.15.2"
  },
```

## QuickStart

Install the MatchID React SDK with one of the following commands:

```bash
# use npm install
npm install @matchain/matchid-sdk-react
# use yarn install
yarn add @matchain/matchid-sdk-react
```

## Provider

You can visit [MatchID Developer](https://developer.matchid.ai) to build you application and then package your application using MatchProvider.

```tsx
import {MatchProvider} from "@matchain/matchid-sdk-react";

const App = () => {
  return (
     <MatchProvider appid="YourAppId" wallet={{type:"UserPasscode"}} >
       {/* Your App */}
     </MatchProvider>
  );
};
```

You can refer to the next chapter for the configuration items of the provider.

Or you may use the following code to import the WagmiProvider.

```tsx
import {MatchProvider,wagmiConfig} from "@matchain/matchid-sdk-react";

const App = () => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <MatchProvider appid="YourAppId" wallet={{type:"UserPasscode"}} >
        {/* Your App */}
        </MatchProvider>
    </WagmiProvider>
  );
};
```

## CSS

You can use the following code to import css. And you can also use your own css to customize the style.

```typescript
import "@matchain/matchid-sdk-react/index.css"
```

