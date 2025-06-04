# Web3 Passport For Developer

## Passport Space

As a [MatchID](https://developer.matchid.ai) developer, you can:

1️⃣ Create Passport Spaces

Access our [developer panel](https://developer.matchid.ai) to set up your project passport space. This dedicated space will be automatically integrated as a subpage within all MatchID user passports, enabling exposure to our global user base.

2️⃣ Issue SBT Credentials

Within your created passport space:

* Design and deploy SBTs (Soulbound Tokens) through our developer dashboard.
* All issued SBTs will be permanently displayed in the associated passport subpage.

3️⃣ User Visibility

* SBT holders automatically see your SBT credentials in their MatchID passport interface.
* Real-time display of both SBTs and their originating passport space.

### How to create a passport space?

1️⃣ Web Developer Panel
Log in to the Developer Dashboard, And navigate to Web3 Passport and submit the following information:

* Space logo
* Name & Description

Then connect your EVM wallet and send a `createOrgSpace` on-chain transaction, A Passport Space smart contract will be deployed on the Matchain.

Access Control Rules Of Passport Space:

* Transaction `createOrgSpace` sender will be the default owner of the space.
* Supports multiple team members (non-owner roles)
* Only the owner of space can add/remove team members.

## SBT

Once a Passport Space is created, You can issue SBTs belonging to your passport space.

1️⃣ SBT Issuance Rights:

* Both the Passport Space Owner and team members are granted full authority to issue SBTs.
* The Passport Space's contract address is the owner of all issued SBTs.
* By default, the Passport Space's smart contract holds the permission to mint SBTs.

2️⃣ Custom SBT Mint Permissions:

The owner and team members can authorize any address (including smart contract) to mint SBTs via the Developer Dashboard. For example, As a developer:

* You can have your own mint logic or call [`SBT.mint(address to)`](#sbt-contract) in your smart contract, And authorize the mint permission to your smart contract.
* You can authorize the mint permission to your EOA wallet address, And then you can send the [`SBT.mint(address to)`](#sbt-contract) transactions by the wallet.

### How to issue SBTs?

1️⃣ Web Developer Panel

Log in to the Developer Dashboard, And navigate to Web3 Passport, And connect your EVM wallet.

If you have ever created a passport space or joined a passport space as the team member, You will see your space details.

If you don't created a passport space or joined a passport space as the team member, You can create a new passport space by clicking the `Set up space` button.

Then you can click the `Issue SBT` button, And submit the following information:

* SBT Name
* SBT Symbol
* SBT Image or Metadata URL
  * If you use Metadata URL directly, please make sure the URL is accessible by the public and the content of Metadata should include the following information:

  ```json
  {
    "name": "SBT Name",
    "description": "SBT Description",
    "image": "SBT Image URL",
    "external_url": "SBT External URL"
  }
  ```

Then click the `Issue` button to send a `publishSBT` on-chain transaction, A SBT smart contract will be deployed on the Matchain.

## Smart contracts

<a id="sbt-contract"></a>
1️⃣ SBT Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/extensions/AccessControlEnumerable.sol";

contract SBT is AccessControlEnumerable, ERC721Enumerable {
    /// @notice minter role
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /// @notice base URI of SBT
    string public baseURI;

    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseURI_,
        address owner_
    ) ERC721(name_, symbol_) {
        baseURI = baseURI_;
        _grantRole(DEFAULT_ADMIN_ROLE, owner_);
        _grantRole(MINTER_ROLE, owner_);
    }

    /**
     * override `_update` function to make SBT NFT Non-Transferable
     * @dev See {ERC721-_update}.
     */
    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal virtual override(ERC721Enumerable) returns (address) {
        address previousOwner = super._update(to, tokenId, auth);
        require(previousOwner == address(0), "Non-Transferable");
        return previousOwner;
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(AccessControlEnumerable, ERC721Enumerable) returns (bool) {
        return
            super.supportsInterface(interfaceId) ||
            AccessControl.supportsInterface(interfaceId) ||
            ERC721Enumerable.supportsInterface(interfaceId);
    }

    /**
     * @notice update the baseURI of SBT
     */
    function setBaseURI(string memory baseURI_) external onlyRole(DEFAULT_ADMIN_ROLE) {
        baseURI = baseURI_;
    }

    /**
     * @notice mint SBT
     */
    function mint(address to) external onlyRole(MINTER_ROLE) {
        require(balanceOf(to) == 0, "Mint multiple SBT");
        _mint(to, totalSupply());
    }
}

```
