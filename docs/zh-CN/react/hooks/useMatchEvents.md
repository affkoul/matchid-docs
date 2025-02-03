# useMatchEvents

`useMatchEvents` 支持和config中的events传入一样的回调函数，方便在任意位置监听事件。

## 示例代码

```jsx
import { useMatchEvents } from '@matchain/matchid-sdk-react';
...
useMatchEvents({
    onLogin(data){
        console.log('login', data);
    },
    onLogout(){
        console.log('logout');
    }
})
```