import { NEXT_PUBLIC_IPFS_CID } from "../const";

type Props = {
  tokenId: number;
};
const Avatar = ({ tokenId }: Props) => {
  const name = `#${tokenId}`;
  return (
    <>
      <h3>{name}</h3>
      <img
        src={`https://gateway.pinata.cloud/ipfs/${NEXT_PUBLIC_IPFS_CID}/${tokenId}`}
      />
    </>
  );
};

export default Avatar;
