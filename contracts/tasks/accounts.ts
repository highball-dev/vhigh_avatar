import { task } from "hardhat/config"; // eslint-disable-line node/no-unpublished-import
import "@nomiclabs/hardhat-ethers"; // eslint-disable-line node/no-unpublished-import

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  accounts.forEach((account, i) => {
    console.log(`Account #${i}: ${account.address}`);
  });
});
