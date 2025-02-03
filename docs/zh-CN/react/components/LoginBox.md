# LoginBox

`LoginBox` 是一个登录框组件，用于用户登录，您可以将该组件嵌入到自己的页面或者弹窗中。

## 参数

### `methods`
- **类型:** `string[]`
- **描述:** 登录模态框中使用的登录方法数组。支持的值有 `wallet`, `email`, `google`, `X`, `telegram`，不传则支持所有的登录方式。

## 使用方式

```tsx
<LoginBox methods={["wallet", "email"]} />
```

## 说明

登录成功的事件可使用[onLogin](../events/onLogin)进行监听。