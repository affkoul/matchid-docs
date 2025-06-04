# MatchID SDK Documentation

Official documentation to help you integrate **MatchID** into your web applications, Telegram Mini Apps, and Mobile Apps. MatchID enables seamless Web3 identity and passport solutions with powerful tools for authentication, authorization, wallet services, and user data sovereignty.

---

## 📘 Table of Contents

- [MatchID SDK Documentation](#matchid-sdk-documentation)
  - [📘 Table of Contents](#-table-of-contents)
  - [🧾 About MatchID](#-about-matchid)
  - [🛠️ Client Side SDK for Web Apps](#️-client-side-sdk-for-web-apps)
  - [✨ Features](#-features)
  - [🚀 Migrating to MatchID for Telegram Mini Apps](#-migrating-to-matchid-for-telegram-mini-apps)
  - [📱 App WebView Auth for Mobile Apps](#-app-webview-auth-for-mobile-apps)
  - [🪪 Web3 Passport](#-web3-passport)
  - [📦 Installation](#-installation)
- [or](#or)

---

## 🧾 About MatchID

MatchID is a unified identity solution for Web3 applications. It supports email login, Socials login, wallet-based authentication, and credential-based access using Soulbound Tokens (SBTs). Designed for high scalability and privacy-preserving interactions.

---

## 🛠️ Client Side SDK for Web Apps

Learn how to install and use the MatchID SDK in React or other frontend frameworks. Supports functions like:
- Creating wallets
- Managing sessions
- Fetching user profiles
- Handling login state across the ecosystem

[See full guide →](./client-sdk.md)

---

## ✨ Features

- 🔒 Email & Social logins
- 💼 Keyless MPC Wallet and External Wallet support
- 🧬 Web3 Passport & SBT integration
- 📦 Session persistence
- 🔗 OpenAPI + REST-based architecture
- 🌐 Works in WebView, Telegram, and standard browsers

---

## 🚀 Migrating to MatchID for Telegram Mini Apps

A detailed guide on how to integrate MatchID inside Telegram’s WebApp context, enabling full authentication and user identity flow within Telegram Mini Apps.

[Migration Guide →](./telegram-migration.md)

---

## 📱 App WebView Auth for Mobile Apps

Support for native and hybrid mobile apps using WebViews to authenticate users securely via MatchID with deep-linking and token persistence.

---

## 🪪 Web3 Passport

Issue and verify **Soulbound Tokens (SBTs)** for users based on behavior, identity, or campaign actions. Includes APIs for minting and reading on-chain credentials.

[Explore Passport →](./passport.md)

---

## 📦 Installation

```bash
npm install @matchain/mid
# or
yarn add @matchain/mid
