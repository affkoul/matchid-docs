# Get user bind list by did

## Endpoint
`/api/v1/partner/user/bind/list`

## Request Parameters

### HTTP Method
**POST**


### Body Parameters
**Content-Type: application/json**

Request example:
```json
{ "requestBody": "{\"did\":\"did:matchid:222222222\"}"}
```

| Parameter | Required | Type    | Default   | Description               |
|-----------|----------|---------|-----------|---------------------------|
| `did`     | Yes      | string  | None      | User did                  |


## Response
### Example Response
#### Success:
```json
{
  "code":0,
  "data":{
    "appid":"MID-D-11111111",
    "did":"did:matchid:222222222",
    "platformList":[
      {"platform":"EVM"},
      {"platform":"SOL"},
      {"platform":"Facebook"}
    ]
  },
  "message":"successfully"
}
```

### Response Data Parameters
| Parameter      | Type           | Description             |
|----------------|----------------|-------------------------|
| `appid`        | string         | Application ID          |
| `did`          | string         | User did                |
| `platformList` | platformItem[] | User bind platform list |

#### platformItem
| Parameter  | Type   | Description   |
|------------|--------|---------------|
| `platform` | string | Platform name |
