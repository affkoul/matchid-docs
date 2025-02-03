---
outline: deep
---

# 安装

## 快速开始

你可以使用以下命令之一，选择一种方式安装 MatchID SDK

```bash
# 使用 npm 安装
npm install @matchain/matchid-sdk-react
# 使用 yarn 安装
yarn add @matchain/matchid-sdk-react
```

## 包装提供者

您可以通过申请页面获取您的[测试环境appid](https://mid-sdk-web.vercel.app/apply)和[生产环境appid](https://mid-sdk.matchain.io/apply)，然后使用MatchProvider包装您的应用程序。

```typescript
import {MatchProvider} from "@matchain/matchid-sdk-react";

const App = () => {
  return (
     <MatchProvider appid="11111" env="main">
       {/* Your App */}
     </MatchProvider>
  );
};
```

关于provider的配置项可参考下一章配置