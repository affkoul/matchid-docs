# useEvmAAWallet

`useEvmAAWallet` 支持获取用户的evm系的aa钱包。

## 字段

### wallet

用户的evm系AA钱包

### address

用户的evm系AA钱包地址

### connector

钱包的connector

### networkId

钱包的网络ID

### network

当前连接的网络信息

## 方法

### switchNetwork

```
(networkId:string|number)=>Promise<void>
```

参数：

- networkId=网络ID

切换网络

### toExplorerAddress

```
(address:string)=>string
```

参数：

- address=地址

获取指定地址的区块链浏览器地址

### toExplorerTx

```
(tx:string)=>string
```

参数：

- tx=交易哈希

获取指定交易哈希的区块链浏览器地址

### readContract

```
(params:{
  address:string
  abi:any,
  functionName:string,
  args?:any[]
})=>Promise<any>
```

参数：

- address=合约地址
- abi=合约ABI
- functionName=合约方法名
- args=合约方法参数

调用合约的只读方法

### writeContract

```
(params:{
  to:string
  abi:any,
  functionName:string,
  args?:any[],
  to:string,
  value:BigInt,
  ...
})=>Promise<`0x${string}`>
```

参数：

- to=合约地址
- abi=合约ABI
- functionName=合约方法名
- args=合约方法参数
- to=合约地址
- value=转账金额
- ...=其他参数可参考[Viem SendTransaction](https://viem.sh/docs/actions/wallet/sendTransaction).

基于SendTransaction封装的合约写方法


### getGasPrice

```
()=>Promise<BigInt>
```

获取当前网络的gasPrice

### sendTransaction

```
(params:{
  to:string,
  value:BigInt,
  ...
})=>Promise<`0x${string}`>
```

参数：

- to=接收地址
- value=转账金额
- ...=其他参数可参考[Viem SendTransaction](https://viem.sh/docs/actions/wallet/sendTransaction).

### waitForUserOperationReceipt

```
(params:{
  hash:`0x${string}`,
  timeout?:number
})=>Promise<TransactionReceipt>
```

参数：

- hash=userOp哈希
- timeout=超时时间

参考[waitForUserOperationReceipt](https://viem.sh/docs/actions/public/waitForTransactionReceipt)


### getNetwork

```
(networkId?:number|string)=>Promise<Network>
```

参数：

- networkId=网络ID

获取网络信息，由于network值在某些情况下可能会不及时更新，因此增加此方法支持 