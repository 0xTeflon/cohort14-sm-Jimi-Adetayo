const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OnchainNFT", function () {
  let onchainNFT, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const OnchainNFT = await ethers.getContractFactory("OnchainNFT");
    onchainNFT = await OnchainNFT.deploy();
    await onchainNFT.waitForDeployment();
  });

  it("should mint an NFT and set token URI", async function () {
    const tokenURI = "https://example.com/token/1";
    await onchainNFT.mintNFT(addr1.address, tokenURI);
    expect(await onchainNFT.tokenURI(1)).to.equal(tokenURI);
  });
});
