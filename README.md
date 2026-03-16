# OnchainNFT

A simple ERC721 NFT contract for minting onchain NFTs with customizable token URIs.

## Contract Details

### Addresses

| Item                               | Address                                                                                |
| ---------------------------------- | -------------------------------------------------------------------------------------- |
| **Contract Address**               | `0x8baee5E8cc6401275DabF191a5C399721f7D01a5`                                           |
| **NFT Address (Same as Contract)** | (https://sepolia-blockscout.lisk.com/token/0x8baee5E8cc6401275DabF191a5C399721f7D01a5) |

## Contract Information

- **Name:** OnchainNFT
- **Symbol:** OnchainNFT
- **Standard:** ERC721 with URI Storage (ERC721URIStorage)
- **Network:** [Add your network here]

## Features

- Mint NFTs with custom token URIs
- Owner-based access control using Ownable
- Full ERC721 compatibility

## Functions

### `mintNFT(address recipient, string memory tokenURI)`

Mints a new NFT to the specified recipient with a custom token URI.

**Parameters:**

- `recipient`: Address to receive the minted NFT
- `tokenURI`: URI pointing to the NFT metadata

**Returns:** `uint256` - The ID of the newly minted token

**Access:** Owner only

## Quick Start

```bash
# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy contract
npx hardhat ignition deploy ./ignition/modules/DeployOnchainNFT.ts
```

## License

MIT
