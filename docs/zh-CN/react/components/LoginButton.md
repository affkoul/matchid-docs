`LoginButton` 是一个可定制的按钮，用于处理用户登录和访客操作。您可以将此组件嵌入到自己的页面或弹窗中。

## 参数

### `guestRender`
- **类型:** `() => React.ReactNode`
- **描述:** 自定义访客状态的渲染函数。

### `guestText`
- **类型:** `string`
- **默认值:** `"Login"`
- **描述:** 当用户未登录时按钮上显示的文本。

### `loginRender`
- **类型:** `() => React.ReactNode`
- **描述:** 自定义登录状态的渲染函数。

### `className`
- **类型:** `string`
- **描述:** 按钮的附加 CSS 类。

### `style`
- **类型:** `CSSProperties`
- **描述:** 按钮的内联样式。

### `onLoginClick`
- **类型:** `() => void`
- **描述:** 当用户已登录时处理点击事件的回调函数。

### `onGuestClick`
- **类型:** `() => void`
- **描述:** 当用户未登录时处理点击事件的回调函数。

### `size`
- **类型:** `"default" | "small" | "large"`
- **默认值:** `"default"`
- **描述:** 按钮的大小。

### `width`
- **类型:** `number | 'auto'`
- **默认值:** `150`
- **描述:** 按钮的宽度。

### `methods`
- **类型:** `string[]`
- **描述:** 登录模态框中使用的登录方法数组。支持的值有 `wallet`, `email`, `google`, `X`, `telegram`。

## 使用方式

```tsx
<LoginButton
  guestRender={() => <CustomGuestComponent />}
  guestText="Sign In"
  loginRender={() => <CustomLoginComponent />}
  className="custom-class"
  style={{ backgroundColor: 'blue' }}
  onLoginClick={() => console.log('Logged in')}
  onGuestClick={() => console.log('Guest clicked')}
  size="large"
  width="auto"
  methods={["email", "google", "wallet"]}
/>
```

## 说明

登录成功的事件可使用[onLogin](../events/onLogin)进行监听。