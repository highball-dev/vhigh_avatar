import { task } from "hardhat/config"; // eslint-disable-line node/no-unpublished-import
import "@nomiclabs/hardhat-ethers"; // eslint-disable-line node/no-unpublished-import
import { Address } from "../../types";

task("setSaleIsActive")
  .addParam("contractaddress")
  .addParam("saleisactive", "true or false")
  .setAction(
    async (
      args: {
        contractaddress: Address;
        saleisactive: string;
      },
      hre
    ) => {
      const [owner] = await hre.ethers.getSigners();
      const contract = await hre.ethers.getContractAt(
        "VhighAvatarGen0",
        args.contractaddress
      );
      await contract
        .connect(owner)
        .setSaleIsActive(args.saleisactive === "true");
      const saleIsActive = await contract.saleIsActive();
      console.log(`saleIsActive: ${saleIsActive}`);
    }
  );
