# useWriteContract

## Introduction

`useWriteContract` is a powerful hook that allows you to write to EVM-compatible smart contracts using the embedded MatchID wallet. It is designed for actions that mutate blockchain state—such as transfers, swaps, minting, and updates.

Internally, it uses Viem’s `walletClient.writeContract()` and `publicClient.waitForTransactionReceipt()` for transaction submission and confirmation handling. This hook offers built-in loading, error handling, and return values such as transaction hashes.

⚠️ The MatchID wallet is not currently EIP-1193 compatible, so you cannot use Wagmi/RainbowKit connectors directly. Instead, this hook bridges the gap using Viem’s toolkit with MatchID’s wallet integration via `useClient`.

## Example

### Creating the `useWriteContract` Hook

Here’s how you can create the `useWriteContract` hook in your Dapp:

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import useClient from './useClient'
import { useCallback, useRef, useState } from 'react'
import type { IContractProps } from '@/types/contract'

const useWriteContract = () => {
  const [error, setError] = useState<any>(null)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const hash = useRef<string | null>(null)
  const { walletClient, publicClient } = useClient()

  const writeContract = useCallback(
    async (props: IContractProps) => {
      try {
        setIsLoading(true)
        setIsError(false)

        hash.current = await walletClient?.writeContract({
          ...props,
          address: props.address as `0x${string}`,
        })

        if (!hash.current) {
          throw new Error('Transaction hash is null')
        }

        const receipt = await publicClient.waitForTransactionReceipt({
          confirmations: 2,
          hash: hash.current as `0x${string}`,
        })

        if (receipt.status === 'success') {
          console.log('Transaction success')
        }

        if (receipt.status === 'reverted') {
          throw new Error('Transaction reverted')
        }

        return hash.current
      } catch (error: any) {
        console.log('writeContract error', error?.shortMessage)
        console.log('writeContract error', error)

        setError((error?.shortMessage as string) || error)
        setIsError(true)

        throw new Error(error?.shortMessage || error)
      } finally {
        setIsLoading(false)
      }
    },
    [walletClient]
  )

  return {
    writeContract,
    isLoading,
    isError,
    error,
    hash: hash.current,
  }
}

export default useWriteContract;
```


## Conclusion

`useWriteContract` is your go-to hook for sending blockchain transactions with the MatchID embedded wallet. It simplifies transaction handling and integrates seamlessly with Viem tooling via the `useClient()` setup.

Use it alongside:

`useClient` – for initializing the MatchID wallet and clients

`useReadContract` – to read smart contract state reactively

Together, they form a complete read/write smart contract interaction toolkit for dApps powered by MatchID.