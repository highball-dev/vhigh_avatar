import fs from "fs";
import { NFTStorage, File, toGatewayURL } from "nft.storage";

require("dotenv").config();

const endpoint = toGatewayURL("https://api.nft.storage");
const token = process.env.NFT_STORAGE_API_KEY || "";
const totalSupply =
  process.env.TOTAL_SUPPLY !== undefined ? +process.env.TOTAL_SUPPLY : 0;

async function main() {
  if (totalSupply === 0) {
    throw new Error("total supply is 0");
  }

  const storage = new NFTStorage({ endpoint, token });
  let files: File[] = [];
  for (let i = 0; i < totalSupply; i++) {
    const num = i + 1;
    const file = new File(
      [
        await fs.promises.readFile(
          `../hashlips_art_engine/build/json/${num}.json`
        ),
      ],
      `${num}.json`
    );
    files.push(file);
  }
  const cid = await storage.storeDirectory(files);
  console.log({ cid });
  const status = await storage.status(cid);
  console.log(status);
}

main();
