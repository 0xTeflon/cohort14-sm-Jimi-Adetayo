

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OnchainNFTModule = buildModule("OnchainNFTModule", (m) => {
  const onchainNFT = m.contract("OnchainNFT", []);

  return { onchainNFT };
});

export default OnchainNFTModule;
