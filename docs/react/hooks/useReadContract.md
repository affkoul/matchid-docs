# useReadContract

## Introduction

`useReadContract` allows developers to read smart contract data directly using the MatchID embedded wallet's `publicClient`. It abstracts away the boilerplate required for Viem integration and provides a clean, declarative way to perform on-chain reads within React components.

This hook is part of the MatchID on-chain toolkit, enabling dApps to fetch data (e.g., balances, user states, counters) from EVM-compatible smart contracts using the MatchID wallet.

The `useReadContract` hook wraps Viem’s `readContract()` utility and simplifies contract reads using the MatchID wallet context. It manages loading state, errors, and memoized inputs for consistent performance and developer ergonomics.

⚠️ This hook is read-only. For write operations like sending transactions or calling transfer, use `useWriteContract` instead.

## Example

### Creating the `useReadContract` Hook

Here’s how you can create the `useReadContract` hook in your Dapp:

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useState } from 'react'
import useClient from './useClient'
import type { IContractProps } from '@/types/contract'

const useReadContract = (props: IContractProps) => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRefetch, setIsRefetch] = useState(false)
  const { publicClient } = useClient()
  const memoizedProps = useMemo(
    () => ({
      address: props.address,
      abi: props.abi,
      functionName: props.functionName,
      args: props.args,
    }),
    [props.address, props.abi, props.functionName, props.args]
  )

  useEffect(() => {
    readContract(
      memoizedProps.address,
      memoizedProps.abi,
      memoizedProps.functionName,
      memoizedProps.args
    )
  }, [])

  useEffect(() => {
    if (isRefetch) {
      readContract(
        memoizedProps.address,
        memoizedProps.abi,
        memoizedProps.functionName,
        memoizedProps.args
      )
    }
  }, [isRefetch])

  const readContract = useCallback(
    async (address: string, abi: any, functionName: string, args: any[]) => {
      try {
        setIsLoading(true)
        setIsError(false)
        const result = await publicClient?.readContract({
          address: address as `0x${string}`,
          abi,
          functionName,
          args,
        })
        setData(result)
        return result
      } catch (error: any) {
        console.error(error)
        setError(error.message as string)
        setIsError(true)
      } finally {
        setIsLoading(false)
        setIsRefetch(false)
      }
    },
    [publicClient]
  )

  const refetch = useCallback(() => {
    setIsRefetch(true)
  }, [])

  return { refetch, isLoading, isError, error, data }
}

export default useReadContract;
```


## Conclusion

`useReadContract` is a developer-friendly hook designed to let you read from any EVM contract using the MatchID embedded wallet under the hood. It provides the essential building block for fetching on-chain data securely and reactively inside your Dapp interface.

For full read-write support, use it together with:

`useClient` – to initialize wallet and public clients

`useWriteContract` – to handle transactions