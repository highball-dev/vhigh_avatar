import { Contract } from "ethereal-react";

type Props = {
  contract: Contract;
  tokenId: number;
};
const Avatar = ({ contract, tokenId }: Props) => {
  const name = `#${tokenId}`;
  return (
    <>
      <h3>{name}</h3>
      <img src={`images/${tokenId}.png`} />
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

export default Avatar;
