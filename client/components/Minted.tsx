import {
  Contract,
  ContractTransaction,
  useWaitForTransaction,
} from "ethereal-react";
import { useEffect } from "react";
import Avatar from "./Avatar";

const Minted = ({
  transaction,
  contract,
  tokenId,
}: {
  transaction: ContractTransaction;
  contract: Contract;
  tokenId: number;
}) => {
  const confirmation = useWaitForTransaction(transaction);

  useEffect(() => {
    console.log(confirmation);
  });

  return (
    <>
      <h2>Minted !!!</h2>
      <Avatar tokenId={tokenId} />
      <a
        href={`https://${
          process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "" : "testnets."
        }opensea.io/assets/${contract.address}/${tokenId}`}
        target="_blank"
        rel="noreferrer"
      >
        View on opensea
      </a>
    </>
  );
};

export default Minted;
