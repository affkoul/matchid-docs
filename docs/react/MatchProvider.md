---
outline: deep
---

# MatchProvider

You can pass the following parameters in your own `MatchProvider`, and we will support more features in the future.

## *appid

You can build your own App from [here](https://developer.matchid.ai).

## env

This parameter corresponds to the appid and supports passing in main (production environment) and test (test environment). The default is main.

## events

`events` supports a number of event fallback notifications, which can be viewed in the section Events

## theme

`theme` supports passing in `light` or `dark`, the default is `light`. Currently, the two theme colors are consistent, and will be distinguished later.

## locale

`locale` supports passing [Locale List Page](../match/locale), the default is `en`.

## endpoints

`endpoints` is used to configure API request URLs. Typically, you do not need to set this parameter, as the default configuration should suffice for most scenarios. 


## wallet

`wallet` is used to configure the wallet. Currently, the wallet only has `type` params.

- type: `UserPasscode` or `Base`.If you choose `Base`,we will auto generate a wallet for user without password. If you choose `UserPasscode`, users need to enter the password to generate the wallets.

```typescript
import {MatchProvider} from "@matchain/matchid-sdk-react";

const App = () => {
    return (
        <MatchProvider appid="YourAppId" wallet={{type:"UserPasscode"}} >
        {/* Your App */}
        </MatchProvider>
    );
};
```
