# Validating Data Received via the MatchID

This document provides instructions to validate the data received via the MatchID. Below is the required data structure and the steps to ensure its integrity.

## Data Format

The User data is provided in the following JSON format:

```json
{
    "did": "did:matchid:123123",
    "appid": "MID-Test",
    "address": "0x00000...",
    "auth_date": 1737018000,
    "hash": "b8f........"
}
```

### Field Descriptions

- `did`: The Decentralized Identifier associated with the user.
- `appid`: The application identifier for the MatchID.
- `address`: The blockchain address of the user.
- `auth_date`: The authentication timestamp (UNIX time).
- `hash`: The computed hash for data validation.

## Validation Steps

To validate the received data, follow these steps:

### 1. Create a Data Check String

Construct a string by concatenating all key-value pairs (except for the `hash` and add secret) in alphabetical order of the keys. Each pair should be formatted as `key=value` and joined with a newline character (`\n`).

#### Example

For the provided data, the string should be constructed as:

```
address=0x00000...
appid=MID-Test
auth_date=1737018000
did=did:matchid:123123
secret=xxxxq112
```

### 2. Compute the Hash

Hash the constructed string using the HMAC-SHA256 algorithm. Use your MatchID's secret key as the HMAC key.

#### Code Example

```typescript
import hmacSHA256 from 'crypto-js/hmac-sha256';
import sha256 from 'crypto-js/sha256';

const secretKey = "xxxxq112";
const data = `address=0x00000...\nappid=MID-Test\nauth_date=1737018000\ndid=did:matchid:123123\nsecret=${secretKey}`;
const secretHash = sha256(secretKey);
const hash = hmacSHA256(data, secretHash);
```

### 3. Compare the Hash

Compare the computed hash with the `hash` field received in the JSON data. If they match, the data is valid.

#### Code Example

```typescript
if (hash === receivedHash) {
    console.log("Data is valid");
} else {
    console.log("Data is invalid");
}
```

## Security Notes

- **Secure Key Storage**: Keep your secret key secure. Avoid hardcoding it directly into your source code.
- **Time Validation**: Check the `auth_date` to ensure the data is recent and hasn’t been replayed.

### Time Validation Example

```typescript
const currentTime = Math.floor(Date.now() / 1000);
const timeThreshold = 300; // 5 minutes

if (Math.abs(currentTime - authDate) > timeThreshold) {
    console.log("Authentication data is outdated");
} else {
    console.log("Authentication data is recent");
}
```

## Conclusion

Following these steps will help ensure the data integrity and authenticity of requests received from the MatchID.

