---
outline: deep
---

# Installation

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

```typescript
import {MatchProvider} from "@matchain/matchid-sdk-react";

const App = () => {
  return (
     <MatchProvider appid="YourAppId">
       {/* Your App */}
     </MatchProvider>
  );
};
```

You can refer to the next chapter for the configuration items of the provider.

## CSS

You can use the following code to import css. And you can also use your own css to customize the style.

```typescript
import "@matchain/matchid-sdk-react/index.css"
```

