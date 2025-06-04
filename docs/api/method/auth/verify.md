# Get User auth info

You can get all parameters from `getAuthInfo` method in [`useUserInfo`](/react/hooks/useUserInfo)

## Endpoint
`/api/v1/partner/auth/verify`

## Request Parameters

### HTTP Method
**POST**


### Body Parameters
**Content-Type: application/json**

Request example:
```json
{ "requestBody": "{\"auth_key\":\"123123123123\",\"platform\":\"telegram\"}"}
```

| Parameter  | Required | Type   | Default | Description                                                                                                                              |
|------------|----------|--------|---------|------------------------------------------------------------------------------------------------------------------------------------------|
| `auth_key` | Yes      | string | None    | You can get this parameter from `getAuthInfo` method in [`useUserInfo`](/react/hooks/useUserInfo)                                        |
| `platform` | Yes      | string | None    | You can get this parameter from `getAuthInfo` method in [`useUserInfo`](/react/hooks/useUserInfo)                                        |
| `address`  | No       | string | None    | If the platform is one of wallet types,you can get this parameter from `getAuthInfo` method in [`useUserInfo`](/react/hooks/useUserInfo) |


## Response
### Example Response
#### Success:
```json
{
  "code":0,
  "data":{
    "matchId":"123123",
    "platform":"Telegram",
    "platformId": "1111111",
    "platformName": "Telegram",
    "firstName": "Match",
    "lastName": "ID",
    "nickname": "MatchIDdemo",
    "avatarUrl": "https://a.com/1.jpg"
  },
  "message":"successfully"
}
```

### Response Data Parameters
| Parameter      | Required | Type   | Description                                                                          |
|----------------|----------|--------|--------------------------------------------------------------------------------------|
| `matchId`      | Yes      | string | User's id int MatchID                                                                |
| `platform`     | Yes      | string | Platform name(e.g., "evm", "google", "twitter", "telegram").                         |
| `platformId`   | Yes      | string | The id of the user on the corresponding platform(e.g., telegram id, wallet address). |
| `platformName` | Yes      | string | Platform name(e.g., "evm", "google", "twitter", "telegram").                         |
| `firstName`    | No       | string | The first name of the user on the corresponding platform(e.g., telegram first name). |
| `lastName`     | No       | string | The last name of the user on the corresponding platform(e.g., telegram last name).   |
| `nickname`     | No       | string | The nickname of the user on the corresponding platform(e.g., telegram username).     |
| `avatarUrl`    | No       | string | The avatar url of the user on the corresponding platform(e.g., telegram avatar url). |


