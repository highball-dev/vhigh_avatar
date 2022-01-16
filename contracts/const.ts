import * as dotenv from "dotenv"; // eslint-disable-line node/no-unpublished-import
dotenv.config();

export const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
export const ROPSTEN_URL = process.env.ROPSTEN_URL || "";
export const PUBLIC_KEY = process.env.PUBLIC_KEY || "";
export const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
export const REPORT_GAS = process.env.REPORT_GAS === "true";
export const CUSTOME_BASE_URI = process.env.CUSTOME_BASE_URI || "";
export const RINKEBY_URL = process.env.RINKEBY_URL || "";
export const MAINNET_URL = process.env.MAINNET_URL || "";
