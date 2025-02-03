<!-- ---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MatchID SDK: Your Gateway to Web3 Integration"
  text: "Empowering Your Business with Seamless Web3 Access"
  tagline: The MatchID SDK is a cutting-edge software development kit designed for enterprises and developers. It simplifies the development and optimization of business applications, giving your business the tools it needs to thrive in the Web3 era.
  actions:
    - theme: brand
      text: React SDK
      link: react/overview

features:
  - title: Effortless Web3 Integration
    details: Our SDK makes Web3 technology accessible and user-friendly. Your users can harness the benefits and convenience of Web3 without needing to navigate the complexities of blockchain technology.
  - title: Accelerate Development Efficiency
    details: With the MatchID SDK, you can significantly reduce the time and cost of building applications from the ground up, enabling you to bring products to market faster and more efficiently.
  - title: Privacy and Security First
    details: EWe prioritize the security of your business and user data. The MatchID SDK incorporates robust, multi-layered security measures to ensure that your data remains safe and private.
  - title: Simple Integration
    details: The MatchID SDK is designed for effortless integration, allowing it to seamlessly fit into your existing software architecture with minimal effort.
  - title: Unmatched Performance
    details: Optimized for excellence, the MatchID SDK delivers superior performance to ensure your applications run smoothly and reliably.
  - title: Comprehensive Features
    details: From advanced data analytics to user management and beyond, the MatchID SDK offers a wide array of powerful tools to meet your business needs.
--- -->

<style>
/* Flexbox container for all cards */
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
    align-items: stretch; /* ✅ Ensure cards stretch to match height */
}

/* Consistent Card Styling for Uniform Size */
.card {
    flex: 1; /* Flex property for equal growth */
    flex-basis: 200px; /* ✅ Ensures all cards start with the same width */
    max-width: 200px; /* Prevent excessive growth */
    min-height: 250px; /* ✅ Consistent height for all cards */
    text-decoration: none;
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* ✅ Balanced spacing */
    align-items: center;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.card-explore-by-sdk {
    flex: 1; /* Flex property for equal growth */
    flex-basis: 100px; /* ✅ Ensures all cards start with the same width */
    max-width: 100px; /* Prevent excessive growth */
    min-height: 120px; /* ✅ Consistent height for all cards */
    text-decoration: none;
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* ✅ Balanced spacing */
    align-items: center;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Hover Effect */
.card:hover {
    background-color: #F9F9F9;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* Card Elements Styling */
.card-icon {
    font-size: 40px;
    color: black !important;
    margin-bottom: 10px;
}

.card-title {
    color: black !important;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
}

.card-description {
    color: rgba(60, 60, 67) !important;
    font-size: 14px;
    line-height: 1.5;
}

/* Prevent Underline on Hover */
.card:hover .card-title,
.card:hover .card-description,
.card:hover .card-icon {
    text-decoration: none;
    color: inherit;
}

/* Dark Mode Styling */
html.dark .card {
    border: 2px solid #333;
    color: rgba(255, 255, 255, 0.85);
    background-color: #222;
}

html.dark .card:hover {
    background-color: #2c2c2c;
}

html.dark .card-icon {
    color: rgba(255, 255, 255, 0.85);
}

html.dark .card-title,
html.dark .card-description {
    color: rgba(255, 255, 245, 0.86) !important;
}

/* ✅ Mobile View Fix: Cards Stack Vertically */
@media (max-width: 768px) {
    .card-container {
        flex-direction: column;
        align-items: center;
    }

    .card {
        width: 100%; /* Full width for mobile screens */
        max-width: 350px;
        min-height: 350px; /* Consistent height */
    }
}
</style>

<!-- Toastify Container -->
<div id="toast-container" style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; display: none;"></div>

<div style="border: 2px solid #3451b2; border-radius: 10px; padding: 20px; display: flex; align-items: center; gap: 20px;">

  <div style="flex: 1">
    <div style="display: flex; alignItems: center; gap: 10px;">
      <div style="background-color: #3451b2; color: white; font-weight: bold; padding: 5px 10px; border-radius: 5px; display: flex; align-items: center; gap: 5px;">
        <span>⚡</span>
        <span>New</span>
      </div>
      <h3 style="margin: 0; fontWeight: bold;">Introducing embedded wallets</h3>
    </div>
    <div style="margin-top: 10px; color: 5D4037; fontSize: 14px;">
      <p style="margin: 0">
        We're finally introducing you to MatchID's embedded wallets. Check out the overview section under the security chapter of the docs to get started.
      </p>
    </div>
  </div>

  <!-- <a href="/security/overview" style="color: #3451b2; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 5px;"> -->
  <a href="#" style="color: #3451b2; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 5px;">
    <span onclick="showCustomToast()">Explore</span>
    <span>→</span>
  </a>

</div>

## Welcome

<a href="https://matchid.ai" style="color: #3451b2; text-decoration: underline;">MatchID</a> builds user onboarding and embedded wallet infrastructure to enable better products built on crypto rails. This means embedding asset control within applications themselves to enable users, businesses, or machines to use digital assets through seamless product experiences.

Use MatchID's client-side SDKs to authenticate users, provide embedded wallets for them, and prompt wallet usage.

<div class="card-container">
  <!-- Card 1 -->
  <a href="https://developer.matchid.ai/dashboard" class="card" style="text-decoration: none">
    <div class="card-icon">➕</div>
    <h3 class="card-title">Create an account</h3>
    <p class="card-description">
      Get API keys and start <br />
      your integration in our dashboard
    </p>
  </a>

  <!-- Card 2 -->
  <a href="https://matchid.ai/dashboard" class="card" style="text-decoration: none">
    <div class="card-icon">🚀</div>
    <h3 class="card-title">Try our user dashboard</h3>
    <p class="card-description">
      Sign-in to our user dashboard to see <br />
      MatchID in action
    </p>
  </a>

  <!-- Card 3 -->
  <!-- <a href="#" class="card" style="text-decoration: none" onclick="showCustomToast()"> -->
  <a href="https://t.me/+PW6WBw8zFDcwNGI1" class="card" style="text-decoration: none">
    <div class="card-icon">💬</div>
    <h3 class="card-title">Join our Telegram</h3>
    <p class="card-description">
      Share what you're <br />
      building and get support from MatchID
    </p>
  </a>
</div>

## Using MatchID

Broadly, MatchID enables:

- **User Onboarding**—MatchID helps developers onboard users regardless of their experience with crypto-based systems. This means libraries to authenticate them, help them connect their existing wallets and provision self-custodial embedded wallets for them if they don't already have one.
- **Wallet Infrastructure**—Developers can also directly access MatchID’s bare-metal wallet APIs from our APIs using <a href="/api" style="color: #3451b2; text-decoration: underline;">MatchID API SDK</a> to provision and manage cross-chain wallets for any use case.

Where embedded wallets run on user devices by default, our server wallets reconstitute keys in secure enclaves controlled by the wallet owner. The private keys for both embedded and server wallets are never stored by MatchID, encrypted or otherwise. Key splitting ensures flexible recovery systems for all use cases, bringing together enterprise-grade security and consumer-grade performance.

## Explore by SDK

<div class="card-container">
  <!-- Card 1 -->
  <a href="/react/" class="card-explore-by-sdk" style="text-decoration: none;">
    <div style="display: flex; flex-direction: column; align-items: left; gap: 0px;">
      <div class="card-icon" style="height: 50px; width: 50px; display: flex; justify-content: center; align-items: center;">
        <img src="./image.png" style="max-height: 100%; max-width: 100%; object-fit: contain;">
      </div>
      <div style="display: flex; align-items: center;">
        <span class="card-description">React</span>
        <span style="margin-left: 10px">→</span>
      </div>
    </div>
  </a>

  <!-- Card 2 -->
  <!-- <a href="/flutter/" class="card" style="text-decoration: none; visibility: hidden;">
    <div class="card-icon" style="height: 66px; width: 50px;"></div>
    <div style="display: inline-flex;">
    <span>Flutter</span>
    <span style="margin-left: 10px">→</span>
    </div>
  </a> -->

  <!-- Card 3 -->
  <!-- <a href="/swift/" class="card" style="text-decoration: none; visibility: hidden;">
    <div class="card-icon" style="height: 66px; width: 50px;"></div>
    <div style="display: inline-flex;">
    <span>Swift</span>
    <span style="margin-left: 10px">→</span>
    </div>
  </a> -->

  <!-- Card 4 -->
  <!-- <a href="/unity/" class="card" style="text-decoration: none; visibility: hidden;">
    <div class="card-icon" style="height: 66px; width: 50px;"></div>
    <div style="display: inline-flex;">
    <span>Unity</span>
    <span style="margin-left: 10px;">→</span>
    </div>
  </a> -->

  <!-- Card 5 -->
  <!-- <a href="/android/" class="card" style="text-decoration: none; visibility: hidden;">
    <div class="card-icon" style="height: 66px; width: 50px;"></div>
    <div style="display: inline-flex;">
    <span>Android</span>
    <span style="margin-left: 10px;">→</span>
    </div>
  </a> -->
</div>

## Engineering Principles

At MatchID, we believe technical decisions are moral decisions. Below are the principles that guide our engineering decisions.

### Secure
Nothing is more important than your user's security. MatchID’s key management system uses Shamir’s secret sharing to shard user’s private keys such that neither your app, nor MatchID, can ever access a user’s keys. Keys are only ever reconstituted on the user’s device at the point of signing a message or sending a transaction.

MatchID regularly undergoes rigorous audits to ensure your users control and privacy over their wallets.

### Flexible
MatchID gives your application low level access to users and their wallets to support a fully customized product experience. Your application can access MatchID's functionality all the way down to the API level, supporting unique wallet flows including provisioning multiple wallets per user.

### Easy to Use
MatchID has out of the box UIs so your app can support authentication and wallet flows in minutes. These UIs are highly customizable and can even be fully white-labeled. This means access to out of the box funding methods, smart wallet creation pipelines, and more.

### Portable
MatchID is compatible with any chain your application operates on. Your application can provision embedded wallets (or link external wallets to a MatchID account) on Solana, Ethereum, and all EVM compatible chains. MatchID is at the bleeding edge of distributed systems so when you want to build on a new chain, that chain is already supported.


With layers of customizability, MatchID supports a wide range of product experiences.


