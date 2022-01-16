import type { Contract } from "ethereal-react";
import { useReadContract } from "ethereal-react";

export const useTokenId = (contract: Contract) => {
  const tokenId = useReadContract(contract, "totalSupply");

  return tokenId.toString();
};
