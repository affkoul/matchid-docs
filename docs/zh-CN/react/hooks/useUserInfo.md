# `useUserInfo`

## 概述

`useUserInfo` 钩子提供了与用户信息和身份验证相关的各种功能，包括登录、注销和模态管理。

## 函数

### `loginByTelegram`
- **描述:** 使用 Telegram 启动登录过程。

### `loginByTwitter`
- **描述:** 使用 Twitter 启动登录过程。

### `loginByGoogle`
- **描述:** 使用 Google 启动登录过程。

### `loginByWallet`
- **描述:** 使用钱包启动登录过程。

### `loginByEmail`
- **描述:** 使用电子邮件启动登录过程。
- **参数:**
    - `email`: `string` - 用户的电子邮件地址。
    - `code`: `string` - 发送到用户电子邮件的验证码。
- **返回:** `Promise<boolean>` - 如果登录成功，解析为 `true`，否则抛出错误。

### `openEmailModal`
- **描述:** 打开电子邮件登录模态。
- **参数:**
    - `showBack`: `boolean` (可选) - 是否显示返回按钮。
    - `showClose`: `boolean` (可选) - 是否显示关闭按钮。
    - `zIndex`: `number` (可选) - 模态的 z-index。

### `closeEmailModal`
- **描述:** 关闭电子邮件登录模态。

### `openLoginModal`
- **描述:** 打开登录模态。
- **参数:**
    - `showClose`: `boolean` (可选) - 是否显示关闭按钮。
    - `zIndex`: `number` (可选) - 模态的 z-index。
    - `methods`: `LoginMethodType[]` (可选) - 登录模态中使用的登录方法数组。

### `closeLoginModal`
- **描述:** 关闭登录模态。

### `openUserModal`
- **描述:** 打开用户模态。

### `closeUserModal`
- **描述:** 关闭用户模态。

### `logout`
- **描述:** 注销用户并执行必要的清理。

### `getLoginEmailCode`
- **描述:** 请求将登录代码发送到用户的电子邮件。
- **参数:**
    - `email`: `string` - 用户的电子邮件地址。
- **返回:** `Promise<string>` - 如果成功，解析为验证码。

### `refreshOverview`
- **描述:** 刷新用户的概览信息。

### `bindWallet`
- **描述:** 将钱包绑定到用户的账户。

### `bindTelegram`
- **描述:** 将 Telegram 绑定到用户的账户。

## 属性

### `token`
- **类型:** `string | undefined`
- **描述:** 用户的身份验证令牌。

### `mid`
- **类型:** `string | undefined`
- **描述:** 用户的 Match ID。

### `uuid`
- **类型:** `string | undefined`
- **描述:** 用户的 UUID。

### `isLogin`
- **类型:** `boolean`
- **描述:** 指示用户是否已登录。

### `overview`
- **类型:** `any`
- **描述:** 用户的概览信息。

## 用法

```typescript
import useUserInfo from 'path/to/hooks/useUserInfo';

const {
  loginByTelegram,
  loginByTwitter,
  loginByGoogle,
  loginByWallet,
  loginByEmail,
  openEmailModal,
  closeEmailModal,
  openLoginModal,
  closeLoginModal,
  openUserModal,
  closeUserModal,
  logout,
  getLoginEmailCode,
  refreshOverview,
  bindWallet,
  bindTelegram,
  token,
  mid,
  uuid,
  isLogin,
  overview
} = useUserInfo();
```

## 注意事项

- `useUserInfo` 钩子依赖于各种 API 和上下文提供者来管理用户信息和身份验证。
- 确保在应用程序中正确配置了必要的上下文提供者和 API 端点。