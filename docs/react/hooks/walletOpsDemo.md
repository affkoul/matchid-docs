# walletOpsDemo

## Real World Example: USDT Transfer Dapp

This example demonstrates how to combine the `useClient`, `useReadContract`, and `useWriteContract` hooks we built earlier to interact with a smart contract in a live dApp. The use case is a USDT transfer Dapp, where a user can:

- Read their current USDT token balance
- Transfer USDT to another address

### 📦 Code Example

`tokenAddresses.js`
```js
export const TOKEN_ADDRESSES = {
    USDT: {
        698: "0xB6dc6C8b71e88642cEAD3be1025565A9eE74d1C6",
        56:  "0x55d398326f99059fF775485246999027B3197955",
        1:   "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        137: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    }
};
```

<a href="/react/hooks/useClient.html" style="color: #3451b2; text-decoration: underline;">`useClient`</a>

`USDTTransferBox.jsx`

```tsx
import React, { useState, useEffect } from "react";
import {
  parseUnits,
  parseEther,
  formatEther,
  erc20Abi,
  formatUnits,
  encodeFunctionData,
} from "viem";
import { toast } from "react-toastify";
import { useSendTransaction } from "wagmi";
import { useSelector } from "react-redux";
import { TOKEN_ADDRESSES } from "../config/tokenAddresses";
import useClient from "../hooks/useClient";

const USDTTransferBox = ({ walletAddress, source }) => {
  const [recipient, setRecipient] = useState("");
  const [isAwaitingConfirmation, setIsAwaitingConfirmation] = useState(false);
  const [amount, setAmount] = useState("");
  const [usdtBalance, setUsdtBalance] = useState(null);
  const { walletClient, publicClient } = useClient();
  const { sendTransactionAsync, isPending } = useSendTransaction();
  const isMatchID = source === "matchid";
  const chainId = useSelector((state) => state.chain.chainId); // ⬅️ Dynamic
  const USDT_ADDRESS = TOKEN_ADDRESSES.USDT[chainId];

  const fetchBalance = async () => {
    try {
      // Leverage readContract from useClient hook
      const decimals = await publicClient.readContract({
        address: USDT_ADDRESS,
        abi: erc20Abi,
        functionName: "decimals",
      });

      // Leverage readContract from useClient hook
      const balance = await publicClient.readContract({
        address: USDT_ADDRESS,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [walletAddress],
      });
      setUsdtBalance(formatUnits(balance, decimals));
    } catch (err) {
      console.error("Failed to fetch balance:", err);
    }
  };

  useEffect(() => {
    if (!walletAddress || !publicClient || !USDT_ADDRESS) return;

    const fetchBalance = async () => {
      try {
        // Leverage readContract from useClient hook
        const decimals = await publicClient.readContract({
          address: USDT_ADDRESS,
          abi: erc20Abi,
          functionName: "decimals",
        });
        
        // Leverage readContract from useClient hook
        const balance = await publicClient.readContract({
          address: USDT_ADDRESS,
          abi: erc20Abi,
          functionName: "balanceOf",
          args: [walletAddress],
        });
        // console.log("Raw USDT balance (BigInt):", balance.toString());
        setUsdtBalance(formatUnits(balance, decimals));
      } catch (err) {
        console.error("Failed to fetch balance:", err);
      }
    };

    fetchBalance();
  }, [walletAddress, publicClient, USDT_ADDRESS, chainId]);

  const handleSend = async () => {
    if (!recipient || !amount) {
      toast.warn("Please enter both recipient and amount.");
      return;
    }

    try {
      const value = parseUnits(amount, 6); // USDT has 6 decimals

      setIsAwaitingConfirmation(true);
      toast.info("Please confirm the transaction in your wallet...", {
        position: "bottom-left", // or "top-left", your call
      });

      if (isMatchID) {
        // Leverage writeContract from useClient hook
        const hash = await walletClient.writeContract({
          address: USDT_ADDRESS,
          abi: erc20Abi,
          functionName: "transfer",
          args: [recipient, value],
        });
        await publicClient.waitForTransactionReceipt({
          hash,
          confirmations: 2, // optional, gives more certainty
        });
      } else {
        // ✅ External wallet: prepare calldata manually and send via wagmi
        const calldata = encodeFunctionData({
          abi: erc20Abi,
          functionName: "transfer",
          args: [recipient, value],
        });
        const hash = await sendTransactionAsync({
          to: USDT_ADDRESS,
          data: calldata,
        });
        await publicClient.waitForTransactionReceipt({
          hash,
          confirmations: 2,
        });
      }

      toast.success(`Sent ${amount} USDT to ${recipient}`, {
        position: "bottom-right", // or "top-left", your call
      });
      setRecipient("");
      setAmount("");
      await fetchBalance(); // 🔄 update balance
    } catch (err) {
      console.error(err);
      toast.error("USDT Transfer Failed. " + (err.message || err), {
        position: "bottom-right", // or "top-left", your call
      });
    } finally {
      setIsAwaitingConfirmation(false); // ✅ Always reset state at the end
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        marginBottom: "2rem",
      }}
    >
      <h3 style={{ fontSize: "1.1rem" }}>Transfer USDT</h3>
      <p
        style={{ marginBottom: "0.5rem", color: "#374151", fontSize: "0.9rem" }}
      >
        <strong>USDT Balance:</strong>{" "}
        {usdtBalance !== null ? `${usdtBalance} USDT` : "Loading..."}
      </p>
      <input
        type="text"
        placeholder="Recipient address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.5rem",
          fontSize: "0.875rem",
          borderRadius: "0.5rem",
          border: "1px solid #d1d5db",
        }}
      />
      <input
        type="number"
        placeholder="Amount in USDT"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.5rem",
          fontSize: "0.875rem",
          borderRadius: "0.5rem",
          border: "1px solid #d1d5db",
        }}
      />
      <button
        onClick={handleSend}
        disabled={isPending || isAwaitingConfirmation}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor:
            isPending || isAwaitingConfirmation ? "#9ca3af" : "#10b981",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          fontWeight: 600,
          cursor:
            isPending || isAwaitingConfirmation ? "not-allowed" : "pointer",
        }}
      >
        {isAwaitingConfirmation
          ? "Waiting for wallet..."
          : isPending
          ? "Sending..."
          : "Send USDT"}
      </button>
    </div>
  );
};

export default USDTTransferBox;
```

`getErc20TokensForChain.js`

```js
import { TOKEN_ADDRESSES } from "../config/tokenAddresses";

// All tokens available for a given chain
export const getTokenListForChain = (chainId) => {
    return Object.entries(TOKEN_ADDRESSES)
        .filter(([token, addressMap]) => addressMap[chainId])
        .map(([token, addressMap]) => ({
            token,
            address: addressMap[chainId],
        }));
};

// ERC-20 only (filter out native)
export const getErc20TokensForChain = (chainId) => {
    return getTokenListForChain(chainId).filter(
        (t) => t.address !== "native"
    );
};
```

`Dashboard.js`

```js
import USDTTransferBox from '../components/USDTTransferBox';
import { useLocation } from 'react-router-dom';
import { getErc20TokensForChain } from "../utils/tokenHelpers";

function Dashboard() {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const tokens = getErc20TokensForChain(chainId);

  const loginSource = auth?.source || JSON.parse(localStorage.getItem('matchid-auth'))?.source;
  const passedSource = location?.state?.source || loginSource || 'matchid';

  const walletAddress =
    passedSource === 'external'
        ? auth?.externalWalletAddress
        : evmAccount?.address || matchidAddr;

  return (
    <div style={{ padding: '1rem', maxWidth: 1200, margin: '0 auto' }}>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
            }}
        >
            {tokens.map(({ token }) => {
                switch (token) {
                    case "USDT":
                        return <USDTTransferBox key={token} walletAddress={walletAddress} source={passedSource} />;
                    default:
                        return null;
                }
            })}
        </div>
    </div>
);
}

export default Dashboard;
```

### 🧠 What’s Going On

| Feature                   | (Hook) Used                              | Purpose                                  |
| ------------------------- | -------------------------------------- | ---------------------------------------- |
| Read contract data        | `useClient.publicClient.readContract`  | Reads current USDT balance               |
| Write contract action     | `useClient.walletClient.writeContract` | Transfers USDT                           |
| Client management         | `useClient()`                          | Used internally by the read/write functions/hooks  |

### ✅ Summary

This demo shows a simple, real-world way to combine the MatchID on-chain wallet capabilities to deliver a seamless on-chain interaction — no external wallet needed. Works with any EVM-compatible contract.
