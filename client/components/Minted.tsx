import {
  Contract,
  ContractTransaction,
  useWaitForTransaction,
} from "ethereal-react";
import { useEffect } from "react";
import Avatar from "./Avatar";
import UnderlinedLink from "./UnderlinedLink";

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
      <div className="mb-8">
        <Avatar tokenId={tokenId} />
      </div>

      <div className="text-center mb-28">
        <UnderlinedLink
          href={`https://${
            process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
              ? ""
              : "testnets."
          }opensea.io/assets/${contract.address}/${tokenId}`}
        >
          View in OpenSea
        </UnderlinedLink>
      </div>
    </>
  );
};

export default Minted;
