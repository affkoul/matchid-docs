# Security

<!-- Toastify Container -->
<div id="toast-container" style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; display: none;"></div>

<b>The security of your users' data and digital assets is our top priority at MatchID</b>. We recognize our role as a critical dependency for our customers' apps and greatly appreciate the responsibility that comes with that.

MatchID's internal architecture and infrastructure has gone through <b>several rounds of security reviews, audits, and pentesting</b>, which you can read more about <a href="/security/#third-party-reviews" style="color: #3451b2; text-decoration: underline;">here</a>. We treat security as a constantly-moving target, and undergo these reviews and audits on a regular basis to surface and address new issues.

Implementing, maintaining, and testing security in your app is a huge undertaking. <b>We've taken careful effort to use the best practices for securing your users' data and digital assets</b>.

Below, you can read more about some of these practices:

## App Authentication

### Methods

MatchID supports multiple methods for authenticating your end-users and verifying their identity. Today, this includes:

- verifying the user's <b>email </b> via a <a href="https://en.wikipedia.org/wiki/One-time_password" style="color: #3451b2; text-decoration: underline;">one-time password (OTP)</a> sent to their email address
- verifying the user's <b>social accounts</b> (Google, X, Instagram) via the <a href="https://oauth.net/2/" style="color: #3451b2; text-decoration: underline;">OAuth2.0 Protocol</a>
- verifying the user's ownership of a <b>wallet</b> via the <a href="https://eips.ethereum.org/EIPS/eip-4361" style="color: #3451b2; text-decoration: underline;">Sign In With Ethereum (SIWE)</a> standard

We do not support regular password-based verification given <a href="https://blog.lastpass.com/2021/09/breaking-the-cycle-of-password-reuse/" style="color: #3451b2; text-decoration: underline;">users' tendencies to use and reuse easy-to-guess passwords</a>, and the <a href="https://haveibeenpwned.com/" style="color: #3451b2; text-decoration: underline;">high incidence of password database breaches</a>

### Tokens

Once a user verifies their identity through one of the methods listed above, MatchID issues the user an <b>access token</b> and a <b>refresh token</b> to store the user's authenticated session in your app.

#### Access Token

The access token is a JSON Web Token (JWT) signed by a MatchID Ed25519 key specific to your app. This signature ensures that this token could have only been produced by MatchID, and cannot be spoofed. In your frontend, MatchID uses this access token to determine whether the user is authenticated or not. Your backend should use the access token on incoming requests <a href="#" style="color: #3451b2; text-decoration: underline;" onclick="showCustomToast()">to determine if the request originated from an authenticated user.</a>

The access token has a lifetime of one hour, to ensure that authenticated sessions can be easily revoked and to restrict the window of vulnerability in the unlikely case that the access token is exposed outside of your app.

#### Refresh Token

The refresh token is used to refresh the user's session once their access token has expired. It has a lifetime of 30 days, to ensure that users don't have to frequently login again, but can <b>only be used once</b>. This ensures that the refresh token can only be used to refresh an existing session, and never to create an entirely new session.

If the MatchID SDK detects that the access token or refresh token has been tampered with, it will immediately log the user out and will destroy the corresponding session in MatchID's backend.

## Content Security Policy (CSP)

MatchID allows your application to use Google for authentication. MatchID's embedded wallets are fully-compatible with any authentication provider that supports JWT-based, stateless authentication. If your application already uses an auth provider and you're looking to add embedded wallets to your app, MatchID is easily integrable with your existing stack.

## Best Practices

MatchID enables users to login to your application with email. With MatchID, your application can verify ownership of a user's email address to send them notifications, campaigns, and more to keep them activated.

## Telegram
<a href="https://telegram.org/" style="color: #3451b2; text-decoration: underline;">Telegram</a> is an end to end encrypted messaging platform with in-application experiences. MatchID enables your application to easily integrate Login with Telegram in multiple ways. From a regular web environment, users can authenticate to your application with their Telegram account.

## X
<a href="https://x.com/" style="color: #3451b2; text-decoration: underline;">X</a> is a tweeting platform with rich content and top audience. MatchID enables your application to easily integrate Login with X in multiple ways. From a regular web environment, users can authenticate to your application with their X account.

