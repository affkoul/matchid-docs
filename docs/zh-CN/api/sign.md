# API 签名

## 签名参数

| 名称              | 描述                       | 备注                             |
|-------------------|----------------------------|----------------------------------|
| timestamp	        | 十三位数字                 | 时间戳                           |	1699261493465 |
| httpMethod        | 请求方法 GET/POST          | 请求方法必须为大写               |
| requestPath       | 请求路径                   | 不包括域名                       |
| bodyString	       | 请求体                     | GET：空 <br/>POST：请求体         |

## 第一步：生成加密字符串

签名字符串固定为：timestamp + httpMethod + requestPath + bodyString。

对于 requestPath 和 bodyString 中的参数，按字典顺序排序并删除任何空值。

最后，使用 HMAC SHA256 和 SecretKey 进行加密，并使用 Base64 编码以获得签名。

### 请求方法：POST

示例：获取用户信息
- timestamp：1731642490701
- httpMethod：POST
- requestPath：/mid/api/v1/partner/user
- bodyString：

```json
 {
    "platform":"Telegram",
    "platformId":"6112374290"
 }
```

(1) 排序后的 bodyString

```json
 {"platform":"Telegram","platformId":"6112374290"}
```

(2) 签名字符串：

```
1731642490701POST/mid/api/v1/partner/user{"platform":"Telegram","platformId":"6112374290"}
```

## 第二步：生成您的签名

使用加密字符串和密钥作为参数生成签名如下

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
    requestURL := "/mid/api/v1/partner/user"
    reqBody := map[string]string{
       "platform":   "Telegram",
       "platformId": "6112374290",
    }

    dataType, _ := json.Marshal(reqBody)
    dataString := string(dataType)

    appId := "your appid"
    secretKey := "your app secretKey"

    sign, err := APISign(timestamp, method, requestURL, dataString, secretKey)
    if err != nil {
       fmt.Println("Error:", err.Error())
       return
    }
    fmt.Println("sign", sign)
}
```