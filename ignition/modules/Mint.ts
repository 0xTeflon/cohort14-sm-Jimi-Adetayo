import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x8baee5E8cc6401275DabF191a5C399721f7D01a5";
  const tokenURI = "ipfs://QmTD6sBor6N7Wuxn2LQE1Dn1mECJRXhrd3skAv4sbiW7XA";

  const nft = await ethers.getContractAt("OnchainNFT", contractAddress);

  const tx = await nft.mintNFT(
    (
      await ethers.getSigners()
    )[0].address,
    tokenURI,
  );

  await tx.wait();

  console.log("NFT minted successfully");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
