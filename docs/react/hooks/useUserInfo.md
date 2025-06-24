# useUserInfo

## Introduction

The `useUserInfo` hook provides various functionalities related to user information and authentication methods. It includes methods for logging in with different providers, logging out, refreshing user information, and binding additional accounts like wallets and Telegram.

## Usage

### Importing the Hook

To use the `useUserInfo` hook, import it into your component:

```typescript
import { Hooks } from '@matchain/matchid-sdk-react';
const { useUserInfo } = Hooks;
```

## API

### Methods

- **`loginByEmail(params: { email: string, code: string })`**: Logs in using an email and verification code.

    - **Parameters**:
        - `email`: The user's email address.
        - `code`: The verification code sent to the email.

- **`getLoginEmailCode(email: string)`**: Requests a login code to be sent to the provided email.

    - **Parameters**:
        - `email`: The email address to receive the login code.

- **`logout()`**: Logs out the current user and triggers any registered logout events.

- **`refreshOverview()`**: Refreshes the user's overview information from the server.

- **`auth()`**: Retrieves the user's authentication information.You can get an object and use it to validate the user's information. [Validate Type](../../match/validate)

- **`login(method: LoginMethodType)`**: Logs in using the specified method.

    - **Parameters**:
        - `method`: The login method (e.g., "evm", "google", "twitter", "telegram").

- **`bind(method: LoginMethodType)`**: Binds an additional account to the user's profile based on the specified method.

    - **Parameters**:
        - `method`: The account type to bind (e.g., "evm", "google", "telegram").
      
- **`bindCex(type: CEXType)`**: Binds a cex API.

    - **Parameters**:
        - `type`: The account type to bind (e.g., "Gate", "Coinbase", "Kucoin").You can find all CEX Type in [here](/match/cexType)
- 
- **`getAuthInfo(method: LoginMethodType)`**: Get the user's authentication information.If users have approved the authentication information, the DApp can get the user's information.

    - **Parameters**:
        - `method`: The login method (e.g., "evm", "google", "twitter", "telegram").

### Properties

- **`token`**: The current authentication token.

- **`mid`**: The user's Match ID.

- **`did`**: The user's Decentralized ID (DID).

- **`address`**: The user's wallet address.

- **`isLogin`**: A boolean indicating whether the user is logged in.

- **`username`**: The user's username.

- **`overview`**: The user's overview information.

## Example Usage

Here’s how you can use the `useUserInfo` hook in a React component:

<span id="getauthinfo-example"></span>

```typescript {18-21}
import React from 'react';
import { Hooks } from '@matchain/matchid-sdk-react';
const { useUserInfo } = Hooks;

function UserProfile() {
    const {
        login,
        logout,
        isLogin,
        username,
        getLoginEmailCode,
        refreshOverview,
        getAuthInfo
    } = useUserInfo();

    const handleLogin = async (method: string) => {
        await login(method);
        const authInfo = await getAuthInfo(method);
        console.log('✅ Auth Info:', authInfo);
        console.log('📦 did:', authInfo?.did);
        console.log('🔑 auth_key:', authInfo?.auth_key);
        console.log('Logged in with method:', method);
    };

    const handleLogout = () => {
        logout();
        console.log('User logged out');
    };

    return (
        <div>
            {isLogin ? (
                <>
                    <p>Welcome, {username}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <button onClick={() => handleLogin('google')}>Login with Google</button>
                    <button onClick={() => handleLogin('twitter')}>Login with Twitter</button>
                    <button onClick={() => handleLogin('wallet')}>Login with Wallet</button>
                    <button onClick={() => handleLogin('telegram')}>Login with Telegram</button>
                    <button onClick={() => getLoginEmailCode('user@example.com')}>Get Email Code</button>
                </>
            )}
            <button onClick={refreshOverview}>Refresh Overview</button>
        </div>
    );
}

export default UserProfile;
```

## Conclusion

The `useUserInfo` hook provides a robust set of methods and properties to manage user authentication and information in your decentralized application. Use the provided methods to log in, log out, refresh user information, and bind additional accounts. This hook simplifies user management and ensures seamless integration with various authentication methods.

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const hash = decodeURIComponent(window.location.hash);
  if (hash !== '#getauthinfo-example') return;

  const target = document.querySelector('#getauthinfo-example + pre code .line:nth-child(3)');
  if (target) {
    const parent = target.parentElement;
    parent.classList.add('code-flash', 'animate');

    setTimeout(() => {
      parent.classList.remove('animate');
    }, 1000);

    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
</script>

