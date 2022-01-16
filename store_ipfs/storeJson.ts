// TODO: test

// import fs from "fs";
// import { NFTStorage, File, toGatewayURL } from "nft.storage";

// require("dotenv").config();

// const endpoint = toGatewayURL("https://api.nft.storage");
// const token = process.env.NFT_STORAGE_API_KEY || "";
// const maxSupply =
//   process.env.MAX_SUPPLY !== undefined ? +process.env.MAX_SUPPLY : 0;

// async function main() {
//   if (maxSupply === 0) {
//     throw new Error("total supply is 0");
//   }

//   const storage = new NFTStorage({ endpoint, token });
//   const files = await Promise.all(
//     [...Array(maxSupply)].map(
//       async (num) =>
//         new File(
//           [
//             await fs.promises.readFile(
//               `../hashlips_art_engine/build/json/${num}.json`
//             ),
//           ],
//           `${num}.json`
//         )
//     )
//   );
//   const cid = await storage.storeDirectory(files);
//   console.log({ cid });
//   const status = await storage.status(cid);
//   console.log(status);
// }

// main();
