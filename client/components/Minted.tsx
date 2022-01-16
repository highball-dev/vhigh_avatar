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
      <Avatar contract={contract} tokenId={tokenId} />
    </>
  );
};

export default Minted;
