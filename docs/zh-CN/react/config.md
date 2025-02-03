---
outline: deep
---

# 配置

您可在自己的`MatchProvider`中传入以下参数，未来我们将支持更多功能，如主题色、多语言等。

其中下面带*的参数为必填项

## *appid

该参数由Matchain团队提供，用于标识您的应用。

## env

该参数与appid相对应，支持传入main（生产环境）、test（测试环境），默认值为main

## events

events支持一些事件回掉通知，具体可以查看Events一节的内容

## theme

theme支持传入`light`或者`dark`，默认值为`light`。目前两种主题色还是一致的，后续会进行区分。

## customTheme

customTheme支持传入自定义的主题色