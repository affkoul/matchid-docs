# 快速开始

## AppId和AppSecret

在使用MatchID SDK之前，您需要先申请AppId和AppSecret

- [测试环境](https://mid-sdk-web.vercel.app/apply)

- [生产环境](https://mid-sdk.matchain.io/apply)

## 接入MatchID

MatchID提供2种接入方式

## 1.应用中接入SDK

目前MatchID仅提供[React SDK](../react/overview.md)，未来我们将提供更多的SDK支持

## 2.跳转MatchID注册

您可组装携带APPID的跳转链接，引导用户跳转到MatchID注册页面，MatchID将会引导用户完成注册流程

如：`https://mid.matchain.io?appid=11111`

通过上面链接注册的用户，将被认为是您的用户，您可以在后续别的对接方式中获取到用户的信息