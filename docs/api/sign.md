# API Signature

## Signature Parameters

| Name              | 	Description             | 	Remarks                             |
|-------------------|--------------------------|--------------------------------------|
| timestamp	        | Thirteen-digit           | timestamp                            |	1699261493465 |
| httpMethod        | 	Request Method GET/POST | 	request method must be in uppercase |
| requestPath       | 	Request Path            | 	excluding the domain name           |
| bodyString	       | Request Body | 	GET：empty <br/>POST：request body    |

## Step 1: Generate An Encrypted String

The signature string is fixed as follows: timestamp + httpMethod + requestPath + bodyString.

For the parameters in requestPath,bodyString, sort them in dictionary order and remove any empty values.

Finally, encrypt using HMAC SHA256 with the SecretKey and encode it using Base64 to obtain the sign.

### request method:POST

Example：Get user info
- timestamp：1731642490701
- httpMethod：POST
- requestPath：/api/v1/partner/user/bind/list
- bodyString：

```json
 {
    "did":"did:matchid:222222222"
 }
```

(1) Sorted bodyString

```json
 {"did":"did:matchid:222222222"}
```

(2) Signature String：

```
1731642490701POST/api/v1/partner/user/bind/list{"did":"did:matchid:222222222"}
```

## Step 2: Generate Your Signature

Use the encrypted string and secret as parameters to generate a signature as follows

```Go
import (
        "bytes"
        "crypto/hmac"
        "crypto/sha256"
        "encoding/base64"
        "encoding/json"
        "fmt"
        "io/ioutil"
        "net/http"
        "net/url"
        "sort"
        "strings"
        "testing"
        "time"
)

func APISign(timestamp string, method string, requestURL string, body string, secretKey string) (string, error) {
        content := timestamp + strings.ToUpper(method) + getPath(requestURL) + getJSONBody(body)
        signature, err := calculateHMACSHA256([]byte(content), []byte(secretKey))
        if err != nil {
                return "", err
        }
        return base64.StdEncoding.EncodeToString(signature), nil
}

func calculateHMACSHA256(message []byte, secret []byte) ([]byte, error) {
        hash := hmac.New(sha256.New, secret)
        _, err := hash.Write(message)
        if err != nil {
                return nil, err
        }
        return hash.Sum(nil), nil
}

func getPath(requestURL string) string {
        u, err := url.Parse(requestURL)
        if err != nil {
                return ""
        }
        path := u.Path
        query := u.Query()
        query.Del("")
        keys := make([]string, 0, len(query))
        for key := range query {
                keys = append(keys, key)
        }
        sort.Strings(keys)
        var encodedParams []string
        for _, key := range keys {
                encodedParams = append(encodedParams, fmt.Sprintf("%s=%s", key, query.Get(key)))
        }
        paramsString := strings.Join(encodedParams, "&")
        if paramsString != "" {
                return path + "?" + paramsString
        }
        return path
}

func getJSONBody(body string) string {
        if body == "" {
                return "" 
        }

        var data interface{}
        err := json.Unmarshal([]byte(body), &data)
        if err != nil {
                return "" 
        }

        
        if dataMap, ok := data.(map[string]interface{}); ok && len(dataMap) == 0 {
                return "" 
        }

        removeEmptyKeys(data)
        sortedData := sortObject(data)

        jsonBytes, err := json.Marshal(sortedData)
        if err != nil {
                return ""
        }
        return string(jsonBytes)
}

func removeEmptyKeys(data interface{}) {
        switch value := data.(type) {
        case map[string]interface{}:
                for key, v := range value {
                        if v == nil || v == "" {
                                delete(value, key)
                        } else {
                                removeEmptyKeys(v)
                        }
                }
        case []interface{}:
                for _, v := range value {
                        removeEmptyKeys(v)
                }
        }
}

func sortObject(data interface{}) interface{} {
        switch value := data.(type) {
        case map[string]interface{}:
                keys := make([]string, 0, len(value))
                for k := range value {
                        keys = append(keys, k)
                }
                sort.Strings(keys)

                sortedMap := make(map[string]interface{})
                for _, k := range keys {
                        v := sortObject(value[k])
                        sortedMap[k] = v
                }
                return sortedMap

        case []interface{}:
                for i, v := range value {
                        value[i] = sortObject(v)
                }
                return value
        default:
                return value
        }
}

func TestAPISign(t *testing.T) {
    timestamp := fmt.Sprintf("%d", time.Now().UnixMilli())
    method := "POST"
    requestURL := "/api/v1/partner/user/bind/list"
    reqBody := map[string]string{
       "did":   "did:matchid:222222222",
    }

    dataType, _ := json.Marshal(reqBody)
    dataString := string(dataType)

    appid := "your appid"
    secretKey := "your app secretKey"

    sign, err := APISign(timestamp, method, requestURL, dataString, secretKey)
    if err != nil {
       fmt.Println("Error:", err.Error())
       return
    }
    fmt.Println("sign", sign)
}
```