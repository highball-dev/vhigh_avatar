// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, network } from "hardhat";
import { CUSTOME_BASE_URI, PUBLIC_KEY } from "../const";
import fs from "fs";
import path from "path";
import { Address } from "../types";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const saveAddress = (name: string, address: Address) =>
    fs.writeFileSync(
      path.resolve(__dirname, "..", "address", network.name, `${name}.pub`),
      address
    );

  /** VhighAvatarGen0 */
  console.log("VhighAvatarGen0");
  // deploy
  console.log("deploy...");
  const vhighAvatarGen0Factory = await ethers.getContractFactory(
    "VhighAvatarGen0"
  );
  const vhighAvatarGen0 = await vhighAvatarGen0Factory.deploy(CUSTOME_BASE_URI);
  await vhighAvatarGen0.deployed();
  console.log(`VhighAvatarGen0 deployed to: ${vhighAvatarGen0.address}`);
  saveAddress("VhighAvatarGen0", vhighAvatarGen0.address);

  // ownerBatchMint
  console.log("ownerBatchMint");
  const txOwnerBatchMint = await vhighAvatarGen0.ownerBatchMint(PUBLIC_KEY);
  const receiptOwnerBatchMint = await txOwnerBatchMint.wait();
  console.log(JSON.stringify(receiptOwnerBatchMint, null, 4));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
