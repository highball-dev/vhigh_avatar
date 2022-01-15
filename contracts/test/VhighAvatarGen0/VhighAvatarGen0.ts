import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import hre from "hardhat";
import type { Artifact } from "hardhat/types";

import { shouldBehaveLikeAfterBatchMint } from "./VhighAvatarGen0.batch";
import { shouldBehaveLikeDeployed } from "./VhighAvatarGen0.behavior";
import { shouldBehaveLikeNFT } from "./VhighAvatarGen0.nft";
import { shouldBehaveLikeAfterSale } from "./VhighAvatarGen0.sale";
import { shouldBehaveLikeAfterTransfer } from "./VhighAvatarGen0.transfer";
import type { VhighAvatarGen0 } from "../../typechain-types/VhighAvatarGen0";

const { deployContract } = hre.waffle;

export interface Signers {
  admin: SignerWithAddress;
}

describe("VhighAvatarGen0", () => {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await hre.ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Deploy", () => {
    beforeEach(async function () {
      const nftArtifact: Artifact = await hre.artifacts.readArtifact(
        "VhighAvatarGen0"
      );
      this.nft = <VhighAvatarGen0>(
        await deployContract(this.signers.admin, nftArtifact)
      );
    });

    shouldBehaveLikeNFT();
    shouldBehaveLikeDeployed();
  });

  describe("Owner Batch Mint", () => {
    beforeEach(async function () {
      const nftArtifact: Artifact = await hre.artifacts.readArtifact(
        "VhighAvatarGen0"
      );
      this.nft = <VhighAvatarGen0>(
        await deployContract(this.signers.admin, nftArtifact)
      );
      const nft = this.nft as VhighAvatarGen0;
      await nft.ownerBatchMint("0xF7Ebc23243bCB28ac70d6516AeC8785Ea74Fb9Cd");
    });

    shouldBehaveLikeNFT();
    shouldBehaveLikeAfterBatchMint();
  });

  describe("Permit sale for NFTs", () => {
    beforeEach(async function () {
      const nftArtifact: Artifact = await hre.artifacts.readArtifact(
        "VhighAvatarGen0"
      );
      this.nft = <VhighAvatarGen0>(
        await deployContract(this.signers.admin, nftArtifact)
      );
      const nft = this.nft as VhighAvatarGen0;
      await nft.ownerBatchMint("0xF7Ebc23243bCB28ac70d6516AeC8785Ea74Fb9Cd");
      await nft.setSaleIsActive(true);
      await nft.mint();
    });

    shouldBehaveLikeAfterSale();
  });

  describe("Owner Transfer", () => {
    beforeEach(async function () {
      const nftArtifact: Artifact = await hre.artifacts.readArtifact(
        "VhighAvatarGen0"
      );
      this.nft = <VhighAvatarGen0>(
        await deployContract(this.signers.admin, nftArtifact)
      );
      const nft = this.nft as VhighAvatarGen0;
      await nft.ownerBatchMint("0xF7Ebc23243bCB28ac70d6516AeC8785Ea74Fb9Cd");
      await nft.transferOwnership("0xF7Ebc23243bCB28ac70d6516AeC8785Ea74Fb9Cd");
    });

    shouldBehaveLikeNFT();
    shouldBehaveLikeAfterTransfer();
  });
});
